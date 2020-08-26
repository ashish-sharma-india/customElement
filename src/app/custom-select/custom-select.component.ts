import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomSelectComponent implements OnInit {
  @Input("name") name: String = 'key';
  @Input("key") key: String = 'key';
  @Input("value") value = 'value';
  @Input("options") options: Array<Object> = [];
  @Input("placeHolder") placeHolder: String = 'Select';
  @Output() change = new EventEmitter<any>();

  public opened: boolean = false;
  selectedOption: any = null;
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  constructor(private eRef: ElementRef) { }

  searchSelectOptions(event): void {
    if(this.options && this.options.length > 0) {
      var searchText = event.target.value;
      searchText = searchText.toLowerCase();
      for(var index in this.options) {
        var option = this.options[index];
        var displayText  = option[this.value];
        console.log(displayText)
        option['hide'] = searchText == "" || displayText == "" ? false : displayText.toLowerCase().indexOf(searchText) != 0;
      }
    }
  }

  openClose(open, previousState): void {
    this.opened = open;
    if(!this.opened && previousState) {
      this.change.emit(this.selectedOption);
    }
  }

  selectOption(option): void {
    this.selectedOption = option;
    this.openClose(false, true);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    var classList = event.target.classList;
    var open = this.eRef.nativeElement.contains(event.target);
    if(open && (classList.contains('custom-select-placeholder') || classList.contains('select-lable-text') 
        || classList.contains('select-input') || classList.contains('select-label-icon'))) {
      open  = !this.opened;
    }
    this.openClose(open, this.opened);
  }

  ngOnInit() {
  }

}
