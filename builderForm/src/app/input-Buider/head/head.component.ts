import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';

@Component({
  selector: 'app-head',
  template: `
    <p>
      head works!
    </p>
  `,
  styles: []
})
export class HeadComponent implements OnInit {

  @Input() field:Field;
  constructor() { }

  ngOnInit() {
  }

}
