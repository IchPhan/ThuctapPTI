import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../form';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Value } from '../value';
import { Field } from '../field';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: Form;
  listField: Field[] = [];
  contentTest: "<span>dmmmsadadad</span>";
  constructor(
    private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    var formId = this.route.snapshot.paramMap.get("formId");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    };
    this.http.get<Form>("/api/form/user/" + formId, options).subscribe((result) => {
      var temp = JSON.parse(result.toString());
      var form = temp['fields'];
      this.userForm = new Form();
      this.userForm._id = temp['_id'];
      this.userForm.__v = temp['__v'];
      try {
        form.forEach(field => {//get list 
          var listValue = field['values'];
          var newField = new Field();
          newField.className = field['className'];
          newField.name = field['name'];
          newField.style = field['style'];
          newField.subtype = field['subtype'];
          newField.type = field['type'];
          newField.lable = field['lable'];
          newField._id = field['_id'];
          newField.__v = field['__v'];
          try {
            listValue.forEach(value => {
              var newValue = new Value();
              newValue.label = value['label'];
              newValue.value = value['value'];
              newValue._id = value['_id'];
              newValue.__v = value['__v'];
              newField.values.push(newValue);
            });
          } catch (error) {
            newField.values = null;
          }
          this.userForm.fields.push(newField);
        });
        this.listField = this.userForm.fields;
      } catch (error) {
      }

    })
  }

}
