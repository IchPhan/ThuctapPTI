import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user.service';
import { User } from '../model/user';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  user$: Observable<User>;
  constructor(
    private userService: UserServiceService,
    private UserService: UserServiceService,
    private http: HttpClient) { }

  ngOnInit() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    this.http.get("/api/account", options).subscribe((result: JSON) => {
      // Read the result field from the JSON response.
      this.user=new User(result['fullname'],
      result['address'],
      result['phone'],
      result['email'],
      result['sex'],
      result['birthday']);
    });
    if (this.user == null) { this.user = this.userService.getDefault(); }
  }
}
