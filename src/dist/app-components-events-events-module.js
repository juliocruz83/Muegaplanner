(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-events-events-module"],{

/***/ "./src/app/components/events/daily-view/daily-view.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/events/daily-view/daily-view.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    border: 0;\n    border-radius: 8px;\n    margin-bottom: 1px;\n}\n\n.card-overlay-action {\n    position:absolute;\n    top:20px;\n    right:0;\n}\n\nul {\n    list-style-type: none;\n    margin: 0; padding: 0;\n}\n\nli {\n    padding: 0;\n}\n\na {\n    color: #ffffff;\n}"

/***/ }),

/***/ "./src/app/components/events/daily-view/daily-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/events/daily-view/daily-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{selectedDate | date:'fullDate'}}</h2>\n<div style=\"overflow-y: scroll; max-height: 70vh;\">\n<div *ngFor=\"let event of events$ | async as events;\">\n  <div class=\"card\" [ngStyle]=\"{'background-color': getColor(event.calendar)}\">\n    <div class=\"card-body\">\n      <ul>\n        <li>{{event.name}}</li>\n        <li>{{event.location}}</li>\n        <li>{{event.startDateTime | date:'shortTime'}}</li>\n      </ul>\n    </div>\n    <div class=\"card-overlay-action\">\n        <a class=\"btn-floating btn-action ml-auto mr-4 mdb-color lighten-3\" routerLink=\"/edit-event/{{event._id}}\">\n          <i class=\"material-icons\">edit</i>\n        </a>\n    </div>\n  </div>\n</div>\n</div>\n<div class=\"button-row\" style=\"margin-top: 18px; text-align: right;\">\n  <a mat-fab color=\"primary\" style=\"text-decoration: none;\" routerLink=\"/edit-event\">Add</a>\n</div>"

/***/ }),

/***/ "./src/app/components/events/daily-view/daily-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/events/daily-view/daily-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: DailyViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyViewComponent", function() { return DailyViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _muega_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @muega-services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _muega_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @muega-services/calendar.service */ "./src/app/services/calendar.service.ts");
/* harmony import */ var _muega_components_calendar_select_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @muega-components/calendar/select-date.service */ "./src/app/components/calendar/select-date.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DailyViewComponent = /** @class */ (function () {
    function DailyViewComponent(route, eventService, calendarService, ref, selectDateService) {
        var _this = this;
        this.route = route;
        this.eventService = eventService;
        this.calendarService = calendarService;
        this.ref = ref;
        this.calendars = new Map();
        this.selectedDate = new Date();
        console.log('daily-view constructor', this.selectedDate);
        selectDateService.date$.subscribe(function (n) {
            _this.selectedDate = n;
            console.log('selectedDate', _this.selectedDate);
            _this.loadEvents();
            _this.ref.markForCheck();
        });
    }
    DailyViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calendarService.getCalendars()
            .subscribe(function (calendars) {
            calendars.forEach(function (element) {
                _this.calendars.set(element.name, element.color);
            });
            console.log('calendarMap:', _this.calendars);
            _this.loadEvents();
            _this.ref.markForCheck();
        });
    };
    DailyViewComponent.prototype.loadEvents = function () {
        this.events$ = this.eventService.getEventsByDate(this.selectedDate);
    };
    DailyViewComponent.prototype.getColor = function (calendarName) {
        return this.calendars.get(calendarName);
    };
    DailyViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-daily-view',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./daily-view.component.html */ "./src/app/components/events/daily-view/daily-view.component.html"),
            styles: [__webpack_require__(/*! ./daily-view.component.css */ "./src/app/components/events/daily-view/daily-view.component.css")],
            providers: [_muega_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _muega_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _muega_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _muega_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _muega_components_calendar_select_date_service__WEBPACK_IMPORTED_MODULE_4__["SelectDateService"]])
    ], DailyViewComponent);
    return DailyViewComponent;
}());



/***/ }),

/***/ "./src/app/components/events/edit/edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/events/edit/edit.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-component {\n    display: flex;\n    flex-direction: column;\n}\n\n.edit-component > * {\n    width: 100%;\n}\n\na {\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/components/events/edit/edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/events/edit/edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ event._id != null ? 'Edit' : 'Add'}} Event</h2>\n<hr/>\n<form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n  <div class=\"edit-component\">\n    <mat-form-field>\n      <input matInput formControlName=\"name\" type=\"text\" placeholder=\"Title\">\n      <mat-error *ngIf=\"name.errors?.required\">required</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Event starts at...</mat-placeholder>\n      <mat-datetimepicker-toggle [for]=\"startDatetimePicker\" matSuffix></mat-datetimepicker-toggle>\n      <mat-datetimepicker #startDatetimePicker type=\"datetime\" startView=\"month\" openOnFocus=\"true\" timeInterval=\"5\"></mat-datetimepicker>\n      <input matInput formControlName=\"startDate\" [matDatetimepicker]=\"startDatetimePicker\" autocomplete=\"false\">\n      <mat-error *ngIf=\"startDate.errors?.required\">required</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-placeholder>Event ends at...</mat-placeholder>\n      <mat-datetimepicker-toggle [for]=\"endDatetimePicker\" matSuffix></mat-datetimepicker-toggle>\n      <mat-datetimepicker #endDatetimePicker type=\"datetime\" openOnFocus=\"true\" timeInterval=\"5\"></mat-datetimepicker>\n      <input matInput formControlName=\"endDate\" [matDatetimepicker]=\"endDatetimePicker\" autocomplete=\"false\">\n      <mat-error *ngIf=\"endDate.errors?.required\">required</mat-error>\n      <mat-error *ngIf=\"form.errors\">{{ form.errors?.dates | json }}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput formControlName=\"location\" placeholder=\"Location\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput formControlName=\"notes\" placeholder=\"Notes\"></textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select formControlName=\"calendar\" placeholder=\"Calendar\">\n        <mat-option *ngFor=\"let calendar of calendars\" [value]=\"calendar.name\">\n          {{calendar.name}}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"calendar.errors?.required\">required</mat-error>\n    </mat-form-field>\n    <div class=\"button-row\">\n      <button type=\"submit\" mat-stroked-button color=\"primary\">Save</button>\n      <button mat-button color=\"primary\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/events/edit/edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/events/edit/edit.component.ts ***!
  \**********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _muega_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @muega-services/calendar.service */ "./src/app/services/calendar.service.ts");
/* harmony import */ var _muega_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @muega-services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _muega_components_calendar_select_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @muega-components/calendar/select-date.service */ "./src/app/components/calendar/select-date.service.ts");
/* harmony import */ var _muega_models_Event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @muega-models/Event */ "./src/app/models/Event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditComponent = /** @class */ (function () {
    function EditComponent(router, route, dateService, eventService, calendarService, ref) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.dateService = dateService;
        this.eventService = eventService;
        this.calendarService = calendarService;
        this.ref = ref;
        this.route.params.subscribe(function (params) { return _this.event = params.id; });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.event != null) {
            this.eventService.getEvent(this.event).subscribe(function (event) {
                _this.event = event;
                _this.ref.markForCheck();
                console.log(_this.event);
                _this.initForm();
            });
        }
        else {
            this.event = new _muega_models_Event__WEBPACK_IMPORTED_MODULE_6__["Event"]();
            this.initForm();
        }
        this.calendarService.getCalendars()
            .subscribe(function (calendars) {
            _this.calendars = calendars;
        });
    };
    EditComponent.prototype.initForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.startDateTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.endDateTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.location),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.notes),
            calendar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.calendar, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }, { validators: this.validateEndDate() });
    };
    EditComponent.prototype.validateEndDate = function () {
        return function (group) {
            if (group.controls['startDate'].value > group.controls['endDate'].value) {
                return {
                    dates: "end date cannot be before start date"
                };
            }
            return {};
        };
    };
    EditComponent.prototype.save = function () {
        console.warn(this.form.value);
        if (this.event._id != null) {
            this.eventService.updateEvent(this.event)
                .subscribe(function (res) {
                console.log('updateEvent: ', res);
            });
        }
        else {
            this.eventService.addEvent(this.event)
                .subscribe(function (res) {
                console.log('addEvent: ', res);
            });
        }
    };
    EditComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    Object.defineProperty(EditComponent.prototype, "name", {
        get: function () {
            return this.form.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "startDate", {
        get: function () {
            return this.form.get("startDate");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "endDate", {
        get: function () {
            return this.form.get("endDate");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "location", {
        get: function () {
            return this.form.get("location");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "notes", {
        get: function () {
            return this.form.get("notes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "calendar", {
        get: function () {
            return this.form.get("calendar");
        },
        enumerable: true,
        configurable: true
    });
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/events/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/events/edit/edit.component.css")],
            providers: [_muega_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"], _muega_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _muega_components_calendar_select_date_service__WEBPACK_IMPORTED_MODULE_5__["SelectDateService"],
            _muega_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _muega_services_calendar_service__WEBPACK_IMPORTED_MODULE_3__["CalendarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], EditComponent);
    return EditComponent;
}());

/*
 * TO-DO:
 * 7/3
 * Investigate how to refactor the getCalendar picklist functionality so we can reuse/how to move one level up?
 * We need to fix a bug on the datetimepicker tag that causes the placeholder to overlap with the date entered if focus is not moved to other input element
 */


/***/ }),

/***/ "./src/app/components/events/event-ctrl/event-ctrl.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/events/event-ctrl/event-ctrl.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/events/event-ctrl/event-ctrl.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/events/event-ctrl/event-ctrl.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/events/event-ctrl/event-ctrl.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/events/event-ctrl/event-ctrl.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventCtrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCtrlComponent", function() { return EventCtrlComponent; });
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

var EventCtrlComponent = /** @class */ (function () {
    function EventCtrlComponent() {
    }
    EventCtrlComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], EventCtrlComponent.prototype, "selectedDate", void 0);
    EventCtrlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-ctrl',
            template: __webpack_require__(/*! ./event-ctrl.component.html */ "./src/app/components/events/event-ctrl/event-ctrl.component.html"),
            styles: [__webpack_require__(/*! ./event-ctrl.component.css */ "./src/app/components/events/event-ctrl/event-ctrl.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventCtrlComponent);
    return EventCtrlComponent;
}());



/***/ }),

/***/ "./src/app/components/events/events-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/events/events-routing.module.ts ***!
  \************************************************************/
/*! exports provided: EventsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function() { return EventsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _muega_components_events_event_ctrl_event_ctrl_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @muega-components/events/event-ctrl/event-ctrl.component */ "./src/app/components/events/event-ctrl/event-ctrl.component.ts");
/* harmony import */ var _muega_components_events_daily_view_daily_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @muega-components/events/daily-view/daily-view.component */ "./src/app/components/events/daily-view/daily-view.component.ts");
/* harmony import */ var _muega_components_events_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @muega-components/events/edit/edit.component */ "./src/app/components/events/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var eventsRoutes = [
    {
        path: "",
        component: _muega_components_events_event_ctrl_event_ctrl_component__WEBPACK_IMPORTED_MODULE_2__["EventCtrlComponent"],
        children: [
            { path: "", component: _muega_components_events_daily_view_daily_view_component__WEBPACK_IMPORTED_MODULE_3__["DailyViewComponent"] },
            { path: 'edit-event', component: _muega_components_events_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
            { path: 'edit-event/:id', component: _muega_components_events_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] }
        ]
    }
];
var EventsRoutingModule = /** @class */ (function () {
    function EventsRoutingModule() {
    }
    EventsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(eventsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EventsRoutingModule);
    return EventsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/events/events.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/events/events.module.ts ***!
  \****************************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _muega_components_events_events_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @muega-components/events/events-routing.module */ "./src/app/components/events/events-routing.module.ts");
/* harmony import */ var _muega_components_events_event_ctrl_event_ctrl_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @muega-components/events/event-ctrl/event-ctrl.component */ "./src/app/components/events/event-ctrl/event-ctrl.component.ts");
/* harmony import */ var _muega_components_events_daily_view_daily_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @muega-components/events/daily-view/daily-view.component */ "./src/app/components/events/daily-view/daily-view.component.ts");
/* harmony import */ var _muega_components_events_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @muega-components/events/edit/edit.component */ "./src/app/components/events/edit/edit.component.ts");
/* harmony import */ var _muega_services_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @muega-services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EventsModule = /** @class */ (function () {
    function EventsModule() {
    }
    EventsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _muega_components_events_events_routing_module__WEBPACK_IMPORTED_MODULE_4__["EventsRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            declarations: [
                _muega_components_events_event_ctrl_event_ctrl_component__WEBPACK_IMPORTED_MODULE_5__["EventCtrlComponent"],
                _muega_components_events_daily_view_daily_view_component__WEBPACK_IMPORTED_MODULE_6__["DailyViewComponent"],
                _muega_components_events_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]
            ],
            providers: [
                _muega_services_event_service__WEBPACK_IMPORTED_MODULE_8__["EventService"]
            ],
            exports: [
                _muega_components_events_event_ctrl_event_ctrl_component__WEBPACK_IMPORTED_MODULE_5__["EventCtrlComponent"]
            ]
        })
    ], EventsModule);
    return EventsModule;
}());



/***/ }),

/***/ "./src/app/models/Event.ts":
/*!*********************************!*\
  !*** ./src/app/models/Event.ts ***!
  \*********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());



/***/ })

}]);
//# sourceMappingURL=app-components-events-events-module.js.map