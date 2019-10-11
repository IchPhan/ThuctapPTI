import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-radio-group',
  template: `
  <div class="form-check" *ngFor="let item of field.values">
  <input [class]="field.className" type="radio" [name]="field.name"  [value]="item.value">
  <label class="form-check-label" for="exampleRadios1">
    {{item.label}}
  </label>
</div>

  `,
  styles: []
})
export class RadioGroupComponent implements OnInit {

  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
