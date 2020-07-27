export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
}


export interface UserWithColorModel {
  color: string;
  users: UserModel[];
}


export interface UsersByMonths {
  January: UserWithColorModel;
  February: UserWithColorModel;
  March: UserWithColorModel;
  April: UserWithColorModel;
  May: UserWithColorModel;
  June: UserWithColorModel;
  July: UserWithColorModel;
  August: UserWithColorModel;
  September: UserWithColorModel;
  October: UserWithColorModel;
  November: UserWithColorModel;
  December: UserWithColorModel
}



