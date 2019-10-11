import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-check-box',
  template: `
  <div class="form-group form-check">
  <input type="checkbox" [class]="field.className" [id]="field.name">
  <label class="form-check-label" [for]="field.name">Check me out</label>
</div>
  `,
  styles: []
})
export class CheckBoxComponent implements OnInit {

  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
