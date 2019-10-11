import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../field';

@Component({
  selector: 'app-dynamic-form-builder',
  template: `
    <div [ngSwitch]="field.type">
      <div *ngSwitchCase="'number'"><app-number [field]="field"></app-number></div>
      <div *ngSwitchCase="'checkbox-group'">
        <app-check-box [field]="field"></app-check-box>
      </div>
      <div *ngSwitchCase="'date'">
        <app-date [field]="field"></app-date>
        </div>
      <div *ngSwitchCase="'select'">
        <app-drop-down [field]="field"></app-drop-down>
        </div>
      <div *ngSwitchCase="'file'">
        <app-file [field]="field"></app-file>
      </div>
      <div *ngSwitchCase="'header'">
        <app-head [field]="field"></app-head>
      </div>
      <div *ngSwitchCase="'password'"><app-password [field]="field"></app-password></div>
      <div *ngSwitchCase="'radio-group'"><app-radio-group [field]="field"></app-radio-group></div>
      <div *ngSwitchCase="'textarea'"><app-textarea [field]="field"></app-textarea></div>
      <div *ngSwitchCase="'text'"><app-text [field]="field"></app-text></div>
    </div>
  `,
  styles: []
})
export class DynamicFormBuilderComponent implements OnInit {
  @Input() field: Field;
  type:["number","text"];
  constructor() { }

  ngOnInit() {
  }

}
