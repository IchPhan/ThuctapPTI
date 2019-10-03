import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from '../app/user-profile/user-profile.component';
  import { from } from 'rxjs';
import { UserRegisterComponent } from './user-register/user-register.component';
import { User } from './model/user';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [ ];

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: UserProfileComponent},{path: 'user-register', component: UserRegisterComponent}]),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
