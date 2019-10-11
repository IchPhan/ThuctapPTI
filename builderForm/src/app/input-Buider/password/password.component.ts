import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-password',
  template: `
  <div class="form-group row">
  <label [for]="field.name" class="col-sm-2 col-form-label">Password</label>
  <div class="col-sm-10">
    <input type="password" [class]="field.className" [id]="field.name" placeholder="Password">
  </div>
</div>
  `,
  styles: []
})
export class PasswordComponent implements OnInit {

  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
