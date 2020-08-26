import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select.component';
import { MatIconModule } from '@angular/material';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@NgModule({
  declarations: [ CustomSelectComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    MalihuScrollbarModule.forRoot()
  ],
  exports: [ CustomSelectComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CustomSelectModule { }
