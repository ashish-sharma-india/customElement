import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  singleSelectOptions: Array<any> = [
    {'code': 'bio_sx', 'name': 'Bio/SX'},
    {'code': 'first_reported', 'name': 'First Reported'},
    {'code': 'follow_ups', 'name': 'Follow Ups'},
    {'code': 'messages', 'name': 'Messages'},
    {'code': 'inventions', 'name': 'Inventions'},
    {'code': 'not_reported', 'name': 'Not Reported'},
    {'code': 'referrals', 'name': 'Referrals'},
    {'code': 'unknown_devices', 'name': 'Unknown Devices'},
    {'code': 'scheduled_outreach', 'name': 'Scheduled Outreach'},
    {'code': 'admin_services', 'name': 'Admin Services'},
    {'code': 'alert_review', 'name': 'Alert Review'}
  ];
  singleSelectGroupedOptions: Array<any> = [
    {'code': 'black', 'color': 'Black', 'type': 'Dark'},
    {'code': 'green', 'color': 'Green', 'type': 'Dark'},
    {'code': 'red', 'color': 'Red', 'type': 'Dark'},
    {'code': 'blue', 'color': 'Blue', 'type': 'Dark'},
    {'code': 'white', 'color': 'White', 'type': 'Light'},
    {'code': 'pink', 'color': 'Pink', 'type': 'Light'},
    {'code': 'sky_blue', 'color': 'Sky Blue', 'type': 'Light'},
    {'code': 'yellow', 'color': 'Yellow', 'type': 'Light'}
  ];

  multiSelectOptions: Array<any> = [
    {'code': 'alabama', 'state': 'Alabama'},
    {'code': 'alaska', 'state': 'Alaska'},
    {'code': 'arizona', 'state': 'Arizona'},
    {'code': 'arkansas', 'state': 'Arkansas'},
  ];

  multiSelectGroupedOptions: Array<any> = [
    {'code': 'all_group', 'name': 'All Grpups', 'type': 'Baylor University', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'shauna_group', 'name': 'Shauna\'s Group', 'type': 'Baylor University', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'alec_group', 'name': 'Alec\'s Group', 'type': 'Baylor University', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'abc', 'name': 'ABC', 'type': 'Texas Hospital', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'mno', 'name': 'MNO', 'type': 'Texas Hospital', 'searchPlaceHolder': 'Search Groups'},
    {'code': 'pqr', 'name': 'PQR', 'type': 'Texas Hospital', 'searchPlaceHolder': 'Search Groups'}
  ];

  inputSelectOption: Array<any> = [
    {'code': 'anatomy_physiology', 'name': 'Anatomy/Physiology'},
    {'code': 'anger_management', 'name': 'Anger Management'},
    {'code': 'behhavior_modification', 'name': 'Behhavior Modification'},
    {'code': 'bladder_care', 'name': 'Bladder Care'},
    {'code': 'bonding_attachment', 'name': 'Bonding/Attachment'},
    {'code': 'bowel_care', 'name': 'Bowel Care'},
    {'code': 'cardiac_care', 'name': 'Cardiac Care'},
    {'code': 'day_care_respite', 'name': 'Day Care/Respite'},
    {'code': 'dietary_management', 'name': 'Dietary Management'},
    {'code': 'discipline', 'name': 'Discipline'},
    {'code': 'dressing_change_wound_care', 'name': 'Dressing Change/Wound Care'},
    {'code': 'durable_medical_equipment', 'name': 'Durable Medical Equipment'},
  ];

  constructor() { }

  selectSingleOption(event): void {
    console.log(event)
  }

  multiSingleOption(event): void {
    console.log(event)
  }

  showHideCode(key: string): void {

  }
  
  ngOnInit() {
    
  }

}
