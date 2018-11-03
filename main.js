(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-hearder></app-hearder>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hearder_hearder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hearder/hearder.component */ "./src/app/hearder/hearder.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _navtest_navtest_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navtest/navtest.component */ "./src/app/navtest/navtest.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _navigationData_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigationData.service */ "./src/app/navigationData.service.ts");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./person.service */ "./src/app/person.service.ts");
/* harmony import */ var _csv_read_csv_read_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./csv-read/csv-read.component */ "./src/app/csv-read/csv-read.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //ReactiveFormsModule for reactive form validations
 // for http














var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'room', component: _room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"] },
    { path: 'contact/:email', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'nav', component: _navtest_navtest_component__WEBPACK_IMPORTED_MODULE_11__["NavtestComponent"] },
    { path: 'department/:id', component: _department_department_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentComponent"] },
    { path: 'serviceTest', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeListComponent"] },
    { path: 'csv', component: _csv_read_csv_read_component__WEBPACK_IMPORTED_MODULE_17__["CsvReadComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] } // for page not found keep this as the last route
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _hearder_hearder_component__WEBPACK_IMPORTED_MODULE_5__["HearderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _navtest_navtest_component__WEBPACK_IMPORTED_MODULE_11__["NavtestComponent"],
                _department_department_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentComponent"],
                _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeListComponent"],
                _csv_read_csv_read_component__WEBPACK_IMPORTED_MODULE_17__["CsvReadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"] //for http
            ],
            providers: [_employee_service__WEBPACK_IMPORTED_MODULE_14__["EmployeeService"], _navigationData_service__WEBPACK_IMPORTED_MODULE_15__["NavigationDataService"], _person_service__WEBPACK_IMPORTED_MODULE_16__["PersonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n\n</p>\n<div class=\"container-fluid\">\n<h1>Da Dili mandha poda patti..</h1>\nemail id selected is <i><b>{{emailId}}</b></i>\n<p>\n</p>\n<button class=\"button\"  (click)=\"sendMeHome()\"> Send Me Home</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(route, router) {
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (res) { return console.log(res.email); });
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   let email = this.route.snapshot.params['email'];
        //   this.emailId = email;
        this.route.paramMap.subscribe(function (params) {
            var email = params.get('email');
            _this.emailId = email;
        });
    };
    ContactComponent.prototype.sendMeHome = function () {
        this.router.navigate(['']);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/csv-read/csv-read.component.css":
/*!*************************************************!*\
  !*** ./src/app/csv-read/csv-read.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/csv-read/csv-read.component.html":
/*!**************************************************!*\
  !*** ./src/app/csv-read/csv-read.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<div>\n<h4>Select the file:</h4>\n<input type=\"file\" class=\"upload\" (change)=\"changeListener($event.target.files)\" accept=\".csv\" >\n<br>\n<h5 style=\"color: red\">{{errMsg}}</h5>\n</div>\n<div class=\"container\">\n      <table class=\"table table-bordered\">\n      <tr *ngFor=\"let x of csvData; let i = index\">\n          <span *ngIf = \"i==0; then condition1 else condition2\"></span>         \n          <ng-template #condition1>  <th *ngFor=\"let y of x; let j = index\">\n          <span *ngIf = \"j==2; then condition11 else condition22\"></span>         \n          <ng-template #condition11> {{ y }}  </ng-template>\n          <ng-template #condition22> {{ y }}</ng-template>\n          </th>\n           </ng-template>\n          <ng-template #condition2> <td *ngFor=\"let y of x\">{{ y }}</td> </ng-template>\n      </tr>\n    </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/csv-read/csv-read.component.ts":
/*!************************************************!*\
  !*** ./src/app/csv-read/csv-read.component.ts ***!
  \************************************************/
/*! exports provided: CsvReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvReadComponent", function() { return CsvReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CsvReadComponent = /** @class */ (function () {
    function CsvReadComponent(http) {
        this.http = http;
        this.csvData = [];
    }
    CsvReadComponent.prototype.ngOnInit = function () {
    };
    CsvReadComponent.prototype.changeListener = function (files) {
        var _this = this;
        //   console.log(files);
        if (files && files.length > 0) {
            var file = files.item(0);
            if (file.name.endsWith(".csv")) {
                //        console.log(file.name);
                //        console.log(file.size);
                //        console.log(file.type);
                var reader_1 = new FileReader();
                reader_1.readAsText(file);
                reader_1.onload = function (e) {
                    var csv = reader_1.result;
                    console.log(csv);
                    var allTextLines = csv.split(/\r\n|\n/);
                    var headers = allTextLines[0].split(',');
                    var lines = [];
                    for (var i = 0; i < allTextLines.length; i++) {
                        var data = allTextLines[i].split(',');
                        if (data.length == headers.length) {
                            var tarr = [];
                            for (var j = 0; j < headers.length; j++) {
                                tarr.push(data[j]);
                            }
                            lines.push(tarr);
                        }
                    }
                    _this.csvData = lines;
                };
            }
            else {
                alert('Please select a .CSV file');
                this.csvData = [];
                this.errMsg = "Please choose a .CSV file";
            }
        }
    };
    CsvReadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-csv-read',
            template: __webpack_require__(/*! ./csv-read.component.html */ "./src/app/csv-read/csv-read.component.html"),
            styles: [__webpack_require__(/*! ./csv-read.component.css */ "./src/app/csv-read/csv-read.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CsvReadComponent);
    return CsvReadComponent;
}());



/***/ }),

/***/ "./src/app/department/department.component.css":
/*!*****************************************************!*\
  !*** ./src/app/department/department.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/department/department.component.html":
/*!******************************************************!*\
  !*** ./src/app/department/department.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  The selected department ID is <b>{{dptId}}</b><p></p>\n  <button (click)=\"selectNext()\">Next</button>\n  <button (click)=\"selectPrevious()\">Previous</button>\n  <p>\n    <button (click)=\"goBack()\">Back</button> <!--sending option parameter in routing-->\n  </p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/department/department.component.ts":
/*!****************************************************!*\
  !*** ./src/app/department/department.component.ts ***!
  \****************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var departmentId = parseInt(params.get('id'));
            _this.dptId = departmentId;
        });
    };
    DepartmentComponent.prototype.selectNext = function () {
        var nextDptId = this.dptId + 1;
        this.router.navigate(['/department', nextDptId]);
    };
    DepartmentComponent.prototype.selectPrevious = function () {
        var previousDptId = this.dptId - 1;
        this.router.navigate(['/department', previousDptId]);
    };
    DepartmentComponent.prototype.goBack = function () {
        var selectedID = this.dptId ? this.dptId : null;
        this.router.navigate(['/nav', { id: selectedID }]); //passing optional parameter in routing. There is no need to specify :id in appModule.ts
    };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.css */ "./src/app/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\r\n    border: 1px solid black;\r\n }\r\n\r\n /* th, td {\r\n    padding: 15px;\r\n    text-align: left;\r\n} */"

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"color: red\">{{errorMsg}}</h2>\n<p></p>\n<ul *ngFor=\" let employee of employees\">\n  <li>{{employee.id}}. <button (click)=\"goTo(employee)\">{{employee.name}}</button></li>\n</ul>\n<br>\n<u>From Spring Boot app</u>\n<ul *ngFor=\"let person of persons\">\n  <li>{{person.firstName}}</li>\n</ul>\n{{persons | json}}\n<br>\n<table>\n  <tr>\n    <th>ID</th>\n    <th>NAME</th>\n  </tr>\n  <tr *ngFor=\"let tr of treeList\">\n    <td>{{tr.id}}</td> \n    <td>\n     <tr>\n        \n        <td>\n            <tr>\n              <td>\n                  <div *ngIf = \"showHide; then condition3 else condition4\"></div>\n                <ng-template #condition3>\n                <div class=\"btn\" (click)=\"onClickExpand($event)\">-</div>\n              </ng-template>\n            <ng-template #condition4>\n                <div class=\"btn\" (click)=\"onClickExpand($event)\">+</div>\n            </ng-template>\n              </td>\n              <td>{{tr.name}}</td>\n            </tr>\n            <tr>\n              <td></td>\n              <td>\n                  <div *ngIf = \"showHide; then condition1 else condition2\"></div>\n                 \n              <ng-template #condition1>\n              <table>              \n              <tr *ngFor=\"let addr of tr.addressList\">\n              <td>{{addr.plotNumber}}</td>\n              <td>{{addr.street}}</td>\n              </tr>\n              </table>\n            </ng-template>\n              <ng-template #condition2>\n                  \n              </ng-template>\n              </td>\n        </tr>\n        </td>\n    </tr>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _navigationData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigationData.service */ "./src/app/navigationData.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService, _navigationDataService, router, route, _personService) {
        this._employeeService = _employeeService;
        this._navigationDataService = _navigationDataService;
        this.router = router;
        this.route = route;
        this._personService = _personService;
        this.persons = [];
        this.showHide = false;
        this.employees = [];
        this.treeList = [
            { "id": 1, "name": "Deepak", "addressList": [{ "plotNumber": 20, "street": "Sannathi Street" }] },
            { "id": 2, "name": "Dilip", "addressList": [{ "plotNumber": 20, "street": "Sannathi Street" }] },
            { "id": 3, "name": "Raji", "addressList": [{ "plotNumber": 20, "street": "Sannathi Street" }] }
        ];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (data) { return _this.employees = data; }, function (error) { return _this.errorMsg = error; });
        this._personService.getAllPersons()
            .subscribe(function (data) { return _this.persons = data; }, function (error) { return _this.errorMsg = error; });
    };
    EmployeeListComponent.prototype.goTo = function (employee) {
        this._navigationDataService.setNavData(employee);
        this.router.navigate(['/room']);
    };
    EmployeeListComponent.prototype.onClickExpand = function (event) {
        if (this.showHide === true) {
            this.showHide = false;
            //  alert("false");
        }
        else {
            this.showHide = true;
            // alert("true");
        }
    };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _navigationData_service__WEBPACK_IMPORTED_MODULE_2__["NavigationDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _person_service__WEBPACK_IMPORTED_MODULE_4__["PersonService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this._url = "/assets/data/employeeData.json"; // to get 404 error change to "/assets/data/employeeData1.json";
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this._url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler)); // this.errorHandler is a method
    };
    EmployeeService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || "Server Error");
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/hearder/hearder.component.css":
/*!***********************************************!*\
  !*** ./src/app/hearder/hearder.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hearder/hearder.component.html":
/*!************************************************!*\
  !*** ./src/app/hearder/hearder.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\"><h2>Hotel Booking Portal</h2></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" \n      [routerLinkActiveOptions]=\"{exact: true}\">  <!--to make home inactive when other tab is selected-->\n        <a class=\"nav-link\" routerLink=\"/\">\n          <h5>Home</h5> <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\n        <a class=\"nav-link\" routerLink=\"/room\">\n          <h5>Room Selection</h5></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\n        <a class=\"nav-link\" routerLink=\"/contact/deepak\">\n          <h5>Contact</h5></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\n        <a class=\"nav-link\" routerLink=\"/nav\">\n          <h5>Nav Test</h5></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\n        <a class=\"nav-link\" routerLink=\"/serviceTest\">\n          <h5>Service Test</h5></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\n        <a class=\"nav-link\" routerLink=\"/csv\">\n          <h5>Read-CSV</h5></a>\n      </li>\n    </ul>\n    <span class=\"navbar-text\">\n      @Deepak Ramanan\n    </span>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/hearder/hearder.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hearder/hearder.component.ts ***!
  \**********************************************/
/*! exports provided: HearderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HearderComponent", function() { return HearderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HearderComponent = /** @class */ (function () {
    function HearderComponent() {
    }
    HearderComponent.prototype.ngOnInit = function () {
    };
    HearderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hearder',
            template: __webpack_require__(/*! ./hearder.component.html */ "./src/app/hearder/hearder.component.html"),
            styles: [__webpack_require__(/*! ./hearder.component.css */ "./src/app/hearder/hearder.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HearderComponent);
    return HearderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<div class=\"container-fluid\">\n\n\n    <div class=\"container-fluid\" style=\"text-align: center\">\n        <span *ngIf = \"!isavailable; then condition1 else condition2\">\n          \n         </span>\n        <h3>\n            <ng-template #condition1><h3>Hello Guest !!</h3> </ng-template>\n            <ng-template #condition2><h3 style=\" font-family: cursive; font-weight: bolder\"> Hi {{firstName}} {{lastName}} </h3></ng-template>\n    \n        <u style=\"font-family: cursive;\"> Welcome to our Hotel Booking Portal </u>\n      \n    </h3>\n    <div class=\"btn\" (click)=\"onClickaddPerson($event)\"><h4>+</h4></div>\n    <button type=\"button\" class=\"btn btn-primary\">\n        No. of Person <span class=\"badge badge-light\">{{noOfPerson}}</span>     \n      </button>\n      <div class=\"btn\" (click)=\"onClickMinusPerson($event)\"><h4>-</h4></div>\n    </div><p></p>\n\n\n  <div class=\"row  mb-3\">\n    <div class=\"col\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"First name\" [(ngModel)]=\"firstName\" ng-style=\"username\"\n      required minlength=\"1\" #name=\"ngModel\"><!-- [(ngModel)]=\"firstName\"> -->\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n     class=\"alert alert-danger\">\n\n  <div  *ngIf=\"name.errors.required\" >\n    Name is required.\n  </div>\n  <div  *ngIf=\"name.errors.minlength\">\n    Name must be at least 4 characters long.\n  </div>\n    </div>\n    </div>\n    <div class=\"col\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]=\"lastName\" (change)=\"myChangeFunction($event)\">\n    </div>\n  </div>\n\n<div class=\"input-group mb-3\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Emai Id\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n  <div class=\"input-group-append\">\n    <span class=\"input-group-text\" id=\"basic-addon2\">@example.com</span>\n  </div>\n</div>\n\n<div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text\" id=\"\">Phone No.</span>\n  </div>\n  <input type=\"text\" class=\"form-control\">\n</div>\n\n<div class=\"form-group\">\n  <label for=\"inputAddress2\">Address </label>\n  <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Block, Floor, Apartment, Street..\">\n</div>\n<div class=\"form-row\">\n  <div class=\"form-group col-md-6\">\n    <label for=\"inputCity\">City</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n  </div>\n  <div class=\"form-group col-md-4\">\n    <label for=\"inputState\">State</label>\n    <select id=\"inputState\" class=\"custom-select\">\n      <option selected>Choose...</option>\n      <option *ngFor=\"let st of states\" [value]=\"st\">{{st}}</option>\n     \n    </select>\n  </div>\n  <div class=\"form-group col-md-2\">\n    <label for=\"inputZip\">Zip</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n  </div>\n</div>\n\n\n<button type=\"submit\" class=\"btn btn-primary\">Register</button>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.noOfPerson = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.states = [
            'Andhra Pradesh',
            'Arunachal Pradesh',
            'Assam',
            'Bihar',
            'Chhattisgarh',
            'Chandigarh',
            'Dadra and Nagar Haveli',
            'Daman and Diu',
            'Delhi',
            'Goa',
            'Gujarat',
            'Haryana',
            'Himachal Pradesh',
            'Jammu and Kashmir',
            'Jharkhand',
            'Karnataka',
            'Kerala',
            'Madhya Pradesh',
            'Maharashtra',
            'Manipur',
            'Meghalaya',
            'Mizoram',
            'Nagaland',
            'Orissa',
            'Punjab',
            'Pondicherry',
            'Rajasthan',
            'Sikkim',
            'Tamil Nadu',
            'Tripura',
            'Uttar Pradesh',
            'Uttarakhand',
            'West Bengal'
        ];
    };
    HomeComponent.prototype.myChangeFunction = function (event) {
        //  alert("input is changed");
        console.log(event);
        this.isavailable = true;
    };
    HomeComponent.prototype.onClickaddPerson = function (event) {
        //  alert("input is changed");
        console.log(event);
        this.noOfPerson = this.noOfPerson + 1;
    };
    HomeComponent.prototype.onClickMinusPerson = function (event) {
        //  alert("input is changed");
        console.log(event);
        if (this.noOfPerson > 0) {
            this.noOfPerson = this.noOfPerson - 1;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navigationData.service.ts":
/*!*******************************************!*\
  !*** ./src/app/navigationData.service.ts ***!
  \*******************************************/
/*! exports provided: NavigationDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationDataService", function() { return NavigationDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationDataService = /** @class */ (function () {
    function NavigationDataService() {
    }
    NavigationDataService.prototype.setNavData = function (navigationData) {
        this.navData = navigationData;
    };
    NavigationDataService.prototype.getNavData = function () {
        return this.navData;
    };
    NavigationDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavigationDataService);
    return NavigationDataService;
}());



/***/ }),

/***/ "./src/app/navtest/navtest.component.css":
/*!***********************************************!*\
  !*** ./src/app/navtest/navtest.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected{\r\n    font-weight: bolder;\r\n    background-color: blue;font-style: italic;\r\n    color: aliceblue;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/navtest/navtest.component.html":
/*!************************************************!*\
  !*** ./src/app/navtest/navtest.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <ul>\n    <li *ngFor=\"let dpt of departments\" (click)=\"onSelect(dpt)\" >\n      {{dpt.id}} <button [class.selected]=\"isSelected(dpt)\">{{dpt.name}}</button> <!--if back button clicked then the clicked link will be highlighted-->\n    </li>\n  </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/navtest/navtest.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navtest/navtest.component.ts ***!
  \**********************************************/
/*! exports provided: NavtestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavtestComponent", function() { return NavtestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavtestComponent = /** @class */ (function () {
    function NavtestComponent(router, route) {
        this.router = router;
        this.route = route;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "Node" },
            { "id": 3, "name": "React" },
            { "id": 4, "name": "D3Js" },
            { "id": 5, "name": "Boot" }
        ];
    }
    NavtestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //on clicking back button in department.html we get value of params like this
        this.route.paramMap.subscribe(function (params) {
            var selectedId = parseInt(params.get('id'));
            _this.selectedDptId = selectedId;
        });
    };
    NavtestComponent.prototype.onSelect = function (dpt) {
        // alert("id: "+dpt.id);
        this.router.navigate(['/department', dpt.id]);
    };
    NavtestComponent.prototype.isSelected = function (dpt) {
        return dpt.id === this.selectedDptId;
    };
    NavtestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navtest',
            template: __webpack_require__(/*! ./navtest.component.html */ "./src/app/navtest/navtest.component.html"),
            styles: [__webpack_require__(/*! ./navtest.component.css */ "./src/app/navtest/navtest.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavtestComponent);
    return NavtestComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"align-content: center\">\n\n  <h1 style=\"font-family: cursive; color: rgb(205, 0, 0)\" >404 - Page Not Found Buddy !!</h1>\n\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/person.service.ts":
/*!***********************************!*\
  !*** ./src/app/person.service.ts ***!
  \***********************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this._url = "//localhost:8888/persons/allPersons"; // to get 404 error change to "/assets/data/employeeData1.json";
    }
    PersonService.prototype.getAllPersons = function () {
        return this.http.get(this._url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler)); // this.errorHandler is a method
    };
    PersonService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || "Server Error");
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/room/room.component.css":
/*!*****************************************!*\
  !*** ./src/app/room/room.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/room/room.component.html":
/*!******************************************!*\
  !*** ./src/app/room/room.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 25%\">\n    <br />\n    <form (ngSubmit)='loginUser()' [formGroup]='loginForm' novalidate class=\"form\">\n        <input formControlName='email' type=\"text\" class=\"form-control\" placeholder=\"Enter Email\" />\n        <div class=\"alert  alert-danger\" *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').touched\">\n            Email is required\n        </div>\n        <div class=\"alert  alert-danger\" *ngIf=\"loginForm.get('email').hasError('pattern')\"> <!--custom validation-->\n            Valid Email is required\n        </div>\n        \n        <input formControlName='password' type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" />\n        <div class=\"alert  alert-danger\" *ngIf=\" !loginForm.get('password').valid && loginForm.get('email').touched\">\n            Password is required and should less than 6 characters\n        </div>\n\n        <input formControlName='age' type=\"number\" class=\"form-control\" placeholder=\"Enter Age\" />\n        <div class=\"alert  alert-danger\" *ngIf=\"loginForm.get('age').dirty && loginForm.get('age').errors && loginForm.get('age').errors.ageRange \">\n        Age should be in between 18 to 45 years\n        </div>\n        <button [disabled]='loginForm.invalid' class=\"btn btn-default\">Login</button>\n    </form>\n</div>\n<p></p>\n<b><u>Navigated from Service Test and passing data via Service</u></b> <i> navigatinDataService</i> <br>\n\nThe id is <b>{{employee.id}}</b> and the name is <b>{{employee.name}}</b>."

/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigationData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigationData.service */ "./src/app/navigationData.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomComponent = /** @class */ (function () {
    function RoomComponent(router, route, _navigationDataService) {
        this.router = router;
        this.route = route;
        this._navigationDataService = _navigationDataService;
        this.emailPattern = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"; //email regex
    } //injecting for routing
    RoomComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [ageRangeValidator]) // custom validator
        });
        function ageRangeValidator(control) {
            if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
                return { 'ageRange': true };
            }
            return null;
        }
        this.employee = this._navigationDataService.getNavData(); //getting data from service in routing 
    };
    RoomComponent.prototype.loginUser = function () {
        console.log(this.loginForm.status);
        console.log(this.loginForm.value);
        console.log(this.loginForm.value.email);
        console.log(this.loginForm.value.age);
        this.router.navigate(['/contact', this.loginForm.value.email]); //for navigating to other page
        //  this.router.navigate([this.loginForm.value.email], {relativeTo: this.route});//-->relativeTo gives upto http://localhost:4200/room
    };
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/room/room.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _navigationData_service__WEBPACK_IMPORTED_MODULE_3__["NavigationDataService"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Deepak Wrk\Angular WorkSpace\PracticeProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map