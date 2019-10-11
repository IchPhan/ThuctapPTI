import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-textarea',
  template: `
  <div class="form-group">
  <label [for]="field.name">Example textarea</label>
  <textarea [class]="field.className" [id]="field.name" rows="3"></textarea>
</div>
  `,
  styles: []
})
export class TextareaComponent implements OnInit {

  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
