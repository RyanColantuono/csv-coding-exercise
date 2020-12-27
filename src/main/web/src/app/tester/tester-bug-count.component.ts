import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { TesterService} from './tester.service';
import { IDevice } from './device.interface';
import { ITesterBugCount } from './tester-bug-count.interface';

@Component({
  selector: 'tester-bug-count',
  template: `
  <div class="multi-select">
    <ng-multiselect-dropdown
      [placeholder]="'Select Countries...'"
      [settings]="countryDropdownSettings"
      [data]="countries"
      [(ngModel)]="selectedCountries"
      (onSelect)="getTesterBugCount()"
      (onSelectAll)="onSelectAllCountries($event)"
      (onDeSelect)="getTesterBugCount()"
      (onDeSelectAll)="getTesterBugCount()"
    >
    </ng-multiselect-dropdown>
  </div>
  
  <div class="multi-select">
    <ng-multiselect-dropdown
      [placeholder]="'Select Devices...'"
      [settings]="deviceDropdownSettings"
      [data]="devices"
      [(ngModel)]="selectedDevices"
      (onSelect)="getTesterBugCount()"
      (onSelectAll)="onSelectAllDevices($event)"
      (onDeSelect)="getTesterBugCount()"
      (onDeSelectAll)="getTesterBugCount()"
    >
    </ng-multiselect-dropdown> 
  </div>
  <div class="tester-bug-count-results">
    <p *ngIf="(testerBugCounts == null || testerBugCounts.length == 0); else showResults">No testers found for the criteria you selected.</p>
    <ng-template #showResults>
      <b>Tester experience for search criteria:</b>
      <ul class="tester-bug-count-list">
        <li *ngFor=" let bugCount of testerBugCounts; trackBy: trackByFn;">
          {{bugCount.fullName}} has {{bugCount.count}} bugs.
        </li>
      </ul>
    </ng-template>
  </div>
 
  `,
  styleUrls: ['./tester-bug-count.component.css'  ]
  
})

export class TesterBugCountComponent implements OnInit {

  countries: string[] = [];
  devices: IDevice[] = [];
  testerBugCounts: ITesterBugCount[] = [];
  selectedCountries: string[] = [];
  selectedDevices: IDevice[] = [];
  countryDropdownSettings: IDropdownSettings = {};
  deviceDropdownSettings: IDropdownSettings = {};

  constructor(private testerService: TesterService) { }

  ngOnInit(): void {

    this.countryDropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All'
    };

    this.deviceDropdownSettings = {
      singleSelection: false,
      idField: 'deviceId',
      textField: 'description',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All'
    };

    this.getTesterCountries();
    this.getTesterDevices();
    this.getTesterBugCount()
  }

  getTesterCountries():void {
    this.testerService.getTesterCountries().subscribe((countries:string[]) => {
      this.countries = countries;
    });
  }

  getTesterDevices(): void {
    this.testerService.getTesterDevices().subscribe((devices:IDevice[]) => {
      this.devices = devices;
    });
  }

  getTesterBugCount(): void {
    const deviceIds = this.selectedDevices.map(d => d.deviceId);
    this.testerService.getTesteBugCount(this.selectedCountries, deviceIds).subscribe((bugCounts:ITesterBugCount[]) => {
      this.testerBugCounts = bugCounts;
    });
  }

  trackByFn(index: number, bugCount: ITesterBugCount) {
    return bugCount.testerId;
  }

  /*
   * The built in event for this doesn't seem to actually update our selected variable with all the values,
   * which is annoying
   */
  onSelectAllCountries(items: any) {
    this.selectedCountries = items;
    this.getTesterBugCount();
  }

  onSelectAllDevices(items: any) {
    this.selectedDevices = items;
    this.getTesterBugCount();
  }
}
