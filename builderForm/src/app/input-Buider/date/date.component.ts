import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-date',
  template: `
  <div class="form-group">
    <label [htmlFor]="field.name">Email address</label>
    <input type="date" [className]="field.className" [id]="field.name">
</div>
  `,
  styles: []
})
export class DateComponent implements OnInit {

  @Input() field:Field;
  //@Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
