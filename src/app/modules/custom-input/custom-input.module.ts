import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from './input-container.component';
import { CustomField } from './directives/custom-field.directive';
import { CustomLabel } from './directives/custom-label.directive';



@NgModule({
  declarations: [
    InputContainerComponent,
    CustomField,
    CustomLabel
  ],
  exports: [
    InputContainerComponent,
    CustomField,
    CustomLabel
  ],
  imports: [
    CommonModule
  ]
})
export class CustomInputModule { }
