import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-text',
  template: `
  <div class="form-group">
  <label [for]="field.name">Email address</label>
  <input type="text" [className]="field.className" [id]="field.name" placeholder="Enter your key">
</div>
  `,
  styles: []
})
export class TextComponent implements OnInit {

  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
