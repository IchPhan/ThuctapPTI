import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormBuiderComponent} from './form-buider/form-buider.component'
import { from } from 'rxjs';
import { UserFormComponent } from './user-form/user-form.component';
import { Form } from './form';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([{path:"",component:FormBuiderComponent},{path:"userForm/:formId",component:UserFormComponent}]),
    BrowserModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
