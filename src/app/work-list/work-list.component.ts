import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkListComponent implements OnInit {

  private subscription: Subscription;
  constructor(private dataService: DataService) { }
  
  clientFilterOptions: Array<any> = [
    {'code': 'all_group', 'name': 'All Grpups', 'type': 'Baylor University', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'shauna_group', 'name': 'Shauna\'s Group', 'type': 'Baylor University', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'alec_group', 'name': 'Alec\'s Group', 'type': 'Baylor University', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'abc', 'name': 'ABC', 'type': 'Texas Hospital', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'mno', 'name': 'MNO', 'type': 'Texas Hospital', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'pqr', 'name': 'PQR', 'type': 'Texas Hospital', 'searchPlaceHolder': 'Search Groups'}
  ];

  stateFilterOptions: Array<any> = [
    {'code': 'alabama', 'state': 'Alabama'},
    {'code': 'alaska', 'state': 'Alaska'},
    {'code': 'arizona', 'state': 'Arizona'},
    {'code': 'arkansas', 'state': 'Arkansas'},
  ];

  tagFilterOptions: Array<any> = [
    {'code': 'must_eval', 'name': 'Must Eval'},
    {'code': 'alerts', 'name': 'Alerts'},
    {'code': 'admin_only', 'name': 'Admin Only'}
  ];

  patientListObject: Object = null;
  patientList:Array<Object> = null;
  isLoading: boolean = true;
  loadPatientList(): void {
    this.patientList = null;
    this.isLoading = true;
    this.subscription.add(this.dataService.getDataService("patientList").subscribe(res => {
      this.setPatientList(res);
      console.log(res);
    }, error => {
      console.log(error);
      // duymmy data-- need to remove it once API is working
      this.setPatientList({"id":null,"resourceType":"patient","timestamp":"2020-08-28T10:14:56.2596042Z","total":4,"page":0,"results":[{"id":"1","identifier":null,"name":{"last":"Vanilla1","first":"Ryan"},"birthDate":"1995-01-29T00:00:00","address":[{"use":0,"line":null,"city":"","state":"","postalCode":null}],"telecom":null,"communication":null},{"id":"2","identifier":null,"name":{"last":"Vanilla2","first":"Ryan"},"birthDate":"1995-01-29T00:00:00","address":[{"use":0,"line":null,"city":"Minneapolis","state":"MN","postalCode":null}],"telecom":null,"communication":null},{"id":"3","identifier":null,"name":{"last":"pas3managed1","first":"Ryan"},"birthDate":"1995-01-29T00:00:00","address":[{"use":0,"line":null,"city":"Minneapolis","state":"MN","postalCode":null}],"telecom":null,"communication":null},{"id":"4","identifier":null,"name":{"last":"pas3managed2","first":"Ryan"},"birthDate":"1995-01-29T00:00:00","address":[{"use":0,"line":null,"city":"Minneapolis","state":"MN","postalCode":null}],"telecom":null,"communication":null}]});
    }));
  }

  setPatientList(response) {
    this.isLoading = false;
    this.patientListObject = response;
    if(this.patientListObject) {
      this.patientList = this.patientListObject['results'];
    }
  }

  ngOnInit() {
    this.subscription = new Subscription();
    this.loadPatientList();
  }
}
