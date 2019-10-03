import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { User } from '../model/user';
import { UserServiceService } from '../service/user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: User;
  formUserRegister;
  changesex: boolean = false;
  user$: Observable<User[]>;

  constructor(
    private FormBuider: FormBuilder,
    private UserService: UserServiceService,
    private http: HttpClient
  ) {
    this.user = UserService.getDefault();
    this.formUserRegister = this.FormBuider.group({
      fullname: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      birthday: new FormControl(),
      address: new FormControl(),
      sex: new FormControl()
    });
  };
  ngOnInit() {
  }
  changerSex() {
    this.changesex = !this.changesex;
  }
  onSubMit(users) {
    var userJson = JSON.stringify(users);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    this.http.post("/api/account/create", userJson, options).subscribe(
      (result:JSON) => {
      this.user = new User(result['fullname'],
        result['address'],
        result['phone'],
        result['email'],
        result['sex'],
        result['birthday']);
      }
    );
  }

}
