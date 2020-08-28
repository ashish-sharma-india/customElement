import { Injectable } from '@angular/core';
import { Observable, from } from "rxjs";
import { HttpService } from '../providers/http/http.service';

@Injectable()
export class DataService {

  private API_ENDPOINT: string = "https://uirbk21ys7.execute-api.us-west-2.amazonaws.com";
  constructor(private http: HttpService) {
    
  }

  /** Starts => get http calls setup **/
  private GetServiceList: Object = {
    "patientList": "/sandbox/patienthealthrecord/v1/patients?pageIndex=1&pageSize=1&firstName=Ryan"
  }

  getDataService(serviceName: string): Observable<any> {
    return this.http.get(this.API_ENDPOINT + this.GetServiceList[serviceName]);
  }

  getPatientList(): Observable<any> {
    return this.getDataService("patientList");
  }
  /** End => get http calls setup **/


  /** Starts => post http calls setup **/
  private PostServiceList: Object = {
  }
  
  postDataService(serviceName: string, payload = {}): Observable<any> {
    return this.http.post(this.API_ENDPOINT + this.PostServiceList[serviceName], payload);
  } 
  /** End => post http calls setup **/

  
}
