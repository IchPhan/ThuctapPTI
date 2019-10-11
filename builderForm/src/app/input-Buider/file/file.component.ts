import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-file',
  template: `
  <div class="form-group">
  <label [for]="field.name">Example file input</label>
  <input type="file" [class]="field.className" [id]="field.name">
</div>
  `,
  styles: []
})
export class FileComponent implements OnInit {

  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
