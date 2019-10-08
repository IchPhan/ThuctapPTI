import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormBuiderComponent} from './form-buider/form-buider.component'
import { from } from 'rxjs';


const routes: Routes = [{path:"",component:FormBuiderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
