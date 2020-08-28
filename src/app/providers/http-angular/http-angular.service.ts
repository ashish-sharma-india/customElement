import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpAngularService {

  constructor(public http: HttpClient) { }

  public get(url: string, params?: any, options: any = {}) {
    options.params = params;
    options.withCredentials = true;
    return this.http.get(url, options);
  }

  public post(url: string, params: any, options: any = {}) {
    options.withCredentials = true;
    return this.http.post(url, params, options);
  }

}
