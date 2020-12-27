(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tuna\Documents\csvdemo\src\main\web\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HpXp":
/*!******************************************!*\
  !*** ./src/app/tester/tester.service.ts ***!
  \******************************************/
/*! exports provided: TesterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterService", function() { return TesterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");






class TesterService {
    constructor(http) {
        this.http = http;
    }
    getTesterCountries() {
        return this.http.get(`http://localhost:8080/api/tester/countries`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Error loading countries!');
        }));
    }
    getTesterDevices() {
        return this.http.get(`http://localhost:8080/api/tester/devices`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Error loading devices!');
        }));
    }
    getTesteBugCount(countries, deviceIds) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('countries', countries.join(', '))
            .set('deviceIds', deviceIds.join(', '));
        return this.http.get(`http://localhost:8080/api/tester/tester-bug-count`, { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Error loading tester bug counts!');
        }));
    }
}
TesterService.ɵfac = function TesterService_Factory(t) { return new (t || TesterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TesterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TesterService, factory: TesterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TesterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tester_tester_bug_count_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tester/tester-bug-count.component */ "xHXI");



class AppComponent {
    constructor() {
        this.title = 'Csv Coding Exercise';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 0, consts: [[1, "wrapper"], ["href", "http://opencsv.sourceforge.net/"], ["href", "https://github.com/nileshpatel17/ng-multiselect-dropdown"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CSV Coding Exercise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "By Ryan Colantuono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Generted using Spring Boot with Java 11. Parses CSV files with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Opencvs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". Front end built with angular 11, with the multiselect dropdown handled by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " ng-multiselect-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ". Pulling in Angular for the simple front end might have been over kill, but I figured I would go with something closer to Applause's tech stack for this, and it let me pull in the multiselect directive to use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tester-bug-count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tester_tester_bug_count_component__WEBPACK_IMPORTED_MODULE_1__["TesterBugCountComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <div class="wrapper">
      <h1>CSV Coding Exercise</h1>
      <h2>By Ryan Colantuono</h2>
      <p>Generted using Spring Boot with Java 11. Parses CSV files with <a href="http://opencsv.sourceforge.net/">Opencvs</a>. 
      Front end built with angular 11, with the multiselect dropdown handled by <a href="https://github.com/nileshpatel17/ng-multiselect-dropdown">
      ng-multiselect-dropdown</a>. Pulling in Angular for the simple front end might have been over kill, 
      but I figured I would go with something closer to Applause's tech stack for this, and it let me pull in the multiselect directive to use. </p>
      <tester-bug-count></tester-bug-count>
    </div>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tester_tester_bug_count_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tester/tester-bug-count.component */ "xHXI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__["NgMultiSelectDropDownModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _tester_tester_bug_count_component__WEBPACK_IMPORTED_MODULE_4__["TesterBugCountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__["NgMultiSelectDropDownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _tester_tester_bug_count_component__WEBPACK_IMPORTED_MODULE_4__["TesterBugCountComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__["NgMultiSelectDropDownModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xHXI":
/*!******************************************************!*\
  !*** ./src/app/tester/tester-bug-count.component.ts ***!
  \******************************************************/
/*! exports provided: TesterBugCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterBugCountComponent", function() { return TesterBugCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tester_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tester.service */ "HpXp");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TesterBugCountComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No testers found for the criteria you selected.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TesterBugCountComponent_ng_template_6_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bugCount_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", bugCount_r4.fullName, " has ", bugCount_r4.count, " bugs. ");
} }
function TesterBugCountComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tester experience for search criteria:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TesterBugCountComponent_ng_template_6_li_3_Template, 2, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.testerBugCounts)("ngForTrackBy", ctx_r2.trackByFn);
} }
class TesterBugCountComponent {
    constructor(testerService) {
        this.testerService = testerService;
        this.countries = [];
        this.devices = [];
        this.testerBugCounts = [];
        this.selectedCountries = [];
        this.selectedDevices = [];
        this.countryDropdownSettings = {};
        this.deviceDropdownSettings = {};
    }
    ngOnInit() {
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
        this.getTesterBugCount();
    }
    getTesterCountries() {
        this.testerService.getTesterCountries().subscribe((countries) => {
            this.countries = countries;
        });
    }
    getTesterDevices() {
        this.testerService.getTesterDevices().subscribe((devices) => {
            this.devices = devices;
        });
    }
    getTesterBugCount() {
        const deviceIds = this.selectedDevices.map(d => d.deviceId);
        this.testerService.getTesteBugCount(this.selectedCountries, deviceIds).subscribe((bugCounts) => {
            this.testerBugCounts = bugCounts;
        });
    }
    trackByFn(index, bugCount) {
        return bugCount.testerId;
    }
    /*
     * The built in event for this doesn't seem to actually update our selected variable with all the values,
     * which is annoying
     */
    onSelectAllCountries(items) {
        this.selectedCountries = items;
        this.getTesterBugCount();
    }
    onSelectAllDevices(items) {
        this.selectedDevices = items;
        this.getTesterBugCount();
    }
}
TesterBugCountComponent.ɵfac = function TesterBugCountComponent_Factory(t) { return new (t || TesterBugCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tester_service__WEBPACK_IMPORTED_MODULE_1__["TesterService"])); };
TesterBugCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TesterBugCountComponent, selectors: [["tester-bug-count"]], decls: 8, vars: 10, consts: [[1, "multi-select"], [3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onSelectAll", "onDeSelect", "onDeSelectAll"], [1, "tester-bug-count-results"], [4, "ngIf", "ngIfElse"], ["showResults", ""], [1, "tester-bug-count-list"], [4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function TesterBugCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TesterBugCountComponent_Template_ng_multiselect_dropdown_ngModelChange_1_listener($event) { return ctx.selectedCountries = $event; })("onSelect", function TesterBugCountComponent_Template_ng_multiselect_dropdown_onSelect_1_listener() { return ctx.getTesterBugCount(); })("onSelectAll", function TesterBugCountComponent_Template_ng_multiselect_dropdown_onSelectAll_1_listener($event) { return ctx.onSelectAllCountries($event); })("onDeSelect", function TesterBugCountComponent_Template_ng_multiselect_dropdown_onDeSelect_1_listener() { return ctx.getTesterBugCount(); })("onDeSelectAll", function TesterBugCountComponent_Template_ng_multiselect_dropdown_onDeSelectAll_1_listener() { return ctx.getTesterBugCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ng-multiselect-dropdown", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TesterBugCountComponent_Template_ng_multiselect_dropdown_ngModelChange_3_listener($event) { return ctx.selectedDevices = $event; })("onSelect", function TesterBugCountComponent_Template_ng_multiselect_dropdown_onSelect_3_listener() { return ctx.getTesterBugCount(); })("onSelectAll", function TesterBugCountComponent_Template_ng_multiselect_dropdown_onSelectAll_3_listener($event) { return ctx.onSelectAllDevices($event); })("onDeSelect", function TesterBugCountComponent_Template_ng_multiselect_dropdown_onDeSelect_3_listener() { return ctx.getTesterBugCount(); })("onDeSelectAll", function TesterBugCountComponent_Template_ng_multiselect_dropdown_onDeSelectAll_3_listener() { return ctx.getTesterBugCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TesterBugCountComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TesterBugCountComponent_ng_template_6_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Countries...")("settings", ctx.countryDropdownSettings)("data", ctx.countries)("ngModel", ctx.selectedCountries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select Devices...")("settings", ctx.deviceDropdownSettings)("data", ctx.devices)("ngModel", ctx.selectedDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testerBugCounts == null || ctx.testerBugCounts.length == 0)("ngIfElse", _r1);
    } }, directives: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_2__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".multi-select[_ngcontent-%COMP%] {\r\n    margin: 10px 0 10px 0;\r\n    width: 97%;\r\n}\r\n\r\n.tester-bug-count-results[_ngcontent-%COMP%] {\r\n    margin: 20px 0 0 0;\r\n}\r\n\r\n.tester-bug-count-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style:none;\r\n}\r\n\r\n.tester-bug-count-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-left: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Rlci1idWctY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJ0ZXN0ZXItYnVnLWNvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm11bHRpLXNlbGVjdCB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbiAgICB3aWR0aDogOTclO1xyXG59XHJcblxyXG4udGVzdGVyLWJ1Zy1jb3VudC1yZXN1bHRzIHtcclxuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxufVxyXG5cclxuLnRlc3Rlci1idWctY291bnQtcmVzdWx0cyB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbn1cclxuXHJcbi50ZXN0ZXItYnVnLWNvdW50LXJlc3VsdHMgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TesterBugCountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
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
                styleUrls: ['./tester-bug-count.component.css']
            }]
    }], function () { return [{ type: _tester_service__WEBPACK_IMPORTED_MODULE_1__["TesterService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map