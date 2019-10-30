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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_realtime_realtime_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/realtime/realtime.component */ "./src/app/pages/realtime/realtime.component.ts");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/history/history.component */ "./src/app/pages/history/history.component.ts");
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/list/list.component */ "./src/app/pages/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "",
        component: _pages_realtime_realtime_component__WEBPACK_IMPORTED_MODULE_2__["RealtimeComponent"]
    },
    {
        path: "history",
        component: _pages_history_history_component__WEBPACK_IMPORTED_MODULE_3__["HistoryComponent"]
    },
    {
        path: "list",
        component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    },
    {
        path: "**",
        component: _pages_realtime_realtime_component__WEBPACK_IMPORTED_MODULE_2__["RealtimeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 p-3 bg-light d-flex justify-content-around\">\n  <div class=\"col-3 text-center position-relative\" (click)=\"isActive = 0\">\n    <a [routerLink]=\"['/']\" class=\"ishover d-inline-block\">\n      <img width=\"36\" src=\"assets/icons/24px.svg\">\n    </a>\n    <span [ngClass]=\"{bottomLine: isActive === 0}\"></span>\n  </div>\n  <div class=\"col-3 text-center\" (click)=\"isActive = 1\">\n    <a [routerLink]=\"['/history']\" class=\"ishover d-inline-block\">\n      <img width=\"36\" src=\"assets/icons/history-solid.svg\">\n    </a>\n    <span [ngClass]=\"{bottomLine: isActive === 1}\"></span>\n  </div>\n  <div class=\"col-3 text-center\" (click)=\"isActive = 2\">\n      <a [routerLink]=\"['/list']\" class=\"ishover d-inline-block\">\n        <img width=\"36\" src=\"assets/icons/list.svg\">\n      </a>\n      <span [ngClass]=\"{bottomLine: isActive === 2}\"></span>\n    </div>\n  <div class=\"col-3 text-center\">\n    <a (click)=\"openSetPort()\" class=\"ishover d-inline-block\">\n      <img width=\"36\" src=\"assets/icons/cog-solid.svg\">\n    </a>\n  </div>\n</div>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n\n<div *ngIf=\"toggleDialog\">\n  <div class=\"dialog\"></div>\n  <div class=\"setting \">\n    <form [formGroup]=\"selectedComPortForm\" (ngSubmit)=\"setPort()\" class=\"d-flex flex-column\">\n      <label>請設定 COM-PORT</label>\n      <select formControlName=\"selected\">\n        <option>請選擇 comport</option>\n        <option *ngFor=\"let list of comPortList\">{{ list }}</option>\n      </select>\n      <button type=\"submit\" class=\"btn btn-primary mt-3\">確定</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer; }\n\n.content {\n  height: calc(100vh - 68px); }\n\n.dialog {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #000;\n  opacity: 0.5; }\n\n.setting {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9;\n  width: 30%;\n  padding: 16px;\n  border-radius: 6px;\n  background: #fff; }\n\n.ishover:hover {\n  transform: scale(1.1); }\n\n.bottomLine {\n  width: 100%;\n  height: 3px;\n  background: green;\n  display: inline-block;\n  position: absolute;\n  bottom: -15px;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXExlYW1vblxcSnNFeGVyY2lzZVxcYW5ndWxhcl9zY3Jld2RyaXZlXFxpT1Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksMkJBQTBCLEVBQzdCOztBQUdEO0VBQ0ksbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVE7RUFDUixpQkFBZ0I7RUFDaEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsaUNBQWdDO0VBQ2hDLFdBQVU7RUFDVixXQUFVO0VBQ1YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxzQkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixRQUFPLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnR7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjhweCk7XG59XG5cblxuLmRpYWxvZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4uc2V0dGluZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHotaW5kZXg6IDk7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaXNob3Zlcjpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ib3R0b21MaW5le1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTVweDtcbiAgICBsZWZ0OiAwO1xufVxuIl19 */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function AppComponent(_http) {
        this._http = _http;
        this.title = 'project';
        this.toggleDialog = false;
        this.isActive = true;
        this.comPortList = [];
        this.selectedComPortForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selected: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkComPortStatus();
        this.getComPort();
    };
    AppComponent.prototype.openSetPort = function () {
        this.toggleDialog = !this.toggleDialog;
    };
    AppComponent.prototype.setPort = function () {
        var _this = this;
        this.toggleDialog = !this.toggleDialog;
        var port = this.selectedComPortForm.value['selected'];
        this._http.post('http://10.101.100.179:5001/screwdrive/com/setPortNum ', { "port": port }).subscribe(function (res) {
            console.log(res);
            if (res.result === 'Successful') {
                _this._http.post('http://10.101.100.179:5001/screwdrive/com/open', { "open": true }).subscribe(function (res) {
                    console.log(res);
                    _this.checkComPortStatus();
                });
            }
        });
    };
    AppComponent.prototype.checkComPortStatus = function () {
        this._http.get('http://10.101.100.179:5001/screwdrive/com/status').subscribe(function (res) {
            console.log(res);
            // if(!res.result){
            //   alert('請先設定 COM PORT');
            //   this.toggleDialog = !this.toggleDialog;
            // }
        });
    };
    AppComponent.prototype.getComPort = function () {
        var _this = this;
        this._http.get('http://10.101.100.179:5001/screwdrive/com/info').subscribe(function (res) {
            _this.comPortList = res.result;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_realtime_realtime_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/realtime/realtime.component */ "./src/app/pages/realtime/realtime.component.ts");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/history/history.component */ "./src/app/pages/history/history.component.ts");
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/list/list.component */ "./src/app/pages/list/list.component.ts");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/app/components/tables/tables.component.ts");
/* harmony import */ var _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/charts/charts.component */ "./src/app/components/charts/charts.component.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_realtime_realtime_component__WEBPACK_IMPORTED_MODULE_7__["RealtimeComponent"],
                _pages_history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"],
                _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"],
                _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_11__["ChartsComponent"],
                _pages_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["NgxEchartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/charts/charts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/charts/charts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div echarts [options]=\"options\" [merge]=\"updateOptions\" class=\"h-100\"></div>"

/***/ }),

/***/ "./src/app/components/charts/charts.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/charts/charts.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/charts/charts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/charts/charts.component.ts ***!
  \*******************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.rpm = [];
        this.torque = [];
        this.reStart = true;
        this.sendLog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChartsComponent.prototype.ngOnChanges = function (changes) {
        if (this.isConnect) {
            this.target = this.info.target;
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["connect"]('http://10.101.100.179:5001', {
                transports: ['polling']
            });
            this.listenSocket();
        }
    };
    ChartsComponent.prototype.ngOnInit = function () {
        this.drawChart();
    };
    ChartsComponent.prototype.listenSocket = function () {
        var socket = this.socket;
        var _this = this;
        this.socket.on('data', function (data) {
            console.log('on', this.reStart);
            if (this.reStart) {
                this.rpm = [];
                this.torque = [];
                this.drawChart();
            }
            _this.update(data, this.target);
        });
    };
    ChartsComponent.prototype.update = function (data, target) {
        if (data.snDirection === 1)
            return;
        this.rpm.push(data.nRPM);
        this.torque.push(data.nTorque);
        this.updateOptions = {
            series: [
                {
                    type: 'line',
                    stack: '轉速',
                    smooth: true,
                    data: this.rpm,
                },
                {
                    type: 'line',
                    stack: '扭力',
                    smooth: true,
                    data: this.torque,
                },
            ]
        };
        if (data.snStatus) {
            this.sendLog.emit(data);
            this.reStart = true;
            console.log('ochangen', this.reStart);
            return;
        }
        this.reStart = false;
        console.log('end', this.reStart);
    };
    ChartsComponent.prototype.drawChart = function (data) {
        if (data === void 0) { data = []; }
        // initialize chart options:
        this.options = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return "RPM: " + params[0]['data'].toFixed(2) + '<br>' + "Torque: " + params[1]['data'].toFixed(2);
                }
            },
            xAxis: {
                type: 'category',
                data: []
            },
            yAxis: [
                {
                    type: 'value',
                    name: '轉速',
                    // min: 0,
                    // max: 500,
                    // interval: 100,
                    axisLabel: {
                        formatter: '{value} rpm'
                    }
                },
                {
                    type: 'value',
                    name: '扭力',
                    // min: 0,
                    // max: 50,
                    // interval: 5,
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: []
        };
    };
    ChartsComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChartsComponent.prototype, "isConnect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChartsComponent.prototype, "info", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChartsComponent.prototype, "sendLog", void 0);
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/components/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.scss */ "./src/app/components/charts/charts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/components/tables/tables.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/tables/tables.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table id=\"table-data\" class=\"h-100\">\n    <tr>\n      <th>Time</th>\n      <th>ElapsedTime</th>\n      <th>RPM</th>\n      <th>ScrewLeft</th>\n      <th>Station</th>\n      <th>TightAglLowerLmt</th>\n      <th>TightAglUpperLmt</th>\n      <th>TightAngle</th>\n      <th>Torque</th>\n      <th>TorqueLowerLmt</th>\n      <th>TorqueUpperLmt</th>\n      <th>TotalAglLowerLmt</th>\n      <th>TotalAglUpperLmt</th>\n      <th>TotalAngle</th>\n      <th>Direction</th>\n      <th>Finish</th>\n      <th>Report</th>\n      <th>Status</th>\n      <th>Temperature</th>\n      <th>TorqueUnit</th>\n    </tr>\n    <tr *ngFor=\"let item of data\">\n      <td>{{ item.time | date:'short' }}</td>\n      <td>{{ item.nElapsedTime }}</td>\n      <td>{{ item.nRPM }}</td>\n      <td>{{ item.nScrewLeft }}</td>\n      <td>{{ item.nStation }}</td>\n      <td>{{ item.nTightAglLowerLmt }}</td>\n      <td>{{ item.nTightAglUpperLmt }}</td>\n      <td>{{ item.nTightAngle }}</td>\n      <td>{{ item.nTorque }}</td>\n      <td>{{ item.nTorqueLowerLmt }}</td>\n      <td>{{ item.nTorqueUpperLmt }}</td>\n      <td>{{ item.nTotalAglLowerLmt }}</td>\n      <td>{{ item.nTotalAglUpperLmt }}</td>\n      <td>{{ item.nTotalAngle }}</td>\n      <td>{{ item.snDirection }}</td>\n      <td>{{ item.snFinish }}</td>\n      <td>{{ item.snReport }}</td>\n      <td>{{ item.snStatus }}</td>\n      <td>{{ item.snTemperature }}</td>\n      <td>{{ item.snTorqueUnit }}</td>\n    </tr>\n  </table>\n\n"

/***/ }),

/***/ "./src/app/components/tables/tables.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/tables/tables.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap; }\n\ntable td, table th {\n  border: 1px solid #ddd;\n  padding: 8px; }\n\ntable tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\ntable tr:hover {\n  background-color: #ddd; }\n\ntable th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: #4CAF50;\n  color: white; }\n\ntable tr td {\n  text-align: center; }\n\ntable tr th:nth-of-type(1) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(2) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(3) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(4) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(5) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(6) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(7) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(8) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(9) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(10) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(11) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(12) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(13) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(14) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(15) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(16) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(17) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(18) {\n  width: 5.26%; }\n\ntable tr th:nth-of-type(19) {\n  width: 5.26%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJsZXMvQzpcXExlYW1vblxcSnNFeGVyY2lzZVxcYW5ndWxhcl9zY3Jld2RyaXZlXFxpT1Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRhYmxlc1xcdGFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU0sMERBQXdEO0VBQUMsMEJBQXdCO0VBQUMsWUFBVTtFQUFDLGVBQWE7RUFBQyxpQkFBZ0I7RUFDN0gsb0JBQWtCLEVBQUM7O0FBQ3ZCO0VBQW1CLHVCQUFxQjtFQUFDLGFBQVcsRUFBRTs7QUFDdEQ7RUFBeUIsMEJBQXdCLEVBQUU7O0FBQ25EO0VBQWUsdUJBQXFCLEVBQUU7O0FBQ3RDO0VBQVMsa0JBQWdCO0VBQUMscUJBQW1CO0VBQUMsbUJBQWlCO0VBQUMsMEJBQXdCO0VBQUMsYUFBVyxFQUFFOztBQUN0RztFQUFZLG1CQUFpQixFQUFFOztBQUMvQjtFQUEyQixhQUFXLEVBQUU7O0FBQ3hDO0VBQTJCLGFBQVcsRUFBRTs7QUFDeEM7RUFBMkIsYUFBVyxFQUFFOztBQUN4QztFQUEyQixhQUFXLEVBQUU7O0FBQ3hDO0VBQTJCLGFBQVcsRUFBRTs7QUFDeEM7RUFBMkIsYUFBVyxFQUFFOztBQUN4QztFQUEyQixhQUFXLEVBQUU7O0FBQ3hDO0VBQTJCLGFBQVcsRUFBRTs7QUFDeEM7RUFBMkIsYUFBVyxFQUFFOztBQUN4QztFQUE0QixhQUFXLEVBQUU7O0FBQ3pDO0VBQTRCLGFBQVcsRUFBRTs7QUFDekM7RUFBNEIsYUFBVyxFQUFFOztBQUN6QztFQUE0QixhQUFXLEVBQUU7O0FBQ3pDO0VBQTRCLGFBQVcsRUFBRTs7QUFDekM7RUFBNEIsYUFBVyxFQUFFOztBQUN6QztFQUE0QixhQUFXLEVBQUU7O0FBQ3pDO0VBQTRCLGFBQVcsRUFBRTs7QUFDekM7RUFBNEIsYUFBVyxFQUFFOztBQUN6QztFQUE0QixhQUFXLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtmb250LWZhbWlseTpcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3cteDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXB9XG50YWJsZSB0ZCwgdGFibGUgdGh7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO3BhZGRpbmc6OHB4fVxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn1cbnRhYmxlIHRyOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RkZH1cbnRhYmxlIHRoe3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiM0Q0FGNTA7Y29sb3I6d2hpdGV9XG50YWJsZSB0ciB0ZHt0ZXh0LWFsaWduOmNlbnRlcn1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDEpe3dpZHRoOjUuMjYlfVxudGFibGUgdHIgdGg6bnRoLW9mLXR5cGUoMil7d2lkdGg6NS4yNiV9XG50YWJsZSB0ciB0aDpudGgtb2YtdHlwZSgzKXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDQpe3dpZHRoOjUuMjYlfVxudGFibGUgdHIgdGg6bnRoLW9mLXR5cGUoNSl7d2lkdGg6NS4yNiV9XG50YWJsZSB0ciB0aDpudGgtb2YtdHlwZSg2KXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDcpe3dpZHRoOjUuMjYlfVxudGFibGUgdHIgdGg6bnRoLW9mLXR5cGUoOCl7d2lkdGg6NS4yNiV9XG50YWJsZSB0ciB0aDpudGgtb2YtdHlwZSg5KXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDEwKXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDExKXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDEyKXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDEzKXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDE0KXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDE1KXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDE2KXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDE3KXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDE4KXt3aWR0aDo1LjI2JX1cbnRhYmxlIHRyIHRoOm50aC1vZi10eXBlKDE5KXt3aWR0aDo1LjI2JX0iXX0= */"

/***/ }),

/***/ "./src/app/components/tables/tables.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tables/tables.component.ts ***!
  \*******************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
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

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent.prototype.ngOnChanges = function (changes) {
        console.log(this.data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "data", void 0);
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/components/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.scss */ "./src/app/components/tables/tables.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/history/history.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/history/history.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column py-4\">\n  \n  <form [formGroup]=\"historyForm\" (ngSubmit)=\"onSubmit()\" class=\"col-12\">\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Serial Number</span>\n      </div>\n      <input required type=\"text\" class=\"form-control\" formControlName=\"serialNumber\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">開始時間</span>\n      </div>\n      <input required type=\"date\" class=\"form-control\" formControlName=\"startDate\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">結束時間</span>\n      </div>\n      <input required type=\"date\" class=\"form-control\" formControlName=\"endDate\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!historyForm.valid\">送出查詢</button>\n  </form>\n\n  <div class=\"col-12\">\n    <app-tables [data]=\"tableList\"></app-tables>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/history/history.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/history/history.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/history/history.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/history/history.component.ts ***!
  \****************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(_http) {
        this._http = _http;
        this.historyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            serialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent.prototype.onSubmit = function () {
        var _this = this;
        var payload = this.historyForm.value;
        this._http.post('http://10.101.100.179:5001/screwdrive/data/interval', payload).subscribe(function (res) {
            _this.tableList = res.result;
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/pages/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/pages/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h4 class=\"py-3\">serial name list</h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let list of lists\">\n        {{ list }}\n    </li>\n    \n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/pages/list/list.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/list/list.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
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


var ListComponent = /** @class */ (function () {
    function ListComponent(_http) {
        this._http = _http;
        this.lists = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get('http://10.101.100.179:5001/screwdrive/data/serialNum').subscribe(function (res) {
            _this.lists = res.result;
        });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/pages/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/realtime/realtime.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/realtime/realtime.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column h-100 overflow-auto\">\n  <div class=\"d-flex h-50\">\n    <div class=\"col-8 p-4\">\n      <app-charts [isConnect]=\"isSubmit\" [info]=\"info\" (sendLog)=\"showLog($event)\"></app-charts>\n    </div>\n    <form [formGroup]=\"basicForm\" (ngSubmit)=\"onSubmit()\"  class=\"col-4 p-4\">\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Serial Number</span>\n        </div>\n        <input required type=\"text\" class=\"form-control\" formControlName=\"number\">\n      </div>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">目標扭力值</span>\n        </div>\n        <input required type=\"text\" class=\"form-control\" formControlName=\"target\">\n      </div>\n      <div class=\"d-flex justify-content-around\">\n        <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"!basicForm.valid\">開始</button>\n        <button type=\"button\" class=\"btn btn-warning\">中止</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"h-50\">\n    <app-tables [data]=\"tableReport\"></app-tables>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/realtime/realtime.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/realtime/realtime.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlYWx0aW1lL3JlYWx0aW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/realtime/realtime.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/realtime/realtime.component.ts ***!
  \******************************************************/
/*! exports provided: RealtimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealtimeComponent", function() { return RealtimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealtimeComponent = /** @class */ (function () {
    function RealtimeComponent() {
        this.tableReport = [];
        this.isSubmit = false;
        this.basicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            target: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    RealtimeComponent.prototype.ngOnInit = function () {
    };
    RealtimeComponent.prototype.onSubmit = function () {
        this.isSubmit = true;
        this.info = this.basicForm.value;
    };
    RealtimeComponent.prototype.showLog = function (e) {
        this.tableReport.push(e);
        console.log("showLog:", e);
    };
    RealtimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-realtime',
            template: __webpack_require__(/*! ./realtime.component.html */ "./src/app/pages/realtime/realtime.component.html"),
            styles: [__webpack_require__(/*! ./realtime.component.scss */ "./src/app/pages/realtime/realtime.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RealtimeComponent);
    return RealtimeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Leamon\JsExercise\angular_screwdrive\iOT\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map