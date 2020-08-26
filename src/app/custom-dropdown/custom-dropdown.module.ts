import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropdownComponent } from './custom-dropdown.component';
import { MatCheckboxModule, MatIconModule } from '@angular/material';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@NgModule({
  declarations: [CustomDropdownComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MalihuScrollbarModule.forRoot()
  ],
  exports: [ CustomDropdownComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomDropdownModule { }
