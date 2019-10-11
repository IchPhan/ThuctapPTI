import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as $ from 'jquery';
declare var $ : any;

@Component({
  selector: 'app-form-buider',
  templateUrl: './form-buider.component.html',
  styleUrls: ['./form-buider.component.css']
})
export class FormBuiderComponent implements OnInit {
  data: JSON;
  userForm:Form;
  constructor(
    private http: HttpClient,
    private router:Router,
    // private route:Route,
    // private activatedRouteSnapshot:ActivatedRouteSnapshot,
  ) { }

  ngOnInit() {
  }
  saveFormBuider() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }
    var fbEditor = document.getElementById('build-wrap');
    this.data =$(fbEditor).formBuilder('getData','json');
    this.http.post("/api/form/create", {"data":this.data},options).subscribe((result:JSON)=>{
      var temp=JSON.parse(result.toString());
      this.userForm=new Form();
      this.userForm._id=temp['_id'];
      this.router.navigate(["/userForm/"+this.userForm._id]);
    })
  }
}
