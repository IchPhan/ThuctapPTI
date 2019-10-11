import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormBuiderComponent } from './form-buider/form-buider.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder/dynamic-form-builder.component';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { NumberComponent } from './input-Buider/number/number.component';
import { TextComponent } from './input-Buider/text/text.component';
import { RadioGroupComponent } from './input-Buider/radio-group/radio-group.component';
import { DropDownComponent } from './input-Buider/drop-down/drop-down.component';
import { CheckBoxComponent } from './input-Buider/check-box/check-box.component';
import { DateComponent } from './input-Buider/date/date.component';
import { PasswordComponent } from './input-Buider/password/password.component';
import { TextareaComponent } from './input-Buider/textarea/textarea.component';
import { FileComponent } from './input-Buider/file/file.component';
import { HeadComponent } from './input-Buider/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    FormBuiderComponent,
    DynamicFormBuilderComponent,
    NumberComponent,
    TextComponent,
    RadioGroupComponent,
    DropDownComponent,
    CheckBoxComponent,
    DateComponent,
    PasswordComponent,
    TextareaComponent,
    FileComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicFormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
