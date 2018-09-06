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

module.exports = "<router-outlet></router-outlet>\r\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _header_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-interceptor */ "./src/app/header-interceptor.ts");
/* harmony import */ var _router_main_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router/main-router.module */ "./src/app/router/main-router.module.ts");
/* harmony import */ var _router_unauth_router_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router/unauth-router.module */ "./src/app/router/unauth-router.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main.component */ "./src/app/main.component.ts");
/* harmony import */ var _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screens/dashboard/dashboard.component */ "./src/app/screens/dashboard/dashboard.component.ts");
/* harmony import */ var _screens_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screens/login/login.component */ "./src/app/screens/login/login.component.ts");
/* harmony import */ var _screens_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./screens/client-detail/client-detail.component */ "./src/app/screens/client-detail/client-detail.component.ts");
/* harmony import */ var _screens_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./screens/welcome/welcome.component */ "./src/app/screens/welcome/welcome.component.ts");
/* harmony import */ var _screens_add_new_client_add_new_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./screens/add-new-client/add-new-client.component */ "./src/app/screens/add-new-client/add-new-client.component.ts");
/* harmony import */ var _screens_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./screens/edit-client/edit-client.component */ "./src/app/screens/edit-client/edit-client.component.ts");
/* harmony import */ var _screens_steps_step_1_step_1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./screens/steps/step-1/step-1.component */ "./src/app/screens/steps/step-1/step-1.component.ts");
/* harmony import */ var _screens_steps_step_2_step_2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./screens/steps/step-2/step-2.component */ "./src/app/screens/steps/step-2/step-2.component.ts");
/* harmony import */ var _screens_steps_step_3_step_3_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./screens/steps/step-3/step-3.component */ "./src/app/screens/steps/step-3/step-3.component.ts");
/* harmony import */ var _screens_steps_step_4_step_4_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./screens/steps/step-4/step-4.component */ "./src/app/screens/steps/step-4/step-4.component.ts");
/* harmony import */ var _screens_steps_step_5_step_5_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./screens/steps/step-5/step-5.component */ "./src/app/screens/steps/step-5/step-5.component.ts");
/* harmony import */ var _screens_steps_step_6_step_6_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./screens/steps/step-6/step-6.component */ "./src/app/screens/steps/step-6/step-6.component.ts");
/* harmony import */ var _screens_steps_step_7_step_7_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./screens/steps/step-7/step-7.component */ "./src/app/screens/steps/step-7/step-7.component.ts");
/* harmony import */ var _components_add_user_form_add_user_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/add-user-form/add-user-form.component */ "./src/app/components/add-user-form/add-user-form.component.ts");
/* harmony import */ var _components_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/range-slider/range-slider.component */ "./src/app/components/range-slider/range-slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _router_main_router_module__WEBPACK_IMPORTED_MODULE_8__["MainRouterModule"],
                _router_unauth_router_module__WEBPACK_IMPORTED_MODULE_9__["UnauthRouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _screens_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _screens_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_14__["ClientDetailComponent"],
                _screens_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_15__["WelcomeComponent"],
                _screens_add_new_client_add_new_client_component__WEBPACK_IMPORTED_MODULE_16__["AddNewClientComponent"],
                _screens_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_17__["EditClientComponent"],
                _screens_steps_step_1_step_1_component__WEBPACK_IMPORTED_MODULE_18__["Step1Component"],
                _screens_steps_step_2_step_2_component__WEBPACK_IMPORTED_MODULE_19__["Step2Component"],
                _screens_steps_step_3_step_3_component__WEBPACK_IMPORTED_MODULE_20__["Step3Component"],
                _screens_steps_step_4_step_4_component__WEBPACK_IMPORTED_MODULE_21__["Step4Component"],
                _screens_steps_step_5_step_5_component__WEBPACK_IMPORTED_MODULE_22__["Step5Component"],
                _screens_steps_step_6_step_6_component__WEBPACK_IMPORTED_MODULE_23__["Step6Component"],
                _screens_steps_step_7_step_7_component__WEBPACK_IMPORTED_MODULE_24__["Step7Component"],
                _components_add_user_form_add_user_form_component__WEBPACK_IMPORTED_MODULE_25__["AddUserFormComponent"],
                _components_range_slider_range_slider_component__WEBPACK_IMPORTED_MODULE_26__["RangeSliderComponent"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _header_interceptor__WEBPACK_IMPORTED_MODULE_7__["HeaderInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-user-form/add-user-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-user-form/add-user-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addUserForm\" class=\"user-form form\">\n  <div class=\"form-group\">\n    <label class=\"txt-gray\">First Name</label>\n\n    <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\n    <span class=\"icon-user\"></span>\n\n    <div *ngIf=\"submitted && f.firstName.errors\" class=\"form-text text-muted\">\n      <div *ngIf=\"f.firstName.errors.required\">Invalid name</div>\n    </div>\n  </div>\n\n\n  <div class=\"form-group\">\n    <label class=\"txt-gray\">Last Name</label>\n\n    <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\n    <span class=\"icon-user\"></span>\n    <div *ngIf=\"submitted && f.lastName.errors\" class=\"form-text text-muted\">\n      <div *ngIf=\"f.lastName.errors.required\">Invalid last name</div>\n    </div>\n  </div>\n\n\n  <div class=\"form-group\">\n    <label class=\"txt-gray\">Email</label>\n\n    <input type=\"text\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n    <span class=\"icon-email\"></span>\n    <div *ngIf=\"submitted && f.email.errors\" class=\"form-text text-muted\">\n      <div *ngIf=\"f.email.errors.required\">Invalid email</div>\n    </div>\n  </div>\n\n\n  <div class=\"form-group country-code\">\n    <label class=\"txt-gray\">Phone</label>\n\n    <input type=\"phone\" class=\"form-control\" formControlName=\"phone\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\">\n    <span class=\"icon-phone\"></span>\n\n    <div class=\"country-code-picker\"></div>\n\n    <div *ngIf=\"submitted && f.phone.errors\" class=\"form-text text-muted\">\n      <div *ngIf=\"f.phone.errors.required\">Invalid Phone</div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-user-form/add-user-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-user-form/add-user-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-user-form/add-user-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-user-form/add-user-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserFormComponent", function() { return AddUserFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserFormComponent = /** @class */ (function () {
    function AddUserFormComponent(fb, rootService) {
        this.fb = fb;
        this.rootService = rootService;
        this.submitted = false;
        this.countryCode = 1;
        this.createForm();
    }
    Object.defineProperty(AddUserFormComponent.prototype, "f", {
        get: function () {
            return this.addUserForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddUserFormComponent.prototype.createForm = function () {
        this.addUserForm = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    };
    AddUserFormComponent.prototype.ngOnInit = function () { };
    AddUserFormComponent.prototype.ngAfterViewInit = function () {
        window["jQuery"](".country-code-picker")
            .CcPicker({
            dataUrl: "assets/library/country-code-picker/data.json",
            countryFilter: false
        })
            .on("countrySelect", function (e, i) {
            this.countryCode = i;
        }.bind(this));
    };
    AddUserFormComponent.prototype.getData = function () {
        var formValue = this.addUserForm.value;
        this.submitted = true;
        if (this.addUserForm.invalid) {
            return null;
        }
        return formValue;
    };
    AddUserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-user-form",
            template: __webpack_require__(/*! ./add-user-form.component.html */ "./src/app/components/add-user-form/add-user-form.component.html"),
            styles: [__webpack_require__(/*! ./add-user-form.component.scss */ "./src/app/components/add-user-form/add-user-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _services_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], AddUserFormComponent);
    return AddUserFormComponent;
}());



/***/ }),

/***/ "./src/app/components/range-slider/range-slider.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/range-slider/range-slider.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rating-type py-4\" (click)=\"estimateRange($event)\">\n  <div class=\"bar\" #range>\n    <div class=\"ative\" [ngStyle]=\"posX\" (mousedown)=\"initEvent($event)\"></div>\n  </div>\n  <ul class=\"space d-flex justify-content-between p-0 mb-0\">\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n    <li>&nbsp;</li>\n  </ul>\n  <ul class=\"number d-flex justify-content-between p-0\">\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n    <li>4</li>\n    <li>5</li>\n    <li>6</li>\n    <li>7</li>\n    <li>8</li>\n    <li>9</li>\n    <li>10</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/range-slider/range-slider.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/range-slider/range-slider.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/range-slider/range-slider.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/range-slider/range-slider.component.ts ***!
  \*******************************************************************/
/*! exports provided: RangeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSliderComponent", function() { return RangeSliderComponent; });
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

var RangeSliderComponent = /** @class */ (function () {
    function RangeSliderComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startX = 0;
        this.left = 0;
        this.posX = {
            left: "0px"
        };
        this.delta = 10;
        this.isTouch = false;
        this.rangeStep = 1;
        this.rangeWidth = 0;
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
    }
    RangeSliderComponent.prototype.ngOnInit = function () { };
    RangeSliderComponent.prototype.ngAfterViewInit = function () {
        var rangeCover = this.rangeCover.nativeElement;
        var rangeLimit = rangeCover.clientWidth - this.delta;
        this.rangeWidth = rangeLimit;
        this.rangeStep = rangeLimit / 9;
    };
    RangeSliderComponent.prototype.addEvent = function (element, evt) {
        for (var o in evt) {
            if (evt.hasOwnProperty(o)) {
                if (element.addEventListener) {
                    element.addEventListener(o, evt[o], false);
                }
                else if (element.attachEvent) {
                    element.attachEvent("on" + o, evt[o]);
                }
                else {
                    element["on" + o] = evt[o];
                }
            }
        }
    };
    RangeSliderComponent.prototype.removeEvent = function (element, evt) {
        for (var o in evt) {
            if (evt.hasOwnProperty(o)) {
                if (element.removeEventListener) {
                    element.removeEventListener(o, evt[o]);
                }
                else if (element.detachEvent) {
                    element.detachEvent("on" + o, evt[o]);
                }
                else {
                    element["on" + o] = null;
                }
            }
        }
    };
    RangeSliderComponent.prototype.initEvent = function (evt) {
        evt.stopPropagation();
        if (evt.touches && evt.touches.length) {
            this.isTouch = true;
            evt = evt.changedTouches[0];
        }
        var ele = evt.target;
        if (evt.button != 2 && evt.which != 3) {
            var left = parseInt(ele.style.left) || 0;
            this.startX = evt.clientX;
            this.left = left;
            this.posX = {
                left: left + "px"
            };
            this.addEvent(document, {
                mouseup: this.mouseUp,
                touchend: this.mouseUp
            });
            this.addEvent(document, {
                mousemove: this.mouseMove,
                touchmove: this.mouseMove
            });
        }
    };
    RangeSliderComponent.prototype.mouseUp = function (evt) {
        !!this.isTouch && (evt = evt.changedTouches[0]);
        var posX = this.left - (this.startX - evt.clientX);
        var step = Math.round(posX / this.rangeStep);
        posX = step * this.rangeStep;
        this.setPosition(posX);
        // pass value to parent;
        this.change.emit(step + 1);
        this.removeEvent(document, {
            mousemove: this.mouseMove,
            touchmove: this.mouseMove
        });
        this.removeEvent(document, {
            mouseup: this.mouseUp,
            touchend: this.mouseUp
        });
    };
    RangeSliderComponent.prototype.mouseMove = function (evt) {
        !!this.isTouch && (evt = evt.changedTouches[0]);
        var posX = this.left - (this.startX - evt.clientX);
        this.setPosition(posX);
    };
    RangeSliderComponent.prototype.setPosition = function (posX) {
        if (posX < 0) {
            posX = 0;
        }
        if (posX > this.rangeWidth) {
            posX = this.rangeWidth;
        }
        this.posX = {
            left: posX - this.delta + "px"
        };
    };
    RangeSliderComponent.prototype.estimateRange = function (evt) {
        console.log(evt);
        var offsetX = evt.offsetX;
        var step = Math.round(offsetX / this.rangeStep);
        var posX = step * this.rangeStep;
        this.setPosition(posX);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("range"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RangeSliderComponent.prototype, "rangeCover", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RangeSliderComponent.prototype, "change", void 0);
    RangeSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-range-slider",
            template: __webpack_require__(/*! ./range-slider.component.html */ "./src/app/components/range-slider/range-slider.component.html"),
            styles: [__webpack_require__(/*! ./range-slider.component.scss */ "./src/app/components/range-slider/range-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RangeSliderComponent);
    return RangeSliderComponent;
}());



/***/ }),

/***/ "./src/app/header-interceptor.ts":
/*!***************************************!*\
  !*** ./src/app/header-interceptor.ts ***!
  \***************************************/
/*! exports provided: HeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function() { return HeaderInterceptor; });
var HeaderInterceptor = /** @class */ (function () {
    function HeaderInterceptor() {
    }
    HeaderInterceptor.prototype.intercept = function (req, next) {
        // Get token from session;
        var authToken = sessionStorage.getItem("token");
        var headers = {
            "Content-Type": "application/json"
        };
        if (authToken) {
            // set default auth token for every request;
            headers["Authorization"] = authToken;
        }
        var authReq = req.clone({
            setHeaders: headers
        });
        return next.handle(authReq);
    };
    return HeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/main.component.css":
/*!************************************!*\
  !*** ./src/app/main.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  right: 0px;\r\n  bottom: 0px;\r\n  overflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/main.component.html":
/*!*************************************!*\
  !*** ./src/app/main.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/main.component.ts":
/*!***********************************!*\
  !*** ./src/app/main.component.ts ***!
  \***********************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(rootState) {
        this.rootState = rootState;
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-main",
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/router/main-router.module.ts":
/*!**********************************************!*\
  !*** ./src/app/router/main-router.module.ts ***!
  \**********************************************/
/*! exports provided: MainRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRouterModule", function() { return MainRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.component */ "./src/app/main.component.ts");
/* harmony import */ var _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../screens/dashboard/dashboard.component */ "./src/app/screens/dashboard/dashboard.component.ts");
/* harmony import */ var _screens_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../screens/client-detail/client-detail.component */ "./src/app/screens/client-detail/client-detail.component.ts");
/* harmony import */ var _screens_add_new_client_add_new_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../screens/add-new-client/add-new-client.component */ "./src/app/screens/add-new-client/add-new-client.component.ts");
/* harmony import */ var _screens_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../screens/edit-client/edit-client.component */ "./src/app/screens/edit-client/edit-client.component.ts");
/* harmony import */ var _screens_steps_step_1_step_1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../screens/steps/step-1/step-1.component */ "./src/app/screens/steps/step-1/step-1.component.ts");
/* harmony import */ var _screens_steps_step_2_step_2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../screens/steps/step-2/step-2.component */ "./src/app/screens/steps/step-2/step-2.component.ts");
/* harmony import */ var _screens_steps_step_3_step_3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../screens/steps/step-3/step-3.component */ "./src/app/screens/steps/step-3/step-3.component.ts");
/* harmony import */ var _screens_steps_step_4_step_4_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../screens/steps/step-4/step-4.component */ "./src/app/screens/steps/step-4/step-4.component.ts");
/* harmony import */ var _screens_steps_step_5_step_5_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../screens/steps/step-5/step-5.component */ "./src/app/screens/steps/step-5/step-5.component.ts");
/* harmony import */ var _screens_steps_step_6_step_6_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../screens/steps/step-6/step-6.component */ "./src/app/screens/steps/step-6/step-6.component.ts");
/* harmony import */ var _screens_steps_step_7_step_7_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../screens/steps/step-7/step-7.component */ "./src/app/screens/steps/step-7/step-7.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var mainRouter = [
    {
        path: "main",
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        component: _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", component: _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: "client-detail/:id", component: _screens_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_5__["ClientDetailComponent"] },
            { path: "add-new-client", component: _screens_add_new_client_add_new_client_component__WEBPACK_IMPORTED_MODULE_6__["AddNewClientComponent"] },
            { path: "edit-client/:id", component: _screens_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_7__["EditClientComponent"] },
            { path: "step-1", component: _screens_steps_step_1_step_1_component__WEBPACK_IMPORTED_MODULE_8__["Step1Component"] },
            { path: "step-2", component: _screens_steps_step_2_step_2_component__WEBPACK_IMPORTED_MODULE_9__["Step2Component"] },
            { path: "step-3", component: _screens_steps_step_3_step_3_component__WEBPACK_IMPORTED_MODULE_10__["Step3Component"] },
            { path: "step-4", component: _screens_steps_step_4_step_4_component__WEBPACK_IMPORTED_MODULE_11__["Step4Component"] },
            { path: "step-5", component: _screens_steps_step_5_step_5_component__WEBPACK_IMPORTED_MODULE_12__["Step5Component"] },
            { path: "step-6", component: _screens_steps_step_6_step_6_component__WEBPACK_IMPORTED_MODULE_13__["Step6Component"] },
            { path: "step-7", component: _screens_steps_step_7_step_7_component__WEBPACK_IMPORTED_MODULE_14__["Step7Component"] }
        ]
    }
];
var MainRouterModule = /** @class */ (function () {
    function MainRouterModule() {
    }
    MainRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(mainRouter, { useHash: true })],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            declarations: []
        })
    ], MainRouterModule);
    return MainRouterModule;
}());



/***/ }),

/***/ "./src/app/router/unauth-router.module.ts":
/*!************************************************!*\
  !*** ./src/app/router/unauth-router.module.ts ***!
  \************************************************/
/*! exports provided: UnauthRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthRouterModule", function() { return UnauthRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _screens_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/login/login.component */ "./src/app/screens/login/login.component.ts");
/* harmony import */ var _screens_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../screens/welcome/welcome.component */ "./src/app/screens/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var lobbyRouter = [
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "login", component: _screens_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "welcome", component: _screens_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] }
];
var UnauthRouterModule = /** @class */ (function () {
    function UnauthRouterModule() {
    }
    UnauthRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(lobbyRouter)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            declarations: []
        })
    ], UnauthRouterModule);
    return UnauthRouterModule;
}());



/***/ }),

/***/ "./src/app/screens/add-new-client/add-new-client.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/screens/add-new-client/add-new-client.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-new-page\">\n  <div class=\"topbar d-flex align-items-center pointer\">\n    <div class=\"\" ><a href=\"#/main/dashboard\"><span class=\"arrow\"> </span>Cancel</a></div>\n    <button (click)=\"getFormData(newUserForm)\" class=\"ml-auto btn-red btn-small btn-radius\">Save</button>\n  </div>\n  <div class=\"user-container container-fluid p-5\">\n    <div class=\"row\">\n      <div class=\"col col-6\">\n        <app-add-user-form #newUserForm></app-add-user-form>\n      </div>\n      <div class=\"col col-6\">\n        <div class=\"d-flex justify-content-center align-items-center my-5 pb-5 pt-1\">\n          <div class=\"avatar rounded-circle mr-5\">\n            <img src=\"../assets/images/avatar.png\" alt=\"Generic placeholder image\">\n          </div>\n          <div>\n            <div class=\"btn btn-blue btn-large btn-radius d-block mb-3\">Take a photo</div>\n            <div class=\"btn btn-white btn-large btn-radius d-block\">Delete</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/add-new-client/add-new-client.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/screens/add-new-client/add-new-client.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/screens/add-new-client/add-new-client.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/screens/add-new-client/add-new-client.component.ts ***!
  \********************************************************************/
/*! exports provided: AddNewClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewClientComponent", function() { return AddNewClientComponent; });
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

var AddNewClientComponent = /** @class */ (function () {
    function AddNewClientComponent() {
    }
    AddNewClientComponent.prototype.ngOnInit = function () { };
    AddNewClientComponent.prototype.getFormData = function (newUserForm) {
        var formValue = newUserForm.getData();
        console.log("form value", formValue);
        alert("check form value in console");
    };
    AddNewClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-new-client",
            template: __webpack_require__(/*! ./add-new-client.component.html */ "./src/app/screens/add-new-client/add-new-client.component.html"),
            styles: [__webpack_require__(/*! ./add-new-client.component.scss */ "./src/app/screens/add-new-client/add-new-client.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddNewClientComponent);
    return AddNewClientComponent;
}());



/***/ }),

/***/ "./src/app/screens/client-detail/client-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/screens/client-detail/client-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"client-detail-page\">\n  <div class=\"topbar clearfix\">\n    <div class=\"pull-left pointer\"><a href=\"#/main/dashboard\"><span class=\"arrow\"> </span>Dashboard</a></div>\n    <div class=\"pull-right btn-red btn-small btn-radius\">Continue</div>\n  </div>\n  <div class=\"user-infobar\">\n    <h1>Sam Spamle</h1>\n    <div class=\"user-detail\">\n      1ST CLASS <span class=\"dot\">.</span> TUES 3RD NOVEMBER\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <ul class=\"level-bar row\">\n      <li class=\"level-item level-checked col px-0\">\n        <div class=\"level-numer\"><span class=\"icon-checked\"></span></div>\n        <div class=\"level-name px-4\">Book 1st Class</div>\n      </li>\n      <li class=\"level-item level-during col pr-0\">\n        <div class=\"level-numer\">2</div>\n        <div class=\"level-name px-4\">Pre 1st Class</div>\n      </li>\n      <li class=\"level-item col pr-0\">\n        <div class=\"level-numer\">3</div>\n        <div class=\"level-name px-4\">Pre 1st Class</div>\n      </li>\n      <li class=\"level-item col pr-0\">\n        <div class=\"level-numer\">4</div>\n        <div class=\"level-name px-4\">Pre 2nd Class</div>\n      </li>\n      <li class=\"level-item col pr-0\">\n        <div class=\"level-numer pr-0\">5</div>\n        <div class=\"level-name px-4\">Post 2nd Class</div>\n      </li>\n      <li class=\"level-item col pr-0\">\n        <div class=\"level-numer\">6</div>\n        <div class=\"level-name px-4\">Pre 3rd Class</div>\n      </li>\n      <li class=\"level-item col pr-0\">\n        <div class=\"level-numer\">7</div>\n        <div class=\"level-name px-4\">Close sale</div>\n      </li>\n    </ul>\n    <div class=\"py-4 px-4\">\n      <div class=\"row\">\n        <div class=\"col col-7\">\n          <div class=\"box p-4 mt-4\">\n            <div class=\"box-title d-flex justify-content-between  mb-3 pt-2 pb-3\">\n              <h6 class=\"txt-gray text-uppercase font-weight-bold\">\n                  Client Details\n              </h6>\n              <a href=\"#/main/edit-client/Sam Sample\">Edit</a>\n            </div>\n            <div class=\"media py-4\">\n              <div class=\"mr-3 avatar rounded-circle\">\n                <img src=\"../assets/images/avatar.png\" alt=\"Generic placeholder image\">\n              </div>\n              <div class=\"media-body pl-3  pt-4\">\n                <h5 class=\"my-0 name py-2 text-truncate\">Sam Sample</h5>\n                <div class=\"txt-gray pb-2\">sam@spample.com.au</div>\n                <div class=\"txt-gray pb-2\">092454676</div>\n                <div class=\"status py-2\">\n                  <span class=\"btn-blue tiny\">Stage</span>\n                  <span class=\"btn-blue tiny\">Pre 1st class</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-5 pl-0\">\n          <div class=\"box p-4 mt-4\">\n            <div class=\"box-title d-flex justify-content-between mb-3 pt-2 pb-3 \">\n              <h6 class=\"txt-gray text-uppercase font-weight-bold\">\n                  Stage 1 summary\n              </h6>\n              <a href=\"#\">Edit</a>\n            </div>\n            <div class=\"summary-content pt-4 pl-2\">\n              <div class=\"d-flex justify-content-between my-2\">\n                <div class=\"txt-gray\">Local</div>\n                <div>Yes</div>\n              </div>\n              <div class=\"d-flex justify-content-between my-2\">\n                <div class=\"txt-gray\">Exervises</div>\n                <div>Yes</div>\n              </div>\n              <div class=\"d-flex justify-content-between my-2\">\n                <div class=\"txt-gray\">Fitness goal</div>\n                <div>Fat loss</div>\n              </div>\n              <div class=\"d-flex justify-content-between my-2\">\n                <div class=\"txt-gray\">Achieving resuls</div>\n                <div>No</div>\n              </div>\n              <div class=\"d-flex justify-content-between my-2\">\n                <div class=\"txt-gray\">Start date</div>\n                <div>1st Nov 2018</div>\n              </div>\n              <div class=\"d-flex justify-content-between my-2\">\n                <div class=\"txt-gray\">Refer a friend</div>\n                <div>Yes</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-7\">\n          <div class=\"box p-4 mt-4\">\n            <div class=\"box-title d-flex justify-content-between  mb-3 pt-2 pb-3\">\n              <h6 class=\"txt-gray text-uppercase font-weight-bold\">\n                  Referal Details\n              </h6>\n              <a href=\"#/main/client-detail/Mike Mathews\">View client</a>\n            </div>\n            <div class=\"media py-4\">\n              <div class=\"mr-3 avatar rounded-circle\">\n                <img src=\"../assets/images/icon-user-de.svg\" alt=\"Generic placeholder image\" style=\"width: auto; height: auto\">\n              </div>\n              <div class=\"media-body pl-3 pt-4\">\n                <h5 class=\"my-0 name py-2 text-truncate\">Mike Mathews</h5>\n                <div class=\"txt-gray pb-2 text-truncate\">sam@spample.com.au</div>\n                <div class=\"txt-gray pb-2\">092454676</div>\n                <div class=\"status py-2\">\n                  <span class=\"btn-blue tiny\">Stage</span>\n                  <span class=\"btn-blue tiny\">Pre 1st class</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/client-detail/client-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/screens/client-detail/client-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-detail-page .user-infobar {\n  padding: 0 2rem 2.5rem;\n  color: rgba(255, 255, 255, 0.75);\n  background: #2B2C5C; }\n  .client-detail-page .user-infobar h1 {\n    color: white;\n    margin-bottom: 0; }\n  .client-detail-page .user-infobar .user-detail {\n    text-transform: uppercase;\n    font-size: 1rem;\n    margin-top: -6px; }\n  .client-detail-page .user-infobar .user-detail .dot {\n      font-size: 18px;\n      vertical-align: 3px;\n      height: 16px;\n      padding: 0 5px;\n      font-weight: bold; }\n  .client-detail-page .level-bar {\n  padding: 0;\n  margin-bottom: 0;\n  background: #1f2043;\n  place-content: center space-between;\n  list-style: none;\n  align-items: stretch;\n  height: 10rem; }\n  .client-detail-page .level-bar .level-item {\n    position: relative;\n    color: rgba(255, 255, 255, 0.7);\n    text-align: center;\n    height: 100%; }\n  .client-detail-page .level-bar .level-item:before {\n      content: \"\";\n      position: absolute;\n      width: 0px;\n      height: 0px;\n      border-top: 5rem solid transparent;\n      border-bottom: 5rem solid transparent;\n      border-left: 2rem solid #252650;\n      right: -2rem; }\n  .client-detail-page .level-bar .level-item:after {\n      content: \"\";\n      position: absolute;\n      width: 0px;\n      height: 0px;\n      border-top: 5rem solid transparent;\n      border-bottom: 5rem solid transparent;\n      border-left: 2rem solid #1f2043;\n      top: 0;\n      right: -1.9rem; }\n  .client-detail-page .level-bar .level-item.level-checked {\n      background: #71be6b; }\n  .client-detail-page .level-bar .level-item.level-checked:before {\n        z-index: 1; }\n  .client-detail-page .level-bar .level-item.level-checked:after {\n        border-left: 2rem solid #71be6b;\n        z-index: 2; }\n  .client-detail-page .level-bar .level-item.level-checked .level-numer {\n        background: #5b955e;\n        color: white;\n        padding-top: 0.2rem; }\n  .client-detail-page .level-bar .level-item.level-during {\n      background: #408ce0; }\n  .client-detail-page .level-bar .level-item.level-during:after {\n        border-left: 2rem solid #408ce0; }\n  .client-detail-page .level-bar .level-item.level-during .level-numer {\n        background: #2c538a;\n        color: white; }\n  .client-detail-page .level-bar .level-item .icon-checked {\n      background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 width%3D%2216px%22 height%3D%2214px%22 viewBox%3D%220 0 16 14%22 enable-background%3D%22new 0 0 16 14%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cpolygon id%3D%22path-1%22 fill%3D%22%23FFFFFF%22 points%3D%224.926%2C13.652 0%2C8.725 1.767%2C6.957 4.841%2C10.031 13.959%2C0 15.809%2C1.682 %09%22%2F%3E%0D%3C%2Fg%3E%0D%3Ctitle%3EMask%3C%2Ftitle%3E%0D%3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D%3Cg id%3D%22Icons%22%3E%0D%09%3Cg id%3D%22Icon_x2F_Success%22 transform%3D%22translate(-4.000000%2C -5.000000)%22%3E%0D%09%09%3Cg id%3D%22Mask%22%3E%0D%09%09%09%3Cpolygon id%3D%22path-1_1_%22 fill%3D%22%23FFFFFF%22 points%3D%228.926%2C18.652 4%2C13.725 5.767%2C11.957 8.841%2C15.031 17.959%2C5 19.809%2C6.682 %09%09%09%22%2F%3E%0D%09%09%3C%2Fg%3E%0D%09%3C%2Fg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\") no-repeat center;\n      display: inline-block;\n      width: 1.7rem;\n      height: 1.5rem; }\n  .client-detail-page .level-bar .level-item .level-numer {\n      width: 4rem;\n      height: 4rem;\n      text-align: center;\n      line-height: 4rem;\n      background: #252650;\n      border-radius: 50%;\n      margin: 2rem auto 0.2rem; }\n  .client-detail-page .level-bar .level-item .level-name {\n      line-height: 1.3rem;\n      text-transform: uppercase;\n      font-size: 1rem; }\n  .client-detail-page .box {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  .client-detail-page .box .box-title {\n    border-bottom: 2px solid #e7e8ea;\n    font-size: 1.4rem; }\n  .client-detail-page .box .media-body {\n    font-size: 1.4rem; }\n  .client-detail-page .box .summary-content {\n    font-size: 1.4rem;\n    height: 18rem; }\n"

/***/ }),

/***/ "./src/app/screens/client-detail/client-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/screens/client-detail/client-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
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

var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent() {
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
    };
    ClientDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-detail',
            template: __webpack_require__(/*! ./client-detail.component.html */ "./src/app/screens/client-detail/client-detail.component.html"),
            styles: [__webpack_require__(/*! ./client-detail.component.scss */ "./src/app/screens/client-detail/client-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "./src/app/screens/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/screens/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-page\">\n  <div class=\"clearfix header p-5\">\n    <div class=\"pull-left\"><span class=\"icon-username\"></span>Tarn</div>\n    <div class=\"pull-right pointer\" (click)=\"logout()\">Logout</div>\n  </div>\n  <div class=\"content\">\n    <div class=\"logo\">\n      <img src=\"../assets/images/logo.svg\" alt=\"\">\n    </div>\n    <form [formGroup]=\"searchForm\" class=\"input-group search-container mb-5 pb-5\">\n\n      <span class=\"icon-search icon-search my-3 mx-4\"></span>\n      <input type=\"text\" class=\"search-inputdropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" formControlName=\"search\" placeholder=\"Search Name, Phone or Email\">\n\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n\n        <a class=\"dropdown-item\" *ngFor=\"let user of listUser\" href=\"#/main/client-detail/{{user.name}}\">\n          <span class=\"icon-user2\"></span>\n          <div class=\"user-infor\">\n            <div class=\"user-name\">{{user.name}}</div>\n            <div class=\"user-detail\">\n              <span class=\"user-number\">{{user.phone}}</span>\n              <span class=\"user-email\">{{user.email}}</span>\n            </div>\n          </div>\n          <div class=\"status\">\n            <span class=\"btn-blue tiny\">Stage</span>\n            <span class=\"btn-blue tiny\">Pre 1st class</span>\n          </div>\n        </a>\n\n      </div>\n\n    </form>\n    <div class=\"option-list\">\n        <div class=\"btn btn-red my-4 mx-3\">\n            <a href=\"#/main/step-1\">\n              <span class=\"icon-phone mt-5 mb-3 mx-auto\"></span>\n              <span class=\"pb-3\">TELEPHONE</span>\n            </a>\n        </div>\n        <div class=\"btn btn-red my-4 mx-3\">\n            <a href=\"\">\n                <span class=\"icon-signin  mt-5 mb-3 mx-auto\"></span>\n                <span class=\"pb-3\">WALK-IN</span>\n            </a>\n        </div>\n        <div class=\"btn btn-red my-4 mx-3\">\n            <a href=\"\">\n                <span class=\"icon-website  mt-5 mb-3 mx-auto\"></span>\n                <span class=\"pb-3\">WEBSITE LEAD</span>\n            </a>\n        </div>\n        <div class=\"btn btn-red my-4 mx-3\">\n            <a href=\"#/main/add-new-client\">\n                <span class=\"icon-people  mt-5 mb-3 mx-auto\"></span>\n                <span class=\"pb-3\">MANUAL</span>\n            </a>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-page {\n  background-color: #2B2C5C;\n  height: 100vh; }\n  .dashboard-page .header {\n    color: white;\n    font-size: 1.4rem; }\n  .dashboard-page .header .icon-username {\n      background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2238px%22 height%3D%2238px%22 viewBox%3D%220 0 38 38%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3EGroup 2%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%3C%2Fdefs%3E%0D    %3Cg id%3D%22Userflows%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%2200A--03-Dashboard%22 transform%3D%22translate(-29.000000%2C -53.000000)%22 stroke%3D%22%23FFFFFF%22 stroke-width%3D%221.25%22%3E%0D            %3Cg id%3D%22Header%22 transform%3D%22translate(30.000000%2C 54.000000)%22%3E%0D                %3Cg id%3D%22Profile%22%3E%0D                    %3Cg id%3D%22circle-10%22%3E%0D                        %3Cg id%3D%22Group-2%22%3E%0D                            %3Cpath d%3D%22M13.6846452%2C21.5454194 L8.01754839%2C25.1047742 C7.00258065%2C25.7423226 6.38709677%2C26.856 6.38709677%2C28.0544516 L6.38709677%2C30.9832258%22 id%3D%22Shape%22%3E%3C%2Fpath%3E%0D                            %3Cpath d%3D%22M22.3153548%2C21.5454194 L27.9824516%2C25.1047742 C28.9974194%2C25.7423226 29.6129032%2C26.856 29.6129032%2C28.0544516 L29.6129032%2C30.9832258%22 id%3D%22Shape%22%3E%3C%2Fpath%3E%0D                            %3Cpath d%3D%22M11.0322581%2C14.516129 C11.0322581%2C10.6676129 14.1514839%2C7.5483871 18%2C7.5483871 C21.8485161%2C7.5483871 24.9677419%2C10.6676129 24.9677419%2C14.516129 C24.9677419%2C18.3646452 22.1609032%2C23.8064516 18%2C23.8064516 C13.8867097%2C23.8064516 11.0322581%2C18.3646452 11.0322581%2C14.516129 Z%22 id%3D%22Shape%22 stroke-linecap%3D%22square%22%3E%3C%2Fpath%3E%0D                            %3Ccircle id%3D%22Oval%22 stroke-linecap%3D%22square%22 cx%3D%2218%22 cy%3D%2218%22 r%3D%2217.4193548%22%3E%3C%2Fcircle%3E%0D                        %3C%2Fg%3E%0D                    %3C%2Fg%3E%0D                %3C%2Fg%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center;\n      display: inline-block;\n      width: 3.6rem;\n      height: 3.6rem;\n      vertical-align: middle;\n      margin-right: 1rem;\n      background-size: contain; }\n  .dashboard-page .logo {\n    padding: 3rem 0 10rem; }\n  .dashboard-page .content {\n    padding: 0 4rem; }\n  .dashboard-page .search-container .icon-search {\n    background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2220px%22 height%3D%2220px%22 viewBox%3D%220 0 20 20%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3EMask%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M21.707%2C20.293 L16.314%2C14.9 C17.403%2C13.504 18%2C11.799 18%2C10 C18%2C7.863 17.167%2C5.854 15.656%2C4.344 C14.146%2C2.832 12.137%2C2 10%2C2 C7.863%2C2 5.854%2C2.832 4.344%2C4.344 C2.833%2C5.854 2%2C7.863 2%2C10 C2%2C12.137 2.833%2C14.146 4.344%2C15.656 C5.854%2C17.168 7.863%2C18 10%2C18 C11.799%2C18 13.504%2C17.404 14.9%2C16.314 L20.293%2C21.706 L21.707%2C20.293 Z M10%2C16 C8.397%2C16 6.891%2C15.376 5.758%2C14.243 C4.624%2C13.11 4%2C11.603 4%2C10 C4%2C8.398 4.624%2C6.891 5.758%2C5.758 C6.891%2C4.624 8.397%2C4 10%2C4 C11.603%2C4 13.109%2C4.624 14.242%2C5.758 C15.376%2C6.891 16%2C8.398 16%2C10 C16%2C11.603 15.376%2C13.11 14.242%2C14.243 C13.109%2C15.376 11.603%2C16 10%2C16 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Icons%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Icon%2FSearch%22 transform%3D%22translate(-2.000000%2C -2.000000)%22%3E%0D            %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D            %3C%2Fmask%3E%0D            %3Cuse id%3D%22Mask%22 fill%3D%22%23D8D8D8%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\") no-repeat center;\n    display: inline-block;\n    width: 2.9rem;\n    height: 2rem; }\n  .dashboard-page .search-container input {\n    width: 100%;\n    color: #ffffff;\n    font-size: 1.4rem;\n    height: 6rem;\n    border-radius: 0.4rem;\n    border: 1px solid #49495f;\n    background: rgba(0, 0, 0, 0.5);\n    opacity: 0.7;\n    margin-top: -5rem;\n    padding-left: 5rem; }\n  .dashboard-page .search-container .dropdown-menu {\n    width: 100%;\n    background-color: #2B2C5C;\n    top: -3px !important;\n    padding: 0;\n    margin: 0;\n    border: none;\n    border-radius: 0 0 0.4rem 0.4rem; }\n  .dashboard-page .search-container .dropdown-menu a {\n      color: #c5c5cd;\n      font-size: 1.4rem;\n      height: 6rem;\n      border: 1px solid #49495f;\n      border-bottom: none;\n      background: rgba(0, 0, 0, 0.35);\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n  .dashboard-page .search-container .dropdown-menu a:hover {\n        background: rgba(0, 0, 0, 0.5); }\n  .dashboard-page .search-container .dropdown-menu a:last-child {\n        border-bottom: 1px solid #49495f;\n        border-radius: 0 0 0.4rem 0.4rem; }\n  .dashboard-page .search-container .dropdown-menu a .icon-user2 {\n        background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2218px%22 height%3D%2218px%22 viewBox%3D%220 0 18 18%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3EMask%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M12%2C3 C7.03725%2C3 3%2C7.03725 3%2C12 C3%2C16.96275 7.03725%2C21 12%2C21 C16.96275%2C21 21%2C16.96275 21%2C12 C21%2C7.03725 16.96275%2C3 12%2C3 Z M17.0235%2C17.553 C16.5255%2C16.07325 15.1485%2C15 13.5%2C15 L10.5%2C15 C8.8515%2C15 7.476%2C16.074 6.978%2C17.55375 C5.46075%2C16.1805 4.5%2C14.20275 4.5%2C12 C4.5%2C7.8645 7.8645%2C4.5 12%2C4.5 C16.1355%2C4.5 19.5%2C7.8645 19.5%2C12 C19.5%2C14.202 18.54%2C16.17975 17.0235%2C17.553 Z M12%2C6.75 C10.34325%2C6.75 9%2C8.09325 9%2C9.75 L9%2C10.5 C9%2C12.15675 10.34325%2C13.5 12%2C13.5 C13.65675%2C13.5 15%2C12.15675 15%2C10.5 L15%2C9.75 C15%2C8.09325 13.65675%2C6.75 12%2C6.75 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Icons%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Icon%2FUser%22 transform%3D%22translate(-3.000000%2C -3.000000)%22%3E%0D            %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D            %3C%2Fmask%3E%0D            %3Cuse id%3D%22Mask%22 fill%3D%22%23D8D8D8%22 fill-rule%3D%22nonzero%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center;\n        display: inline-block;\n        width: 2.4rem;\n        height: 2.4rem; }\n  .dashboard-page .search-container .dropdown-menu a .user-infor {\n        width: calc(100% - 20rem);\n        padding: 0 1rem; }\n  .dashboard-page .search-container .dropdown-menu a .user-infor .user-name {\n          color: #fff; }\n  .dashboard-page .search-container .dropdown-menu a .user-infor .user-number {\n          margin-right: 4rem;\n          width: 11rem;\n          display: inline-block; }\n  .dashboard-page .option-list {\n    margin: 0;\n    text-align: center; }\n  .dashboard-page .option-list .btn-red {\n      height: 15rem;\n      width: 15rem;\n      display: inline-block;\n      text-align: center; }\n  .dashboard-page .option-list .btn-red a {\n        color: white;\n        font-size: 1.4rem; }\n  .dashboard-page .option-list .btn-red [class*=\"icon-\"] {\n        display: block;\n        height: 6rem;\n        width: 6rem;\n        background-size: contain !important; }\n  .dashboard-page .option-list .btn-red [class*=\"icon-\"].icon-phone {\n          background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2212px%22 height%3D%2218px%22 viewBox%3D%220 0 12 18%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Esmartphone%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M7.51563405%2C3 C6.67834395%2C3 6%2C3.64032139 6%2C4.43149955 L6%2C19.5685005 C6%2C20.3596786 6.67834395%2C21 7.51563405%2C21 L16.4834974%2C21 C17.3207875%2C21 18%2C20.3596786 18%2C19.5685005 L18%2C4.43149955 C18%2C3.64032139 17.3207875%2C3 16.4834974%2C3 L7.51563405%2C3 Z M10.828315%2C4.14290399 L13.1586566%2C4.14290399 C13.425304%2C4.14290399 13.641575%2C4.34787243 13.641575%2C4.59957367 C13.641575%2C4.85209478 13.425304%2C5.06526195 13.1586566%2C5.06526195 L10.828315%2C5.06526195 C10.5607991%2C5.06526195 10.3445281%2C4.85209478 10.3445281%2C4.59957367 C10.3445281%2C4.34787243 10.5607991%2C4.14290399 10.828315%2C4.14290399 L10.828315%2C4.14290399 Z M11.0133179%2C19.3217185 C11.0133179%2C18.811757 11.4519398%2C18.3977208 11.9930515%2C18.3977208 C12.5341633%2C18.3977208 12.9727852%2C18.811757 12.9727852%2C19.3217185 C12.9727852%2C19.8324998 12.5341633%2C20.246536 11.9930515%2C20.246536 C11.4519398%2C20.246536 11.0133179%2C19.8324998 11.0133179%2C19.3217185 Z M15.4559931%2C17.7844552 L8.51621309%2C17.7844552 C8.03416329%2C17.7844552 7.6433121%2C17.415512 7.6433121%2C16.9604821 L7.6433121%2C7.02967943 C7.6433121%2C6.5746495 8.03416329%2C6.20570632 8.51621309%2C6.20570632 L15.4559931%2C6.20570632 C15.9380428%2C6.20570632 16.328894%2C6.5746495 16.328894%2C7.02967943 L16.328894%2C16.9604821 C16.328894%2C17.415512 15.9380428%2C17.7844552 15.4559931%2C17.7844552 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Icons%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Icon%2FMobile%22 transform%3D%22translate(-6.000000%2C -3.000000)%22%3E%0D            %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D            %3C%2Fmask%3E%0D            %3Cuse id%3D%22smartphone%22 fill%3D%22%23FFFFFF%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center; }\n  .dashboard-page .option-list .btn-red [class*=\"icon-\"].icon-signin {\n          background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2214px%22 height%3D%2222px%22 viewBox%3D%220 0 14 22%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3EShape%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M7.7875%2C5.71334699e-05 L0.320833333%2C2.20005142 C0.134896067%2C2.28770755 0%2C2.46473845 0%2C2.64005028 L0%2C19.8000057 C0%2C20.0200051 0.145833333%2C20.1953174 0.379166667%2C20.2400046 L7.84583333%2C22 L7.93333333%2C22 C8.0263022%2C22 8.1174478%2C21.9621878 8.21041667%2C21.9175002 C8.30338553%2C21.8298441 8.4%2C21.6923444 8.4%2C21.5600011 L8.4%2C0.440055991 C8.4%2C0.307712694 8.30338553%2C0.170213052 8.21041667%2C0.0825569192 C8.0700522%2C-0.00509912514 7.92786447%2C5.71334699e-05 7.7875%2C5.71334699e-05 Z M9.33333333%2C1.76005256 L9.33333333%2C2.64005028 L13.0666667%2C2.64005028 L13.0666667%2C19.3600069 L9.33333333%2C19.3600069 L9.33333333%2C20.2400046 L13.5333333%2C20.2400046 C13.7903645%2C20.2400046 14%2C20.0423487 14%2C19.8000057 L14%2C2.20005142 C14%2C1.95770841 13.7903645%2C1.76005256 13.5333333%2C1.76005256 L9.33333333%2C1.76005256 Z M6.53333333%2C10.5600297 C6.81406273%2C10.5600297 7%2C10.8676853 7%2C11.220028 C7%2C11.5723707 6.81406273%2C11.8800263 6.53333333%2C11.8800263 C6.2526044%2C11.8800263 6.06666667%2C11.5723707 6.06666667%2C11.220028 C6.06666667%2C10.8676853 6.2526044%2C10.5600297 6.53333333%2C10.5600297 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Icons%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Icon%2FDoor%22 transform%3D%22translate(-5.000000%2C -1.000000)%22%3E%0D            %3Cg id%3D%22icons8-door_opened_filled%22 transform%3D%22translate(5.000000%2C 1.000000)%22%3E%0D                %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                    %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D                %3C%2Fmask%3E%0D                %3Cuse id%3D%22Shape%22 fill%3D%22%23FFFFFF%22 fill-rule%3D%22nonzero%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center; }\n  .dashboard-page .option-list .btn-red [class*=\"icon-\"].icon-website {\n          background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2218px%22 height%3D%2218px%22 viewBox%3D%220 0 18 18%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3EShape%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M9%2C0 C4.02921196%2C0 0%2C4.02921196 0%2C9 C0%2C13.970788 4.02921196%2C18 9%2C18 C13.970788%2C18 18%2C13.970788 18%2C9 C18%2C4.02921196 13.970788%2C0 9%2C0 Z M9%2C0.782608696 C12.7143344%2C0.782608696 15.8569975%2C3.26188878 16.8704143%2C6.65217391 L16.0495924%2C6.65217391 C15.766814%2C5.80995235 15.3388248%2C5.03651504 14.7946672%2C4.359375 C14.2826087%2C4.59782609 13.7139946%2C4.80570652 13.0903533%2C4.97078804 C13.2600205%2C5.50271739 13.4006455%2C6.06368896 13.5%2C6.65217391 L12.7082203%2C6.65217391 C12.6149795%2C6.12483026 12.4865828%2C5.62347157 12.3337295%2C5.14962626 C11.4135531%2C5.3391643 10.4154214%2C5.44616178 9.39130435%2C5.46908987 L9.39130435%2C6.65217391 L8.60869565%2C6.65217391 L8.60869565%2C5.46908987 C7.58610743%2C5.44616178 6.58797574%2C5.33763587 5.66779891%2C5.14809783 C5.51341722%2C5.62347157 5.38502048%2C6.12483026 5.29178009%2C6.65217391 L4.5%2C6.65217391 C4.60088335%2C6.06368896 4.73997952%2C5.50271739 4.90964674%2C4.97078804 C4.28753387%2C4.80417809 3.71586287%2C4.59782609 3.20380435%2C4.359375 C2.66117517%2C5.03804348 2.23318604%2C5.80995235 1.95040761%2C6.65217391 L1.12805726%2C6.65217391 C2.14300291%2C3.26188878 5.28566596%2C0.782608696 9%2C0.782608696 Z M8.60869565%2C1.60495943 C8.12262248%2C1.69972826 7.65183443%2C1.96875 7.20703135%2C2.41355309 C6.70414422%2C2.91491178 6.27921196%2C3.60122283 5.94140635%2C4.40828804 C6.77751378%2C4.57184113 7.68087626%2C4.66508152 8.60869565%2C4.68648117 L8.60869565%2C1.60495943 Z M9.39130435%2C1.60495943 L9.39130435%2C4.68648117 C10.3206522%2C4.66508152 11.2224866%2C4.57184113 12.0585937%2C4.40675961 C11.7177312%2C3.59205183 11.2866848%2C2.89962626 10.7776835%2C2.39673913 C10.3374661%2C1.96263587 9.87126378%2C1.69972826 9.39130435%2C1.60495943 Z M6.53753387%2C1.98862083 C5.4797893%2C2.36158278 4.53057065%2C2.96993896 3.75254765%2C3.74796196 C4.18665091%2C3.93444313 4.66049583%2C4.09952465 5.17408278%2C4.2325067 C5.53481648%2C3.34137248 5.99337626%2C2.57099204 6.53753387%2C1.98862083 Z M11.4594089%2C1.98862083 C12.0050953%2C2.57099204 12.4636551%2C3.34137248 12.8259172%2C4.2325067 C13.3395042%2C4.09952465 13.8148779%2C3.93597157 14.2474523%2C3.74796196 C13.4694293%2C2.96993896 12.5202107%2C2.36158278 11.4594089%2C1.98862083 Z M0.782608696%2C7.43478261 L1.60495943%2C7.43478261 L2.20414422%2C9.58542809 L2.92866848%2C7.43478261 L3.88400126%2C7.43478261 L4.5794837%2C9.62211287 L5.19089674%2C7.43478261 L5.99796196%2C7.43478261 L5.03345778%2C10.5652174 L4.18206522%2C10.5652174 L3.39028552%2C8.22503387 L2.6015627%2C10.5652174 L1.73182735%2C10.5652174 L0.782608696%2C7.43478261 Z M6.39232357%2C7.43478261 L7.21314548%2C7.43478261 L7.81233026%2C9.58542809 L8.53991178%2C7.43478261 L9.49371613%2C7.43478261 L10.190727%2C9.62211287 L10.7990828%2C7.43478261 L11.6076768%2C7.43478261 L10.6431727%2C10.5652174 L9.79178009%2C10.5652174 L9%2C8.22503387 L8.21127717%2C10.5652174 L7.34154222%2C10.5652174 L6.39232357%2C7.43478261 Z M11.9821672%2C7.43478261 L12.8075748%2C7.43478261 L13.408288%2C9.58542809 L14.137398%2C7.43478261 L15.095788%2C7.43478261 L15.7943273%2C9.62211287 L16.4057404%2C7.43478261 L17.2173913%2C7.43478261 L16.2483018%2C10.5652174 L15.3953804%2C10.5652174 L14.6005435%2C8.22503387 L13.807235%2C10.5652174 L12.9344431%2C10.5652174 L11.9821672%2C7.43478261 Z M12.7082203%2C11.3478261 L13.5%2C11.3478261 C13.399117%2C11.936311 13.2600205%2C12.4972826 13.0903533%2C13.029212 C13.7124661%2C13.1958219 14.2841371%2C13.4021739 14.7961957%2C13.640625 C15.3388248%2C12.9619565 15.7683424%2C12.1885192 16.0495924%2C11.3478261 L16.8704143%2C11.3478261 C15.8569975%2C14.7365828 12.7143344%2C17.2173913 9%2C17.2173913 C5.28566596%2C17.2173913 2.14300291%2C14.7381116 1.12805726%2C11.3478261 L1.95040761%2C11.3478261 C2.23318604%2C12.1900477 2.66117517%2C12.963485 3.20533278%2C13.640625 C3.7173913%2C13.4021739 4.28600543%2C13.1942935 4.90964674%2C13.029212 C4.73997952%2C12.4972826 4.59935452%2C11.936311 4.5%2C11.3478261 L5.29178009%2C11.3478261 C5.38502048%2C11.8751697 5.51341722%2C12.3765284 5.66627048%2C12.8503737 C6.58644691%2C12.6608357 7.584579%2C12.5538382 8.60869565%2C12.5309105 L8.60869565%2C11.3478261 L9.39130435%2C11.3478261 L9.39130435%2C12.5309105 C10.4138926%2C12.5538382 11.4120247%2C12.6623641 12.3322011%2C12.8519022 C12.4865828%2C12.3765284 12.6149795%2C11.8751697 12.7082203%2C11.3478261 Z M8.60869565%2C13.3135192 C7.68393352%2C13.3349185 6.78668478%2C13.4281589 5.95516304%2C13.591712 C6.600204%2C15.121773 7.54789422%2C16.1810464 8.60869565%2C16.3935121 L8.60869565%2C13.3135192 Z M9.39130435%2C13.3135192 L9.39130435%2C16.3935121 C9.87737791%2C16.2987433 10.348166%2C16.0297216 10.7929687%2C15.5849185 C11.2958562%2C15.0850882 11.720788%2C14.3987772 12.0585937%2C13.591712 C11.2224866%2C13.4281589 10.3191237%2C13.3349185 9.39130435%2C13.3135192 Z M12.8259172%2C13.7674933 C12.4651835%2C14.6586279 12.0066237%2C15.4290083 11.4624661%2C16.0113792 C12.5202107%2C15.6384172 13.4694293%2C15.030061 14.2474523%2C14.252038 C13.8133491%2C14.0655573 13.3395042%2C13.9004757 12.8259172%2C13.7674933 Z M5.16185452%2C13.7690217 C4.65285326%2C13.9035326 4.18053678%2C14.0640284 3.75101922%2C14.2505096 C4.52445652%2C15.0224185 5.46450417%2C15.6277174 6.51460617%2C16.0022078 C5.97961957%2C15.4274795 5.52258822%2C14.664742 5.16185452%2C13.7690217 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Icons%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Icon%2FWWW%22 transform%3D%22translate(-3.000000%2C -3.000000)%22%3E%0D            %3Cg id%3D%22icons8-domain_filled%22 transform%3D%22translate(3.000000%2C 3.000000)%22%3E%0D                %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                    %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D                %3C%2Fmask%3E%0D                %3Cuse id%3D%22Shape%22 fill%3D%22%23FFFFFF%22 fill-rule%3D%22nonzero%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center; }\n  .dashboard-page .option-list .btn-red [class*=\"icon-\"].icon-people {\n          background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%228px%22 height%3D%2219px%22 viewBox%3D%220 0 8 19%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Euser%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M14.5099693%2C5.54849553 C14.5099693%2C6.95671067 13.3865031%2C8.09776994 12.0007669%2C8.09776994 C10.6142638%2C8.09776994 9.49079755%2C6.95671067 9.49079755%2C5.54849553 C9.49079755%2C4.14105928 10.6142638%2C3 12.0007669%2C3 C13.3865031%2C3 14.5099693%2C4.14105928 14.5099693%2C5.54849553 L14.5099693%2C5.54849553 Z M8%2C10.2420267 L8.42868098%2C15.0796507 C8.46165644%2C15.4519554 8.76150307%2C15.7424777 9.1303681%2C15.7572764 L9.44631902%2C15.7705173 C9.70015337%2C15.7806428 9.90490798%2C15.9839305 9.92101227%2C16.2417398 L10.3052147%2C21.3208166 C10.333589%2C21.7040256 10.648773%2C22 11.0268405%2C22 L12.9923313%2C22 C13.3703988%2C22 13.6855828%2C21.7040256 13.7139571%2C21.3200377 L14.095092%2C16.2370665 C14.1127301%2C15.9815938 14.3167178%2C15.7806428 14.5690184%2C15.7697385 L14.8842025%2C15.7564975 C15.2461656%2C15.7409199 15.541411%2C15.4550709 15.5736196%2C15.0882184 L16%2C10.2420267 C16%2C9.59633516 15.4846626%2C9.07292777 14.8489264%2C9.07292777 L9.15107362%2C9.07292777 C8.51533742%2C9.07292777 8%2C9.59633516 8%2C10.2420267 L8%2C10.2420267 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Icons%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Icon%2FPerson-Male%22 transform%3D%22translate(-8.000000%2C -3.000000)%22%3E%0D            %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D            %3C%2Fmask%3E%0D            %3Cuse id%3D%22user%22 fill%3D%22%23FFFFFF%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center; }\n"

/***/ }),

/***/ "./src/app/screens/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.listUser = [
            {
                name: "Sam Sample",
                phone: "04 1234 5678",
                email: "sam@sample.com.au"
            },
            {
                name: "Sam Sample 1",
                phone: "04 1234 5678",
                email: "sam@sample.com.au"
            },
            {
                name: "Sam Sample 2",
                phone: "04 1234 5678",
                email: "sam@sample.com.au"
            },
            {
                name: "Sam Sample 3",
                phone: "04 1234 5678",
                email: "sam@sample.com.au"
            }
        ];
        this.createForm();
    }
    DashboardComponent.prototype.createForm = function () {
        this.searchForm = this.fb.group({
            search: [""]
        });
    };
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.logout = function () {
        this.router.navigate(["welcome"]);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/screens/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/screens/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/screens/edit-client/edit-client.component.html":
/*!****************************************************************!*\
  !*** ./src/app/screens/edit-client/edit-client.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"editClientForm\" (ngSubmit)=\"onSubmit(addUserForm)\" class=\"user-form\">\n\t<div class=\"edit-page\">\n\t\t<div class=\"topbar clearfix\">\n\t\t\t<div class=\"pull-left pointer\" (click)=\"history.back()\"><span class=\"arrow\"> </span>Cancel</div>\n\t\t\t<button type=\"submit\" class=\"pull-right btn-red btn-small btn-radius\">Save</button>\n\t\t</div>\n\t\t<div class=\"user-container container-fluid p-5\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col col-6\">\n\t\t\t\t\t<app-add-user-form #addUserForm></app-add-user-form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label class=\"txt-gray\">Mobile</label>\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"mobile\" placeholder=\"045613246\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col col-6\">\n\t\t\t\t\t<div class=\"d-flex justify-content-center align-items-center my-5 pb-5 pt-1\">\n\t\t\t\t\t\t<div class=\"avatar rounded-circle mr-5 mb-2\">\n\t\t\t\t\t\t\t<img src=\"../assets/images/avatar.png\" alt=\"Generic placeholder image\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"btn btn-blue btn-large btn-radius d-block mb-3\">Take a photo</div>\n\t\t\t\t\t\t\t<div class=\"btn btn-white btn-large btn-radius d-block\">Delete</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label class=\"txt-gray\">Lead stage</label>\n\t\t\t\t\t\t<select class=\"custom-select custom-select-lg mb-3\" formControlName=\"leadStage\">\n\t\t\t\t\t\t\t<option selected>Contract Signed</option>\n\t\t\t\t\t\t\t<option value=\"1\">One</option>\n\t\t\t\t\t\t\t<option value=\"2\">Two</option>\n\t\t\t\t\t\t\t<option value=\"3\">Three</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label class=\"txt-gray\">Trial Membership</label>\n\t\t\t\t\t\t<select class=\"custom-select custom-select-lg mb-3\" formControlName=\"trialMembership\">\n\t\t\t\t\t\t\t<option selected>Open this select menu</option>\n\t\t\t\t\t\t\t<option value=\"1\">One</option>\n\t\t\t\t\t\t\t<option value=\"2\">Two</option>\n\t\t\t\t\t\t\t<option value=\"3\">Three</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n</form>\n"

/***/ }),

/***/ "./src/app/screens/edit-client/edit-client.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/screens/edit-client/edit-client.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-form .form-control,\n.user-form .custom-select-lg {\n  color: #999; }\n"

/***/ }),

/***/ "./src/app/screens/edit-client/edit-client.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/screens/edit-client/edit-client.component.ts ***!
  \**************************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(fb, location) {
        this.fb = fb;
        this.location = location;
        this.createForm();
    }
    EditClientComponent.prototype.createForm = function () {
        this.editClientForm = this.fb.group({
            editClient: [""],
            mobile: "",
            leadStage: "",
            trialMembership: ""
        });
    };
    Object.defineProperty(EditClientComponent.prototype, "f", {
        get: function () {
            return this.editClientForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditClientComponent.prototype.ngOnInit = function () { };
    EditClientComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditClientComponent.prototype.onSubmit = function (newUserForm) {
        var userFormValue = newUserForm.getData();
        var formValue = this.editClientForm.value;
    };
    EditClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-edit-client",
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/screens/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.scss */ "./src/app/screens/edit-client/edit-client.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/screens/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/screens/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid login-page\">\r\n  <div class=\"logo\">\r\n    <img src=\"../assets/images/logo.svg\" alt=\"\">\r\n  </div>\r\n  <div class=\"login-form\">\r\n    <form [formGroup]=\"loginForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label>Studio code</label>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"studio\" placeholder=\"F1234567\" [ngClass]=\"{ 'is-invalid': submitted && f.studio.errors }\">\r\n          <span class=\"icon-earth mt-4\"></span>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.studio.errors\" class=\"form-text text-muted\">\r\n          <div *ngIf=\"f.studio.errors.required\">Invalid studio code</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"sam@sample.com.au\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n          <span class=\"icon-mail mt-4\"></span>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.username.errors\" class=\"form-text text-muted\">\r\n          <div *ngIf=\"f.username.errors.email\">Invalid username</div>\r\n          <div *ngIf=\"f.username.errors.required\">Require username</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Password</label>\r\n        <div class=\"input-group\">\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"******\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n          <span class=\"icon-lock mt-4\"></span>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"form-text text-muted\">\r\n          <div *ngIf=\"f.password.errors.required\">Invalid password</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-center pt-3\">\r\n        <button type=\"submit\" class=\"btn btn-red btn-radius btn-large\">LOGIN</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cont-alert\" *ngIf=\"showAddAlertModal\">\r\n  <div class=\"alert alert-danger\">\r\n    <span>Unauthorized! Incorrect Username or Password! <i class=\"fa fa-times\" ></i></span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/screens/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/screens/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  background-color: #2b2c5c;\n  height: 100vh; }\n  .login-page .login-form {\n    padding: 0 20vw; }\n  .login-page .login-form label {\n      color: #ffffff; }\n  .login-page .login-form label .txt-warning {\n        color: #FF0439; }\n  .login-page .login-form input {\n      color: #ffffff;\n      font-size: 1.4rem;\n      height: 6rem;\n      border-radius: 0.4rem;\n      border: 1px solid #49495f;\n      background: rgba(0, 0, 0, 0.5);\n      opacity: 0.7; }\n  .login-page .login-form [class*=\"icon-\"] {\n      margin-left: -3.5rem; }\n  .login-page .login-form [class*=\"icon-\"].icon-earth {\n        background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2222px%22 height%3D%2222px%22 viewBox%3D%220 0 22 22%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3EIcon%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M14%2C3.5 C8.225%2C3.5 3.5%2C8.225 3.5%2C14 C3.5%2C19.775 8.225%2C24.5 14%2C24.5 C19.775%2C24.5 24.5%2C19.775 24.5%2C14 C24.5%2C8.225 19.775%2C3.5 14%2C3.5 Z M14%2C22.75 C11.8125%2C22.75 9.8%2C21.9625 8.3125%2C20.5625 C9.8%2C18.1125 8.8375%2C16.625 8.1375%2C16.0125 C7.9625%2C15.8375 7.7875%2C15.6625 7.525%2C15.4875 C7%2C15.05 6.65%2C14.7875 6.65%2C14 C6.65%2C13.65 6.825%2C13.475 7.875%2C13.125 C8.575%2C12.8625 9.45%2C12.6 9.975%2C11.9 C11.2%2C10.325 9.8875%2C7.875 9.625%2C7.4375 C9.45%2C7.175 9.275%2C6.9125 9.1%2C6.7375 C10.4125%2C5.8625 11.9875%2C5.3375 13.65%2C5.25 C14%2C5.6875 14.4375%2C6.125 14.875%2C6.475 C15.225%2C6.825 15.8375%2C6.9125 16.1875%2C7.35 C16.3625%2C7.6125 16.275%2C7.9625 16.275%2C8.3125 C16.275%2C8.8375 16.625%2C9.625 17.7625%2C9.625 L17.9375%2C9.625 C18.375%2C9.625 19.775%2C9.275 21.0875%2C8.8375 C22.1375%2C10.325 22.8375%2C12.075 22.8375%2C14 C22.75%2C18.8125 18.8125%2C22.75 14%2C22.75 Z M17.0625%2C11.2875 C15.6625%2C11.2875 14.2625%2C11.9 13.5625%2C12.95 C13.125%2C13.5625 12.95%2C14.35 13.125%2C15.05 C13.5625%2C16.45 13.65%2C17.325 13.3%2C18.2875 C13.0375%2C19.1625 13.0375%2C20.3875 14.4375%2C20.9125 C14.7%2C21 14.9625%2C21.0875 15.3125%2C21.0875 C16.3625%2C21.0875 17.675%2C20.3875 18.725%2C19.25 C20.125%2C17.85 20.9125%2C16.1875 20.825%2C14.7 C21%2C12.8625 19.25%2C11.2875 17.0625%2C11.2875 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Symbols%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Row%2FInput-Ghost-Rev%22 transform%3D%22translate(-325.000000%2C -39.000000)%22%3E%0D            %3Cg id%3D%22Row%2FInput-Ghost%22%3E%0D                %3Cg id%3D%22Icon%2FGlobe%22 transform%3D%22translate(322.000000%2C 36.000000)%22%3E%0D                    %3Crect id%3D%22Bounding-Box%22 x%3D%220%22 y%3D%220%22 width%3D%2228%22 height%3D%2228%22%3E%3C%2Frect%3E%0D                    %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                        %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D                    %3C%2Fmask%3E%0D                    %3Cg id%3D%22Mask%22 fill-rule%3D%22nonzero%22%3E%3C%2Fg%3E%0D                    %3Cg id%3D%22Mixin%2FFill%2FAccent-2%22 mask%3D%22url(%23mask-2)%22 fill%3D%22%2371BE6B%22 fill-rule%3D%22evenodd%22%3E%0D                        %3Crect id%3D%22Box%22 x%3D%220%22 y%3D%220%22 width%3D%2228%22 height%3D%2228%22%3E%3C%2Frect%3E%0D                    %3C%2Fg%3E%0D                %3C%2Fg%3E%0D            %3C%2Fg%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center; }\n  .login-page .login-form [class*=\"icon-\"].icon-mail {\n        background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2218px%22 height%3D%2211px%22 viewBox%3D%220 0 18 11%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Eenvelope%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M12.7341939%2C14.3817161 L20.1575342%2C8.85491947 C20.498156%2C8.60109622 21%2C8.83035593 21%2C9.23900392 L21%2C16.9958722 C21%2C17.5504128 20.5226554%2C18 19.9338778%2C18 L4.06612223%2C18 C3.47734457%2C18 3%2C17.5504128 3%2C16.9958722 L3%2C9.24049262 C3%2C8.83110028 3.50184405%2C8.60258492 3.84246575%2C8.85640817 L11.2507903%2C14.3809717 C11.6854584%2C14.7047638 12.2995258%2C14.7047638 12.7341939%2C14.3817161 L12.7341939%2C14.3817161 Z M4.50474183%2C7 C4.01712329%2C7 3.806902%2C7.58357017 4.19415174%2C7.86344566 L11.477608%2C13.1274868 C11.780295%2C13.3463256 12.2007376%2C13.3463256 12.5034247%2C13.1282312 L19.802687%2C7.86344566 C20.1907271%2C7.58357017 19.9805058%2C7 19.4920969%2C7 L4.50474183%2C7 L4.50474183%2C7 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Icons%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Icon%2FEmail%22 transform%3D%22translate(-3.000000%2C -7.000000)%22%3E%0D            %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D            %3C%2Fmask%3E%0D            %3Cuse id%3D%22envelope%22 fill%3D%22%2371BE6B%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center; }\n  .login-page .login-form [class*=\"icon-\"].icon-lock {\n        background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%0D%3Csvg width%3D%2214px%22 height%3D%2218px%22 viewBox%3D%220 0 14 18%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0D    %3C!-- Generator%3A Sketch 51.2 (57519) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E%0D    %3Ctitle%3Elockedalt%3C%2Ftitle%3E%0D    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E%0D    %3Cdefs%3E%0D        %3Cpath d%3D%22M17.1213107%2C10.1456147 L17.1213107%2C8.31603536 C17.1213107%2C5.52246539 14.9572286%2C3.08592898 12.1496998%2C3.00233088 C9.2449975%2C2.91612034 6.86293147%2C5.23248447 6.86293147%2C8.10268603 L6.86293147%2C10.1430023 C6.86293147%2C10.46172 6.60730365%2C10.6933564 6.2903952%2C10.7360263 C5.56203102%2C10.8335574 5%2C11.4544475 5%2C12.2068304 L5%2C19.5161337 C5%2C20.3355692 5.66795898%2C21 6.49174587%2C21 L17.5082541%2C21 C18.332041%2C21 19%2C20.3355692 19%2C19.5161337 L19%2C12.2068304 C19%2C11.4588016 18.416083%2C10.8405239 17.6877189%2C10.7368971 C17.3734367%2C10.6924856 17.1213107%2C10.46172 17.1213107%2C10.1456147 Z M9.32466233%2C8.05043722 C9.32466233%2C6.54480053 10.5905453%2C5.33436965 12.1208104%2C5.4144845 C13.5565283%2C5.48850366 14.6324412%2C6.77034125 14.6324412%2C8.19934634 L14.6324412%2C10.0759496 C14.6324412%2C10.4329832 14.3409205%2C10.7220933 13.9828664%2C10.7220933 L9.97423712%2C10.7220933 C9.61530765%2C10.7220933 9.32466233%2C10.4329832 9.32466233%2C10.0759496 L9.32466233%2C8.05043722 L9.32466233%2C8.05043722 Z%22 id%3D%22path-1%22%3E%3C%2Fpath%3E%0D    %3C%2Fdefs%3E%0D    %3Cg id%3D%22Icons%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%0D        %3Cg id%3D%22Icon%2FLock%22 transform%3D%22translate(-5.000000%2C -3.000000)%22%3E%0D            %3Cmask id%3D%22mask-2%22 fill%3D%22white%22%3E%0D                %3Cuse xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D            %3C%2Fmask%3E%0D            %3Cuse id%3D%22lockedalt%22 fill%3D%22%23FF0439%22 xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0D        %3C%2Fg%3E%0D    %3C%2Fg%3E%0D%3C%2Fsvg%3E\") no-repeat center; }\n"

/***/ }),

/***/ "./src/app/screens/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/screens/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authGuard, router, rootService) {
        this.fb = fb;
        this.authGuard = authGuard;
        this.router = router;
        this.rootService = rootService;
        this.showAddAlertModal = false;
        this.submitted = false;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            studio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ["a@b.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var formValue = this.loginForm.value;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.rootService.setState("login", {
            studio: formValue.studio
        });
        this.router.navigate(["main"]);
        // this.authGuard
        //   .authenticate(formValue.username, formValue.password)
        //   .subscribe(
        //     response => {
        //       if (response["message"]) {
        //         this.showAddAlertModal = true;
        //       } else {
        //         sessionStorage.setItem("token", response.toString());
        //         sessionStorage.setItem("studio", formValue.studio);
        //         sessionStorage.setItem("username", formValue.username);
        //         this.router.navigate(["main"]);
        //       }
        //     },
        //     error => {
        //       this.showAddAlertModal = true;
        //     }
        //   );
    };
    LoginComponent.prototype.onOkay = function () {
        this.showAddAlertModal = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/screens/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/screens/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/screens/steps/step-1/step-1.component.html":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-1/step-1.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-page flow-step-1\">\n  <div class=\"topbar border-bottom d-flex align-items-center\">\n    <span class=\"arrow pointer\" (click)=\"goBack()\"> </span>\n    <div class=\"level-numer\">1</div>\n    <div class=\"\">\n      <h3 class=\"mb-0\">Phone Interview</h3>\n      <div class=\"txt-des\">Goal: Set a time for client to train</div>\n    </div>\n    <a href=\"#/main/client-detail/Sam%20Sample\" class=\"ml-auto\">Save & exit</a>\n  </div>\n  <div class=\"step-container py-5 px-4\">\n    <div class=\"txt-blue text-uppercase step-title pb-4\">Start call</div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Polite and enthusiastic greeting</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            Welcome to F45 {{ studioName }}, this is {{ supportName }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Deflect the price question</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            Sure I can help you with that, can I quickly grab your name and number in case we get cut off please?\n          </div>\n        </div>\n      </div>\n      <div class=\"create-user user-answer my-3\">\n        <div class=\"txt-gray\">Enter client details</div>\n        <app-add-user-form #newUserFormOne></app-add-user-form>\n        <div class=\"form-group\">\n          <button type=\"button\" (click)=\"getFormData(newUserFormOne)\" class=\"btn btn-red btn-large px-5\">Send</button>\n        </div>\n      </div>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.howFamiliar.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.howFamiliar.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.howFamiliar.answer}\">\n            <div (click)=\"selectAnswer('howFamiliar', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.howDidYou.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.howDidYou.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.howDidYou.answer}\">\n            <div (click)=\"selectAnswer('howDidYou', aw)\">{{aw}}</div>\n          </li>\n          <li class=\"option-item other-item my-3\">\n            <div class=\"txt-gray\">Other</div>\n            <input type=\"text\" class=\"p-4\" name=\"other\" value=\"\" />\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Brief qualification</h3>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.doYouLive.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.doYouLive.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.doYouLive.answer}\">\n            <div (click)=\"selectAnswer('doYouLive', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.whatAreYou.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.whatAreYou.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.whatAreYou.answer}\">\n            <div (click)=\"selectAnswer('whatAreYou', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.whatTypeOf.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.whatTypeOf.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.whatTypeOf.answer}\">\n            <div (click)=\"selectAnswer('whatTypeOf', aw)\">{{aw}}</div>\n          </li>\n          <li class=\"option-item other-item my-3\">\n            <div class=\"txt-gray\">Other</div>\n            <input type=\"text\" class=\"p-4\" name=\"other\" value=\"\" />\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.isYourCurrent.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.isYourCurrent.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.isYourCurrent.answer}\">\n            <div (click)=\"selectAnswer('isYourCurrent', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Pre-frame the lifestyle fit</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.whenAreLooking.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <div class=\"date-time\">\n          <input class=\"datetime p-4\" [matDatepicker]=\"picker\" (dateChange)=\"onDateChange('change', $event)\" placeholder=\"Choose a date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </div>\n      </div>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.doYouPrefer.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.doYouPrefer.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.doYouPrefer.answer}\">\n            <div (click)=\"selectAnswer('doYouPrefer', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Narrow down choice</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.preferMorning.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.preferMorning.answer}\">\n            <div (click)=\"selectAnswer('preferMorning', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Narrow down choice</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.preferTime.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.preferTime.answer}\">\n            <div (click)=\"selectAnswer('preferTime', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Book them into their preferred class</h3>\n      <button type=\"button\" class=\"btn btn-red btn-large px-5 btn-radius\">Open Booking</button>\n    </div>\n\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Do you know where our studio is?</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            Will you be walking or driving to the studio?\n          </div>\n        </div>\n      </div>\n      <div class=\"question-explain p-4 yellow\">\n        Explain parking options if required\n      </div>\n    </div>\n\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Referral opportunity</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.wouldYouLike.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"question-explain p-4  yellow\">\n        <p class=\"m-0\">Explain how this is a great model to train with a friecand, and that better results are achieved with the support from a friend.</p>\n        <p class=\"m-0\">Get name and number of referral and call them when they have been spoken to by the referrer.</p>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.wouldYouLike.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.wouldYouLike.answer}\">\n            <div (click)=\"selectAnswer('wouldYouLike', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"create-user user-answer my-3\">\n        <div class=\"txt-gray\">Enter client details</div>\n        <app-add-user-form #newUserFormTwo></app-add-user-form>\n        <div class=\"form-group\">\n          <button type=\"button\" (click)=\"getFormData(newUserFormTwo)\" class=\"btn btn-red btn-large px-5\">Send</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Wrap-up</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            If you could come in 15 minutes before the class, we can get your pre-exercise history, give you a quick explanation of your class, and introduce you to the staff.\n          </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            I look forward to meeting you at: {{ bookingDate | date:'d/M/yy' }}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <a href=\"#/main/step-2\" class=\"txt-blue text-uppercase step-finish pt-4 d-inline-block\">Finish call</a>\n  </div>"

/***/ }),

/***/ "./src/app/screens/steps/step-1/step-1.component.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-1/step-1.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/screens/steps/step-1/step-1.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/steps/step-1/step-1.component.ts ***!
  \**********************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Step1Component = /** @class */ (function () {
    function Step1Component(rootService) {
        this.rootService = rootService;
        this.studioName = "StUdIo";
        this.supportName = "Siri";
        this.countryCode = {};
        this.bookingDate = Date.now();
        this.survey = {
            howFamiliar: {
                question: "How familiar are you with F45?",
                options: [
                    "Knows nothing",
                    "Knows a little",
                    "Done an F45 trial",
                    "Been an F45 member"
                ],
                answer: ""
            },
            howDidYou: {
                question: "How did you hear about us?",
                options: [
                    "Social media",
                    "Another F45 member",
                    "Internet search",
                    "Local business / flyer",
                    "F45 Event - Playoffs, Track"
                ],
                answer: ""
            },
            doYouLive: {
                question: "Do you live or work in the area?",
                options: ["Yes", "No"],
                answer: ""
            },
            whatAreYou: {
                question: " What are you currently doing for regular exercise?",
                options: [
                    "Gym",
                    "Personal Training",
                    "Running / triathlon",
                    "Swim",
                    "Sport - team or individual",
                    "Yoga / pilates",
                    "Spin",
                    "Boxing",
                    "Boutique fitness"
                ],
                answer: ""
            },
            whatTypeOf: {
                question: "What type of results are you looking to achieve?",
                options: [
                    "Fat loss",
                    "Gain strength / muscle",
                    "Increase mussle definition",
                    "Increase fitness level",
                    "Increase quality of life",
                    "Improve self esteem"
                ],
                answer: ""
            },
            whenAreLooking: {
                question: "When are looking for get stated?",
                answer: ""
            },
            isYourCurrent: {
                question: "Is your current regime achieving those results?",
                options: ["Yes", "No"],
                answer: ""
            },
            doYouPrefer: {
                question: "Do you prefer to train in the morning or evening?",
                options: ["Morning", "Evening"],
                answer: ""
            },
            preferMorning: {
                question: "Do you prefer to train in the morning or evening?",
                options: ["Early morning", "Mid-morning"],
                answer: ""
            },
            preferTime: {
                question: "Do you prefer to train in the morning or evening?",
                options: ["6am", "6:45am"],
                answer: ""
            },
            wouldYouLike: {
                question: "Would you like to bring a friend along to train with you?",
                options: ["Yes", "No"],
                answer: ""
            }
        };
    }
    Step1Component.prototype.ngOnInit = function () {
        var loginState = this.rootService.getState("login", null);
        this.studioName = loginState.studio;
        console.log("loginState", loginState);
    };
    Step1Component.prototype.goBack = function () {
        window.history.back();
    };
    Step1Component.prototype.selectAnswer = function (item, answer) {
        this.survey[item]["answer"] = answer;
        console.log("this.survey", this.survey[item]);
    };
    Step1Component.prototype.onDateChange = function (eventType, event) {
        // add anwser date;
        this.survey.whenAreLooking.answer = event.value;
    };
    Step1Component.prototype.getFormData = function (newUserForm) {
        console.log(newUserForm);
        newUserForm.getData();
    };
    Step1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step-1",
            template: __webpack_require__(/*! ./step-1.component.html */ "./src/app/screens/steps/step-1/step-1.component.html"),
            styles: [__webpack_require__(/*! ./step-1.component.scss */ "./src/app/screens/steps/step-1/step-1.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], Step1Component);
    return Step1Component;
}());



/***/ }),

/***/ "./src/app/screens/steps/step-2/step-2.component.html":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-2/step-2.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-page flow-step-2\">\n  <div class=\"topbar border-bottom d-flex align-items-center\">\n    <span class=\"arrow pointer\" (click)=\"goBack()\"> </span>\n    <div class=\"level-numer\">2</div>\n    <div class=\"\">\n      <h3 class=\"mb-0\">Pre 1st Workout</h3>\n      <div class=\"txt-des\">Goal: Complete exercise and medical considerations</div>\n    </div>\n    <a href=\"#/main/client-detail/Sam%20Sample\" class=\"ml-auto\">Save & exit</a>\n  </div>\n  <div class=\"step-container py-5 px-4\">\n    <div class=\"txt-blue text-uppercase step-title pb-4\">PRE WORKOUT</div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Complete exercise considerations</h3>\n      <div class=\"question-explain p-4  yellow\">\n        <p class=\"\">Before the 1st workout, complete as many of the questions with the client as you can.</p>\n        <p class=\"m-0\">If time is short, you can always save and complete the questions post workout.</p>\n      </div>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                {{ survey.howFamiliar.question }}\n            </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.howFamiliar.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.howFamiliar.answer}\">\n            <div (click)=\"selectAnswer('howFamiliar', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"Generic placeholder image\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                {{ survey.howDidYou.question }}\n            </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.howDidYou.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.howDidYou.answer}\">\n            <div (click)=\"selectAnswer('howDidYou', aw)\">{{aw}}</div>\n          </li>\n          <li class=\"option-item other-item my-3\">\n            <div class=\"txt-gray\">Other</div>\n            <input type=\"text\" class=\"p-4\" name=\"other\" value=\"\" placeholder=\"Sample text for other\" />\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"question-explain p-4 text-uppercase purple mb-4\">\n        DESIGN NOTE: LAYOUT REPEATS IN CONVERSATIONAL QUESTION / ANSWER FORMAT.\n      </div>\n    </div>\n\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Complete medical considerations</h3>\n\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n              <p>It is our professional duty of care to ask all participants, no matter what age, to complete the following questions.</p>\n              <p>Simply answer the following yes or no questions.</p>\n            </div>\n        </div>\n      </div>\n      <div class=\"question-explain p-4 text-uppercase yellow mb-4\">\n        Hand the tablet to the client for them to complete themselves. Stay with them in case they have any questions or need help.\n      </div>\n      <button class=\"btn btn-red btn-large px-5 btn-radius\">Start</button>\n      <div class=\"question-explain p-4 text-uppercase purple mb-4\">\n        DESIGN NOTE: LAYOUT REPEATS IN CONVERSATIONAL QUESTION / ANSWER FORMAT.\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Wrap-up</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                If you could come in 15 minutes before the class, we can get your pre-exercise history, give you a quick explanation of your class, and introduce you to the staff.\n            </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                I look forward to meeting you at: {{ bookingDate | date:'d/M/yy' }}\n            </div>\n        </div>\n      </div>\n    </div>\n    <a href=\"#/main/step-3\" class=\"txt-blue text-uppercase step-finish pt-4 d-inline-block\">PRE WORKOUT COMPLETE</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/steps/step-2/step-2.component.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-2/step-2.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/screens/steps/step-2/step-2.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/steps/step-2/step-2.component.ts ***!
  \**********************************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/global.service */ "./src/app/services/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Step2Component = /** @class */ (function () {
    function Step2Component(rootService) {
        this.rootService = rootService;
        this.bookingDate = Date.now();
        this.survey = {
            howFamiliar: {
                question: "How familiar are you with F45 Training?",
                options: ["Option A", "Option B", "Option C", "Option D"],
                answer: ""
            },
            howDidYou: {
                question: "How did you find out about us?",
                options: ["Option A", "Option B", "Option C", "Option D"],
                answer: ""
            }
        };
    }
    Step2Component.prototype.ngOnInit = function () {
        console.log(this.survey);
    };
    Step2Component.prototype.goBack = function () {
        window.history.back();
    };
    Step2Component.prototype.selectAnswer = function (item, answer) {
        this.survey[item]["answer"] = answer;
        console.log(this.survey[item]);
    };
    Step2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step-2",
            template: __webpack_require__(/*! ./step-2.component.html */ "./src/app/screens/steps/step-2/step-2.component.html"),
            styles: [__webpack_require__(/*! ./step-2.component.scss */ "./src/app/screens/steps/step-2/step-2.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], Step2Component);
    return Step2Component;
}());



/***/ }),

/***/ "./src/app/screens/steps/step-3/step-3.component.html":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-3/step-3.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-page flow-step-3\">\n  <div class=\"topbar border-bottom d-flex align-items-center\">\n    <span class=\"arrow pointer\" (click)=\"goBack()\"> </span>\n    <div class=\"level-numer\">3</div>\n    <div class=\"\">\n      <h3 class=\"mb-0\">Post 1st Workout</h3>\n      <div class=\"txt-des\">Goal: Set a time for client to come back and train again</div>\n    </div>\n    <a href=\"#/main/client-detail/Sam%20Sample\" class=\"ml-auto\">Save & exit</a>\n  </div>\n  <div class=\"step-container py-5 px-4\">\n    <div class=\"txt-blue text-uppercase step-title pb-4\">POST WORKOUT</div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Complete pre-ex history if not done before the class started</h3>\n      <button type=\"button\" class=\"btn btn-red btn-large px-5 mt-4 btn-radius\">OPEN PRE-EX HISTORY</button>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Workout rating</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            How did you feel you went?\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer full-width my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <app-range-slider (change)=\"onRangeChange($event)\"></app-range-slider>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.didYouEnjoy.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.didYouEnjoy.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.didYouEnjoy.answer}\">\n            <div (click)=\"selectAnswer('didYouEnjoy', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">2nd booking</h3>\n      <div class=\"question-explain p-4 yellow mb-4\">\n        Customer will either tell you their next booking, or book customer in at the time they commit to.\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            When will we see you next?\n          </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            {{ survey.areYouHappy.question }}\n          </div>\n        </div>\n      </div>\n      <div class=\"user-answer my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <ul class=\"option-list p-0\">\n          <li *ngFor=\"let aw of survey.areYouHappy.options\" class=\"option-item my-3 p-4\" [ngClass]=\"{'selected-item': aw == survey.areYouHappy.answer}\">\n            <div (click)=\"selectAnswer('areYouHappy', aw)\">{{aw}}</div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"question-explain p-4 yellow mb-4\">\n        Explain that a resistance workout has a slower tempo that the customer can control, or that the fitness classes won’t put the same muscular strain on their body.\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            Even if you feel a little stiff, please come along as the movement will help loosen you up. Our schedule is created so you can train every day, as what you did today won’t hurt what you’ll be doing tomorrow.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Book them into their preferred class</h3>\n      <button class=\"btn btn-red btn-large px-5 mt-4 btn-radius\" type=\"button\">Open</button>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Wrap-up</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n          <div class=\"py-2 px-4 btn-blue btn-radius\">\n            I look forward to meeting you at: {{ bookingDate | date:'d/M/yy' }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <a href=\"#/main/step-4\" class=\"txt-blue text-uppercase step-finish pt-4 d-inline-block\">PRE WORKOUT COMPLETE</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/screens/steps/step-3/step-3.component.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-3/step-3.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/screens/steps/step-3/step-3.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/steps/step-3/step-3.component.ts ***!
  \**********************************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
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

var Step3Component = /** @class */ (function () {
    function Step3Component() {
        this.bookingDate = Date.now();
        this.survey = {
            didYouEnjoy: {
                question: "Did you enjoy it?",
                options: ["Yes", "No"],
                answer: ""
            },
            areYouHappy: {
                question: "Are you happy to train a little stiff?",
                options: ["Yes", "No"],
                answer: ""
            }
        };
    }
    Step3Component.prototype.ngOnInit = function () { };
    Step3Component.prototype.goBack = function () {
        window.history.back();
    };
    Step3Component.prototype.onRangeChange = function (value) {
        console.log("onRangeChange", value);
    };
    Step3Component.prototype.selectAnswer = function (item, answer) {
        this.survey[item]["answer"] = answer;
        console.log(this.survey[item]);
    };
    Step3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step-3",
            template: __webpack_require__(/*! ./step-3.component.html */ "./src/app/screens/steps/step-3/step-3.component.html"),
            styles: [__webpack_require__(/*! ./step-3.component.scss */ "./src/app/screens/steps/step-3/step-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step3Component);
    return Step3Component;
}());



/***/ }),

/***/ "./src/app/screens/steps/step-4/step-4.component.html":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-4/step-4.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-page flow-step-4\">\n  <div class=\"topbar border-bottom d-flex align-items-center\">\n    <span class=\"arrow pointer\" (click)=\"goBack()\"> </span>\n    <div class=\"level-numer\">4</div>\n    <div class=\"\">\n      <h3 class=\"mb-0\">Pre 2nd Workout</h3>\n      <div class=\"txt-des\">Goal: Sample text to be confirmed</div>\n    </div>\n    <a href=\"#/main/client-detail/Sam%20Sample\" class=\"ml-auto\">Save & exit</a>\n  </div>\n  <div class=\"step-container py-5 px-4\">\n    <div class=\"txt-blue text-uppercase step-title pb-4\">PRE WORKOUT</div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Welcome and inform</h3>\n      <div class=\"question-explain p-4 yellow mb-4\">\n        Before their 2nd workout starts, welcome the client and explain today's workout.\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How are you feeling after your first session?\n            </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                Today's class is -weight/cardio/hybrid-... etc\n            </div>\n        </div>\n      </div>\n      <div class=\"question-explain p-4 purple text-uppercase mb-4\">\n        DESIGN NOTE: CONTENT IS TBC NEED REFINING IN GOOGLE DOCO\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Workout rating</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How are you feeling after your first session?\n            </div>\n        </div>\n      </div>\n    </div>\n    <a href=\"#/main/step-5\" class=\"txt-blue text-uppercase step-finish pt-4 d-inline-block\">PRE WORKOUT COMPLETE</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/steps/step-4/step-4.component.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-4/step-4.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/screens/steps/step-4/step-4.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/steps/step-4/step-4.component.ts ***!
  \**********************************************************/
/*! exports provided: Step4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step4Component", function() { return Step4Component; });
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

var Step4Component = /** @class */ (function () {
    function Step4Component() {
    }
    Step4Component.prototype.ngOnInit = function () { };
    Step4Component.prototype.goBack = function () {
        window.history.back();
    };
    Step4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step-4",
            template: __webpack_require__(/*! ./step-4.component.html */ "./src/app/screens/steps/step-4/step-4.component.html"),
            styles: [__webpack_require__(/*! ./step-4.component.scss */ "./src/app/screens/steps/step-4/step-4.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step4Component);
    return Step4Component;
}());



/***/ }),

/***/ "./src/app/screens/steps/step-5/step-5.component.html":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-5/step-5.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-page flow-step-5\">\n  <div class=\"topbar border-bottom d-flex align-items-center\">\n    <span class=\"arrow pointer\" (click)=\"goBack()\"> </span>\n    <div class=\"level-numer\">4</div>\n    <div class=\"\">\n      <h3 class=\"mb-0\">Post 2nd Workout</h3>\n      <div class=\"txt-des\">Goal: Set a time for client to come back and train again</div>\n    </div>\n    <a href=\"#/main/client-detail/Sam%20Sample\" class=\"ml-auto\">Save & exit</a>\n  </div>\n  <div class=\"step-container py-5 px-4\">\n    <div class=\"txt-blue text-uppercase step-title pb-4\">POST WORKOUT</div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Trial close questions</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How did you enjoy your session?\n            </div>\n        </div>\n      </div>\n      <div class=\"user-answer full-width my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <app-range-slider (change)=\"onRangeChange($event)\"></app-range-slider>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How would you rate the music?\n            </div>\n        </div>\n      </div>\n      <div class=\"user-answer full-width my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <app-range-slider (change)=\"onRangeChange($event)\"></app-range-slider>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How do you feel about what we have discussed so far?\n            </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                What do you think about the solution I’ve shared with you?\n            </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How does what we’ve talked about sound to you?\n            </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                Based on what you’ve heard so far, do you have any questions?\n            </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                If you had your way, what changes would you make to the proposal?\n            </div>\n        </div>\n      </div>\n      <div class=\"question-explain p-4 purple text-uppercase mb-4\">\n        DESIGN NOTE: CONTENT IS TBC NEED REFINING IN GOOGLE DOCO\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Book them into their preferred class</h3>\n      <button type=\"button\" class=\"btn btn-red btn-large px-5 mt-4 btn-radius\">OPEN</button>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Wrap-up</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                I look forward to seeing you again: {{ bookingDate | date:'d/M/yy' }}\n            </div>\n        </div>\n      </div>\n    </div>\n    <a href=\"#/main/step-6\" class=\"txt-blue text-uppercase step-finish pt-4 d-inline-block\">POST WORKOUT COMPLETE</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/steps/step-5/step-5.component.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-5/step-5.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/screens/steps/step-5/step-5.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/steps/step-5/step-5.component.ts ***!
  \**********************************************************/
/*! exports provided: Step5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step5Component", function() { return Step5Component; });
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

var Step5Component = /** @class */ (function () {
    function Step5Component() {
        this.bookingDate = Date.now();
    }
    Step5Component.prototype.ngOnInit = function () { };
    Step5Component.prototype.goBack = function () {
        window.history.back();
    };
    Step5Component.prototype.onRangeChange = function (value) {
        console.log("onRangeChange", value);
    };
    Step5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step-5",
            template: __webpack_require__(/*! ./step-5.component.html */ "./src/app/screens/steps/step-5/step-5.component.html"),
            styles: [__webpack_require__(/*! ./step-5.component.scss */ "./src/app/screens/steps/step-5/step-5.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step5Component);
    return Step5Component;
}());



/***/ }),

/***/ "./src/app/screens/steps/step-6/step-6.component.html":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-6/step-6.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-page flow-step-6\">\n  <div class=\"topbar border-bottom d-flex align-items-center\">\n    <span class=\"arrow pointer\" (click)=\"goBack()\"> </span>\n    <div class=\"level-numer\">6</div>\n    <div class=\"\">\n      <h3 class=\"mb-0\">Pre 3rd Workout</h3>\n      <div class=\"txt-des\">Goal: Sample text to be confirmed</div>\n    </div>\n    <a href=\"#/main/client-detail/Sam%20Sample\" class=\"ml-auto\">Save & exit</a>\n  </div>\n  <div class=\"step-container py-5 px-4\">\n    <div class=\"txt-blue text-uppercase step-title pb-4\">PRE WORKOUT</div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Welcome and gauge trial progress </h3>\n      <div class=\"question-explain p-4 yellow mb-4\">\n        Instruction text to be confirmed - sample for placement only.\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How are you enjoying your trial so far?\n            </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How do you feel about the solutions we’ve discussed so far?\n            </div>\n        </div>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                Based on what you’ve done, can you see yourself doing 4+ sessions per week?\n            </div>\n        </div>\n      </div>\n      <div class=\"question-explain p-4 purple text-uppercase mb-4\">\n        DESIGN NOTE: CONTENT IS TBC NEED REFINING IN GOOGLE DOCO\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Wrap-up</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                Lets get todays class started!\n            </div>\n        </div>\n      </div>\n    </div>\n    <a href=\"#/main/step-7\" class=\"txt-blue text-uppercase step-finish pt-4 d-inline-block\">PRE WORKOUT COMPLETE</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/steps/step-6/step-6.component.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-6/step-6.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/screens/steps/step-6/step-6.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/steps/step-6/step-6.component.ts ***!
  \**********************************************************/
/*! exports provided: Step6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step6Component", function() { return Step6Component; });
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

var Step6Component = /** @class */ (function () {
    function Step6Component() {
    }
    Step6Component.prototype.ngOnInit = function () { };
    Step6Component.prototype.goBack = function () {
        window.history.back();
    };
    Step6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step-6",
            template: __webpack_require__(/*! ./step-6.component.html */ "./src/app/screens/steps/step-6/step-6.component.html"),
            styles: [__webpack_require__(/*! ./step-6.component.scss */ "./src/app/screens/steps/step-6/step-6.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step6Component);
    return Step6Component;
}());



/***/ }),

/***/ "./src/app/screens/steps/step-7/step-7.component.html":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-7/step-7.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steps-page flow-step-7\">\n  <div class=\"topbar border-bottom d-flex align-items-center\">\n    <span class=\"arrow pointer\" (click)=\"goBack()\"> </span>\n    <div class=\"level-numer\">7</div>\n    <div class=\"\">\n      <h3 class=\"mb-0\">Sales close process</h3>\n      <div class=\"txt-des\">Goal: Sample text to be confirmed</div>\n    </div>\n    <a href=\"#/main/client-detail/Sam%20Sample\" class=\"ml-auto\">Save & exit</a>\n  </div>\n  <div class=\"step-container py-5 px-4\">\n    <div class=\"txt-blue text-uppercase step-title pb-4\">SIGN UP MEMBER</div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Title goes here</h3>\n      <div class=\"question-explain p-4 yellow mb-4\">\n        Instruction text to be confirmed - sample for placement only.\n      </div>\n      <div class=\"question-explain p-4 purple text-uppercase mb-4\">\n        DESIGN NOTE: CONTENT IS TBC NEED REFINING IN GOOGLE DOCO\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                How are you enjoying your trial so far?\n            </div>\n        </div>\n      </div>\n      <div class=\"user-answer full-width my-3\">\n        <div class=\"txt-gray\">Client response</div>\n        <app-range-slider (change)=\"onRangeChange($event)\"></app-range-slider>\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                This is sample text for a question?\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Membership and payment details</h3>\n      <div class=\"question-explain p-4 yellow mb-4\">\n        Take the customer to your laptop or iPad and set up their payment details. Have the e-sign membership option ticked in Mindbody so the customer can do this at home.\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Welcome pack</h3>\n      <div class=\"question-explain p-4 yellow mb-4\">\n        Have a Welcome Pack visible and ready to give to them to take with them.\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                Welcome to the team!\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Next booking</h3>\n      <div class=\"question-explain p-4 yellow mb-4\">\n        Customer will either tell you their next booking, or book customer in at the time they commit to.\n      </div>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                When will we see you next?\n            </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Book them into their preferred class</h3>\n      <button type=\"button\" class=\"btn btn-red btn-large px-5 mt-4 btn-radius\">OPEN</button>\n    </div>\n    <div class=\"group py-4\">\n      <h3 class=\"group-title\">Wrap-up</h3>\n      <div class=\"media question-title my-4\">\n        <div class=\"mr-3 avt rounded-circle\">\n          <img src=\"../../assets/images/avatar-de.svg\" alt=\"\">\n        </div>\n        <div class=\"media-body\">\n            <div class=\"py-2 px-4 btn-blue btn-radius\">\n                I look forward to seeing you again: {{ bookingDate | date:'d/M/yy' }}\n            </div>\n        </div>\n      </div>\n    </div>\n    <a href=\"#/main/dashboard\" class=\"txt-blue text-uppercase step-finish pt-4 d-inline-block\">SIGN UP COMPLETE</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/screens/steps/step-7/step-7.component.scss":
/*!************************************************************!*\
  !*** ./src/app/screens/steps/step-7/step-7.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/screens/steps/step-7/step-7.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/screens/steps/step-7/step-7.component.ts ***!
  \**********************************************************/
/*! exports provided: Step7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step7Component", function() { return Step7Component; });
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

var Step7Component = /** @class */ (function () {
    function Step7Component() {
        this.bookingDate = "";
    }
    Step7Component.prototype.ngOnInit = function () { };
    Step7Component.prototype.goBack = function () {
        window.history.back();
    };
    Step7Component.prototype.onRangeChange = function (value) {
        console.log("onRangeChange", value);
    };
    Step7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-step-7",
            template: __webpack_require__(/*! ./step-7.component.html */ "./src/app/screens/steps/step-7/step-7.component.html"),
            styles: [__webpack_require__(/*! ./step-7.component.scss */ "./src/app/screens/steps/step-7/step-7.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Step7Component);
    return Step7Component;
}());



/***/ }),

/***/ "./src/app/screens/welcome/welcome.component.html":
/*!********************************************************!*\
  !*** ./src/app/screens/welcome/welcome.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-page\">\r\n  <div class=\"logo\">\r\n    <img src=\"../assets/images/logo.svg\" alt=\"\">\r\n  </div>\r\n  <button class=\"btn btn-red btn-radius btn-large\" (click)=\"gotoLogin()\">WELCOME</button>\r\n</div>"

/***/ }),

/***/ "./src/app/screens/welcome/welcome.component.scss":
/*!********************************************************!*\
  !*** ./src/app/screens/welcome/welcome.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-page {\n  background-color: #2b2c5c;\n  height: 100vh;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n  place-content: center;\n  align-items: center; }\n  .welcome-page .logo {\n    padding-top: 0; }\n  .welcome-page .btn-red {\n    margin: 3rem; }\n"

/***/ }),

/***/ "./src/app/screens/welcome/welcome.component.ts":
/*!******************************************************!*\
  !*** ./src/app/screens/welcome/welcome.component.ts ***!
  \******************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
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


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(router) {
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent.prototype.gotoLogin = function () {
        this.router.navigate(["login"]);
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-welcome",
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/screens/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/screens/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, http) {
        this.router = router;
        this.http = http;
        this.apiServer = "http://localhost:5000/authenticate";
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var token = sessionStorage.getItem("token");
        // check user login at here;
        // if (!token) {
        //   this.router.navigate(["login"]);
        //   return false;
        // }
        return true;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return true;
    };
    AuthGuard.prototype.authenticate = function (username, password) {
        // return this.http.post(this.apiServer, {
        //   username: username,
        //   password: password
        // });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// deep copy object;
function copy(source) {
    return {
        to: function (target) {
            if (!target || target.constructor != Object) {
                target = {};
            }
            if (source != null && source.constructor == Object) {
                for (var i in source) {
                    if (source[i] != null) {
                        if (source[i].constructor == Object) {
                            copy(source[i]).to(target[i]);
                        }
                        else if (source[i].constructor == Array) {
                            target[i] = [].concat(source[i]);
                        }
                        else {
                            target[i] = source[i];
                        }
                    }
                    else {
                        target[i] = null;
                    }
                }
            }
            return target;
        }
    };
}
// store the state of application;
var miniState = {
    dashboard: {},
    login: {},
    "step-1": {},
    "step-2": {},
    "step-3": {},
    "step-4": {},
    "step-5": {},
    "step-6": {},
    "step-7": {}
};
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.appState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("open");
        this.rootState = this.appState.asObservable();
    }
    GlobalService.prototype.getState = function (pageName, stateName) {
        var microState = copy(miniState[pageName] || {}).to({});
        if (!stateName) {
            return microState;
        }
        else {
            return microState[stateName];
        }
    };
    GlobalService.prototype.setState = function (pageName, updateData) {
        // init page state;
        if (miniState[pageName] == null) {
            miniState[pageName] = {};
        }
        copy(updateData).to(miniState[pageName]);
        this.appState.next(pageName);
    };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
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

module.exports = __webpack_require__(/*! /Working/Angular/sales-web-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map