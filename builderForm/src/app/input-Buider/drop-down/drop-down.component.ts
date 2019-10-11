import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-drop-down',
  template: `
  <div class="form-group">
  <label [for]="field.name">Example select</label>
  <select class="form-control" [id]="field.name">
    <option *ngFor="let item of field.values" [value]="item.value">{{item.label}}</option>
  </select>
</div>
  `,
  styles: []
})
export class DropDownComponent implements OnInit {

  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
