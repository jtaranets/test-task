import {Component, OnInit} from '@angular/core';
import {GetDataService} from './services/get-data.service';
import {UserModel, UsersByMonths} from './models/userModel';
import {Months} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yalantis-test';
  usersByMonths: UsersByMonths = {
    January: {
      color: '',
      users: []
    },
    February: {
      color: '',
      users: []
    },
    March: {
      color: '',
      users: []
    },
    April: {
      color: '',
      users: []
    },
    May: {
      color: '',
      users: []
    },
    June: {
      color: '',
      users: []
    },
    July: {
      color: '',
      users: []
    },
    August: {
      color: '',
      users: []
    },
    September: {
      color: '',
      users: []
    },
    October: {
      color: '',
      users: []
    },
    November: {
      color: '',
      users: []
    },
    December: {
      color: '',
      users: []
    }
  };
  months = Months;

  constructor(private getDataService: GetDataService) {
    this.filterUsersByMonths = this.filterUsersByMonths.bind(this);
  }

  ngOnInit(): void {
    this.getDataService.getData().subscribe(this.filterUsersByMonths);
  }

  filterUsersByMonths(users: UserModel[]): void {
    const usersByMonths = users.reduce((acc, user) => {
      const month = new Date(user.dob).getMonth();
      acc = {...acc, [Months[month]]: {...acc[Months[month]], users: [...acc[Months[month]].users, user]}};
      return acc;
    }, this.usersByMonths );
    Object.keys(usersByMonths).forEach(m => {
      usersByMonths[m] = {
        ...usersByMonths[m],
        color: this.getColor(usersByMonths[m].users.length),
      };
    });
    this.usersByMonths = usersByMonths;
  }

  getColor(quantity): string {
    switch (true) {
      case (quantity < 3):
        return 'grey';
        break;
      case (quantity >= 3 && quantity < 7):
        return 'blue';
        break;
      case (quantity >= 7 && quantity < 11):
        return 'green';
        break;
      default:
        return 'red';
    }
  }
}
