import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private url = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url);
  }
}
