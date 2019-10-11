import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-number',
  template: `
    <div class="form-group">
      <label *ngIf="field.lable" [htmlFor]="field.className">{{field.lable}}</label>
      <input [className]="field.className" type="number"/>
      <small class="form-text text-muted">Enter your number</small>
    </div>
  `,
  styles: []
})
export class NumberComponent implements OnInit {
  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
