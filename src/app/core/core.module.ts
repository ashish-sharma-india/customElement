import { NgModule, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA,ErrorHandler } from '@angular/core';
import { DataService } from './data.service';
import { HttpAngularService } from '../providers/http-angular/http-angular.service';
import { HttpService } from '../providers/http/http.service';

@NgModule({
  imports: [
  ],
  providers: [
    HttpService,
    DataService,
    HttpAngularService
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}