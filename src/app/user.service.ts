import { Injectable } from '@angular/core';
import { user } from './user';
import { userData } from './UserInfo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public UserLoginInfo:user;
  public Ulogin(email: string, password: string): Observable<user>{
    this.UserLoginInfo=userData.find(us=>us.email===email && us.password===password);
    return of(this.UserLoginInfo);
  }
  constructor() { }
}
