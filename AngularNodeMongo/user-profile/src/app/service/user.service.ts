import { Injectable } from '@angular/core';
import {User} from '../model/user';
import { from } from 'rxjs';
import {  DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user: User;
  users:Array<User>;
  constructor() { 
  }
  getDefault(){
   this.user =new User("Phan huy ich","Nghe an","0978697075","Phanich95@gmail.com",true,new Date("1995-10-18"));
   return this.user;
  }
}
