import { Injectable } from '@angular/core';
import { HttpAngularService } from '../http-angular/http-angular.service';
@Injectable()
export class HttpService {
  public http: HttpAngularService;
  constructor(private angularHttp: HttpAngularService) {
    this.http = this.angularHttp;
  }
  get(url: string, params?, options?) {
    const trackingEnabled = window['top']['UniWeb'] && window['top']['UniWeb']['traceLogEnabled'];
    const trackingUID = window['top']['UniWeb'] && window['top']['UniWeb']['traceLogEnabledUID'];
    if(trackingEnabled && !!trackingUID) {
      url += url.indexOf("?") > -1 ? "&tlk=" + trackingUID : "?tlk=" + trackingUID;
    }
    return this.http.get(url, params, options);
  }
  post(url: string, params?, options?) {
    const trackingEnabled = window['top']['UniWeb'] && window['top']['UniWeb']['traceLogEnabled'];
    const trackingUID =  window['top']['UniWeb'] && window['top']['UniWeb']['traceLogEnabledUID'];
    if(trackingEnabled && !!trackingUID) {
      url += url.indexOf("?") > -1 ? "&tlk=" + trackingUID : "?tlk=" + trackingUID;
    }
    return this.http.post(url, params, options);
  }
}
