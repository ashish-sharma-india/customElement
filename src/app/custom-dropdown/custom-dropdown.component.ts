import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomDropdownComponent implements OnInit {

  @Input("name") name: String = 'key';
  @Input("key") key: String = 'key';
  @Input("value") value = 'value';
  @Input("label") label: String = '';

  @Input("multi") multi: boolean = false;
  @Input("groupKey") groupKey = null;
  @Input("options") options: Array<Object> = [];

  @Input("searchPlaceHolder") searchPlaceHolder: String = null;
  
  @Output() change = new EventEmitter<any>();

  groupedBy: boolean = false;
  singleSelectedOption: any = null;
  multiSelectedOptions: Array<any> = [];

  public opened: boolean = false;
  public singleGroupInMultiSelect: boolean = false;
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  
  constructor(private eRef: ElementRef) { }

  searchMultiSelectOptions(groupedOption, event): void {
    if(groupedOption && groupedOption.options && groupedOption.options.length > 0) {
      var searchText = event.target.value;
      groupedOption['searchText'] = searchText;
      searchText = searchText.toLowerCase();
      for(var index in groupedOption.options) {
        var option = groupedOption.options[index];
        var displayText  = option[this.value];
        option['hide'] = searchText == "" ? false : displayText.toLowerCase().indexOf(searchText) != 0;
      }
    }
  }

  openClose(open, previousState): void {
    this.opened = open;
    if(!this.opened && previousState) {
      if(this.multi) {
        this.change.emit(this.multiSelectedOptions);
      } else {
        this.change.emit(this.singleSelectedOption);
      }
    }
  }
  
  toggleOpenGroupedOptions(groupedOption): void {
    groupedOption['opened'] = !groupedOption['opened'];
  }

  selectOption(option): void {
    if(!this.multi) {
      this.singleSelectedOption = option;
      this.openClose(false, true);
    }
  }
  
  multiSelect(option, event, groupedOption): void {
    this.addRemoveMultiSelect(option, event.checked);
    if(groupedOption && groupedOption.options && groupedOption.options) {
      groupedOption['selectAll'] = true;
      groupedOption.options.forEach(option => {
        if(!this.multiSelectedOptions.includes(option)) {
          groupedOption['selectAll'] = false;
        }
      });
    }
  }
  multiGroupSelect(groupedOption, event): void {
    groupedOption['selectAll'] = event.checked;
    groupedOption.options.forEach(option => {
      this.addRemoveMultiSelect(option, event.checked);
    });
  }

  addRemoveMultiSelect(option, checked): void {
    if(checked) {
      this.addMultiSelect(option);
    } else {
      this.removeMultiSelect(option);
    }
  }

  addMultiSelect(option): void { 
    if(!this.multiSelectedOptions.includes(option)) {
      this.multiSelectedOptions.push(option);
    }
  }

  removeMultiSelect(option): void {
    if(this.multiSelectedOptions.includes(option)) {
      var index = this.multiSelectedOptions.indexOf(option);
      this.multiSelectedOptions.splice(index, 1);  
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    var classList = event.target.classList;
    var open = this.eRef.nativeElement.contains(event.target);
    if(open && (classList.contains('custom-dropdown-label') || classList.contains('label-icon'))) {
      open  = !this.opened;
    }
    this.openClose(open, this.opened);
  }

  ngOnInit() {

    if(this.options != null && this.options.length > 0) {
      if(this.groupKey != null && this.groupKey != '') {
        this.groupedBy = true;
        var groupedOptions = this.options.reduce((result, currentValue) => {
          var key  = currentValue[this.groupKey] || "";
          (result[key] = result[key] || []).push(currentValue);
          return result;
        }, {});
        this.options = [];
        for(var gKey in groupedOptions) {
          var options = groupedOptions[gKey];
          var serachPlaceHolder = 'Search';
          if(options != null && options.length > 0) {
            var option = options[0];
            var placeHolder = option[this.searchPlaceHolder];
            if(placeHolder && placeHolder != "") {
              serachPlaceHolder = placeHolder;
            }
          } 
          this.options.push({
            'groupKey': gKey,
            'options': groupedOptions[gKey],
            'opened': false,
            'keyExist': gKey && gKey != "",
            'selectAll': false,
            'serachPlaceHolder': serachPlaceHolder
          });
        }
      } else if(this.multi) {
        var serachPlaceHolder = 'Search ' + this.label + 's';
        if(this.options != null && this.options.length > 0) {
          var option = this.options[0];
          var placeHolder = option[this.searchPlaceHolder];
          if(placeHolder && placeHolder != "") {
            serachPlaceHolder = placeHolder;
          }
        } 
        this.groupedBy = true;
        this.options = [{
          'groupKey': 'All ' + this.label,
          'options': this.options,
          'opened': false,
          'keyExist': true,
          'selectAll': false,
          'serachPlaceHolder': serachPlaceHolder
        }];
      }
    }
    this.singleGroupInMultiSelect = this.options != null && this.options.length == 1;
  }
}
