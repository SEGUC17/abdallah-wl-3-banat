webpackJsonp([1,4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidateService = (function () {
    function ValidateService(http) {
        this.http = http;
    }
    ValidateService.prototype.validateAnswer = function (answer) {
        if (answer == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateService = function (user) {
        if (user.name == undefined || user.price == undefined || user.description == undefined || (isNaN(user.price)) || (isNaN(user.maxSlotClients)) || (isNaN(user.slotDuration)))
            return false;
        else
            return true;
    };
    ValidateService.prototype.AddService = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:8080/bproviders/AddService', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    ValidateService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    ValidateService.prototype.validateClient = function (Clients) {
        if (Clients.Firstname != undefined || Clients.email != undefined || Clients.Lastname != undefined ||
            Clients.password != undefined || Clients.passwordValidation != undefined || Clients.newPassword != undefined
            || Clients.creditCArdInfo != undefined || Clients.birthdate != undefined || !isNaN(Clients.phone)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ValidateService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/validate.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewService = (function () {
    function ViewService(http) {
        this.http = http;
    }
    ViewService.prototype.getAllBusiness = function () {
        return this.http.get('http://localhost:8080/All').map(function (res) { return res.json(); });
    };
    ViewService.prototype.getTopBusiness = function () {
        return this.http.get('http://localhost:8080/top').map(function (res) { return res.json(); });
    };
    ViewService.prototype.searchBusinessUpdated = function (search) {
        return this.http.get('http://localhost:8080/bproviders/searchB' + '?q=' + search).map(function (res) { return res.json(); });
    };
    return ViewService;
}());
ViewService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ViewService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/view.service.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BproviderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BproviderService = (function () {
    function BproviderService(http) {
        this.http = http;
    }
    BproviderService.prototype.createBusinessIfDeclined = function (business) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        console.log(business);
        return this.http.post('http://localhost:8080/bproviders/createBusiness', business, { headers: headers }).map(function (res) { return res.json(); });
    };
    BproviderService.prototype.FindBPandB = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost:8080/bproviders/BPandB', { headers: headers }).map(function (res) { return res.json(); });
    };
    BproviderService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return BproviderService;
}());
BproviderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BproviderService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/bprovider.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsService = (function () {
    function ClientsService(http) {
        this.http = http;
    }
    ClientsService.prototype.editP = function (Firstname, Lastname, creditCArdInfo, address, email, phone, birthdate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        var user = {
            firstname: Firstname,
            lastname: Lastname,
            email: email,
            address: address,
            creditcardinfo: creditCArdInfo,
            phone: phone,
            birthdate: birthdate
        };
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:8080/clients/EditProfile', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClientsService.prototype.getCU = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        console.log(this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        var u = this.http.get('http://localhost:8080/clients/Profile', { headers: headers })
            .map(function (res) { return res.json(); });
        console.log(u);
        return u;
    };
    ClientsService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return ClientsService;
}());
ClientsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ClientsService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/clients.service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetBproviderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetBproviderService = (function () {
    function GetBproviderService(http) {
        this.http = http;
    }
    GetBproviderService.prototype.loadToken = function () {
        this.AuthToken = localStorage.getItem('id_token');
    };
    GetBproviderService.prototype.getBprovider = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        //headers.append('Content-Type','applications/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/bproviders/MyProfile', { headers: headers }).map(function (res) { return res.json(); });
    };
    GetBproviderService.prototype.postAnnouncement = function (id, announcement) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.post('http://localhost:8080/bproviders/PostAnnouncement', announcement, { headers: headers }).map(function (res) { return res.json(); });
    };
    GetBproviderService.prototype.deleteAnnouncement = function (index) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/bproviders/deleteAnnouncement/' + index, { headers: headers }).map(function (res) { return res.json(); });
    };
    return GetBproviderService;
}());
GetBproviderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GetBproviderService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/get-bprovider.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationService = (function () {
    function ReservationService(http) {
        this.http = http;
    }
    ReservationService.prototype.eventValidation = function (event) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        var bId = localStorage.getItem('businessID');
        var serviceId = localStorage.getItem('serviceId');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:8080/clients/eventValidation/' + bId + '/' + serviceId, event, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReservationService.prototype.addEvent = function (event) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        var bId = localStorage.getItem('businessID');
        var serviceId = localStorage.getItem('serviceId');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:8080/clients/addEvent/' + bId + '/' + serviceId, event, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ReservationService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    ReservationService.prototype.getEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        var bId = localStorage.getItem('businessID');
        var serviceId = localStorage.getItem('serviceId');
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost:8080/clients/getEvents/' + bId + '/' + serviceId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ReservationService;
}());
ReservationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ReservationService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/reservation.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceeditService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceeditService = (function () {
    function ServiceeditService(http) {
        this.http = http;
    }
    ServiceeditService.prototype.loadToken = function () {
        this.AuthToken = localStorage.getItem('id_token');
    };
    ServiceeditService.prototype.EditService = function (bid, serviceid, service) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.post('http://localhost:8080/bproviders/editservices/' + bid + '/' + serviceid, service, { headers: headers }).map(function (res) { return res.json(); });
    };
    return ServiceeditService;
}());
ServiceeditService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ServiceeditService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/serviceedit.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminsService = (function () {
    function AdminsService(http) {
        this.http = http;
    }
    AdminsService.prototype.loadToken = function () {
        this.AuthToken = localStorage.getItem('id_token');
    };
    AdminsService.prototype.banorUnban = function (id, bool) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/admins/ban/' + id + '/' + bool, { headers: headers }).map(function (res) { return res.json(); });
    };
    AdminsService.prototype.viewClients = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/admins/viewclients', { headers: headers }).map(function (res) { return res.json(); });
    };
    AdminsService.prototype.getapplications = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/admins/getapps', { headers: headers }).map(function (res) { return res.json(); });
    };
    AdminsService.prototype.acceptOrDecline = function (businessName, approval) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.AuthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/admins/approve/' + businessName + '/' + approval, { headers: headers }).map(function (res) { return res.json(); });
    };
    AdminsService.prototype.removeProvider = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/admins/removebprovider/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AdminsService.prototype.viewProviders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/admins/showbp', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AdminsService;
}());
AdminsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AdminsService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/admins.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerqService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerqService = (function () {
    function AnswerqService(http) {
        this.http = http;
    }
    AnswerqService.prototype.answerQuestion = function (answer, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        console.log(answer);
        return this.http.post('http://localhost:8080/bproviders/answerQuestion/' + id, answer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AnswerqService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    return AnswerqService;
}());
AnswerqService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AnswerqService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/answerq.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskquestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AskquestionService = (function () {
    function AskquestionService(http) {
        this.http = http;
    }
    AskquestionService.prototype.loadToken = function () {
        this.AuthToken = localStorage.getItem('id_token');
    };
    AskquestionService.prototype.askQuestion = function (bid, question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        var body = {
            question: question
        };
        headers.append('Authorization', this.AuthToken);
        return this.http.post('http://localhost:8080/clients/Questions' + '?businessid=' + bid, body, { headers: headers }).map(function (res) { return res.json(); });
    };
    return AskquestionService;
}());
AskquestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AskquestionService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/askquestion.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpeditprofileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BpeditprofileService = (function () {
    function BpeditprofileService(http) {
        this.http = http;
    }
    BpeditprofileService.prototype.editP = function (password, email, bName, location, phone, info) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        var user = {
            password: password,
            email: email,
            bName: bName,
            location: location,
            phone: phone,
            info: info
        };
        //console.log(username);
        //console.log(this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:8080/bproviders/editBprofile', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    BpeditprofileService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    BpeditprofileService.prototype.getCU = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        console.log(this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        var u = this.http.get('http://localhost:8080/bproviders/MyProfile', { headers: headers })
            .map(function (res) { return res.json(); });
        console.log(u);
        return u;
    };
    BpeditprofileService.prototype.getPP = function () {
    };
    BpeditprofileService.prototype.Check = function () {
        console.log('dd');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        console.log(this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost:8080/bproviders/checkBP', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /*editPP(profilepicture){
    
    console.log(profilepicture.name);
    let headers = new Headers();
    this.loadToken();
    
            let formData:FormData = new FormData();
                    formData.append('file[]', profilepicture);
    
    
                headers.append('Authorization', this.authToken);
    //headers.append('enctype', 'multipart/form-data');
    
    
    
    
    
    return this.http.post('http://localhost:8080/bproviders/editBprofilePicture',formData,{headers:headers})
    .map(res => res.json());
    
    }*/
    BpeditprofileService.prototype.editPP = function (profilepicture) {
        console.log(profilepicture.name);
        this.loadToken();
        var formData = new FormData();
        formData.append('uploadFile', profilepicture, profilepicture.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Authorization', this.authToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post('http://localhost:8080/bproviders/editBprofilePicture', formData, options)
            .map(function (res) { return res.json(); });
    };
    return BpeditprofileService;
}());
BpeditprofileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], BpeditprofileService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/bpeditprofile.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsChangePasswordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsChangePasswordService = (function () {
    function ClientsChangePasswordService(http) {
        this.http = http;
    }
    ClientsChangePasswordService.prototype.editPassword = function (username, currentPassword, newPassword, newPasswordValidation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        console.log(this.authToken);
        var user = {
            username: username,
            newPassword: newPassword,
            currentPassword: currentPassword,
            newPasswordValidation: newPasswordValidation
        };
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('http://localhost:8080/clients/editPassword', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ClientsChangePasswordService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return ClientsChangePasswordService;
}());
ClientsChangePasswordService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ClientsChangePasswordService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/clients-change-password.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteserviceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteserviceService = (function () {
    function DeleteserviceService(http) {
        this.http = http;
    }
    DeleteserviceService.prototype.loadToken = function () {
        this.AuthToken = localStorage.getItem('id_token');
    };
    DeleteserviceService.prototype.DeleteService = function (serviceid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/bproviders/DeleteService/' + serviceid, { headers: headers }).map(function (res) { return res.json(); });
    };
    return DeleteserviceService;
}());
DeleteserviceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DeleteserviceService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/deleteservice.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GbdetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GbdetailsService = (function () {
    function GbdetailsService(http) {
        this.http = http;
    }
    GbdetailsService.prototype.clientGetBusiness = function (id) {
        return this.http.get('http://localhost:8080/clients/ViewBusinesses/' + id).map(function (res) { return res.json(); });
    };
    GbdetailsService.prototype.guestGetBusiness = function (id) {
        return this.http.get('http://localhost:8080/ViewBusinesses/' + id).map(function (res) { return res.json(); });
    };
    GbdetailsService.prototype.onRating = function (rating, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        var rate = {
            rating: rating
        };
        //console.log(this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        console.log(id);
        return this.http.post('http://localhost:8080/clients/rate/' + id, rate, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GbdetailsService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return GbdetailsService;
}());
GbdetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GbdetailsService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/gbdetails.service.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetReviewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetReviewsService = (function () {
    function GetReviewsService(http) {
        this.http = http;
    }
    GetReviewsService.prototype.GetReviews = function (id) {
        return this.http.get('http://localhost:8080/clients/ViewReviews/' + id).map(function (res) { return res.json(); });
    };
    GetReviewsService.prototype.GetAnnoucements = function (id) {
        return this.http.get('http://localhost:8080/clients/ViewAnnoucements/' + id).map(function (res) { return res.json(); });
    };
    return GetReviewsService;
}());
GetReviewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GetReviewsService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/get-reviews.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostReviewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostReviewsService = (function () {
    function PostReviewsService(http) {
        this.http = http;
    }
    PostReviewsService.prototype.PostReviews = function (id, review) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/clients/PostReview/' + id, review, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostReviewsService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return PostReviewsService;
}());
PostReviewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PostReviewsService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/post-reviews.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewquestionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewquestionsService = (function () {
    function ViewquestionsService(http) {
        this.http = http;
    }
    ViewquestionsService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    ViewquestionsService.prototype.viewQuestions = function (bid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('http://localhost:8080/bproviders/myQuestions' + '?businessid=' + bid, { headers: headers }).map(function (res) { return res.json(); });
    };
    return ViewquestionsService;
}());
ViewquestionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ViewquestionsService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/viewquestions.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewservicesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewservicesService = (function () {
    function ViewservicesService(http) {
        this.http = http;
    }
    ViewservicesService.prototype.loadToken = function () {
        this.AuthToken = localStorage.getItem('id_token');
    };
    /*getBusiness(){
          let headers = new Headers();
          this.loadToken();
          headers.append('Content-Type','application/json');
          headers.append('Authorization',this.AuthToken);
          return this.http.get('http://localhost:8080/bproviders/getbusiness',{headers:headers}).map(res=>res.json());
    }*/
    ViewservicesService.prototype.viewServices = function (bid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.AuthToken);
        return this.http.get('http://localhost:8080/bproviders/viewServices/' + bid, { headers: headers }).map(function (res) { return res.json(); });
    };
    return ViewservicesService;
}());
ViewservicesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ViewservicesService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/viewservices.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:8080/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        console.log(this.authToken);
        return this.http.get('http://localhost:8080/clients/Profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.isClient = function () {
        if (this.loggedIn()) {
            var user = JSON.parse(localStorage.getItem('user'));
            if (user.type == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    };
    AuthService.prototype.isBprovider = function () {
        if (this.loggedIn()) {
            var user = JSON.parse(localStorage.getItem('user'));
            if (user.type == 1) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    };
    AuthService.prototype.registerClient = function (client) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:8080/register/0', client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerbProvider = function (bprovider) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:8080/register/1', bprovider, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/auth.service.js.map

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 525;


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(644);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/main.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(836),
        styles: [__webpack_require__(822)]
    })
], AppComponent);

//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/app.component.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_get_business_service__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ap_angular2_fullcalendar__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ap_angular2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ap_angular2_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_reservation_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_reservation_reservation_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_client_client_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_service_add_service_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_editbp_profile_editbp_profile_component__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_guestbusinessdetails_guestbusinessdetails_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_bprovider_bprovider_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_editservice_editservice_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_guests_guests_component__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_serviceedit_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_viewservices_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_admins_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_view_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_gbdetails_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_get_bprovider_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_bprovider_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_bpeditprofile_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_viewquestions_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_validate_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_answerq_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_deleteservice_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_get_reviews_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_post_reviews_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_askquestion_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_clients_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_clients_change_password_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_editp_editp_component__ = __webpack_require__(650);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__components_guests_guests_component__["a" /* GuestsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'reservation', component: __WEBPACK_IMPORTED_MODULE_14__components_reservation_reservation_component__["a" /* ReservationComponent */] },
    { path: 'EditService', component: __WEBPACK_IMPORTED_MODULE_21__components_editservice_editservice_component__["a" /* EditserviceComponent */] },
    { path: 'Bprovider', component: __WEBPACK_IMPORTED_MODULE_20__components_bprovider_bprovider_component__["a" /* BproviderComponent */] },
    { path: 'Admin', component: __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'GBdetails', component: __WEBPACK_IMPORTED_MODULE_18__components_guestbusinessdetails_guestbusinessdetails_component__["a" /* GuestbusinessdetailsComponent */] },
    { path: 'EditBpProfile', component: __WEBPACK_IMPORTED_MODULE_17__components_editbp_profile_editbp_profile_component__["a" /* EditbpProfileComponent */] },
    { path: 'AddService', component: __WEBPACK_IMPORTED_MODULE_16__components_add_service_add_service_component__["a" /* AddServiceComponent */] },
    { path: 'Profile', component: __WEBPACK_IMPORTED_MODULE_15__components_client_client_component__["a" /* ClientComponent */] },
    { path: 'editProfile', component: __WEBPACK_IMPORTED_MODULE_40__components_editp_editp_component__["a" /* EditpComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12_ap_angular2_fullcalendar__["CalendarComponent"],
            __WEBPACK_IMPORTED_MODULE_14__components_reservation_reservation_component__["a" /* ReservationComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_guests_guests_component__["a" /* GuestsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_editservice_editservice_component__["a" /* EditserviceComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_bprovider_bprovider_component__["a" /* BproviderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_guestbusinessdetails_guestbusinessdetails_component__["a" /* GuestbusinessdetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_editbp_profile_editbp_profile_component__["a" /* EditbpProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_add_service_add_service_component__["a" /* AddServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_client_client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_editp_editp_component__["a" /* EditpComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_get_business_service__["a" /* GetBusinessService */], __WEBPACK_IMPORTED_MODULE_13__services_reservation_service__["a" /* ReservationService */], __WEBPACK_IMPORTED_MODULE_23__services_serviceedit_service__["a" /* ServiceeditService */],
            __WEBPACK_IMPORTED_MODULE_24__services_viewservices_service__["a" /* ViewservicesService */], __WEBPACK_IMPORTED_MODULE_25__services_admins_service__["a" /* AdminsService */],
            __WEBPACK_IMPORTED_MODULE_27__services_gbdetails_service__["a" /* GbdetailsService */],
            __WEBPACK_IMPORTED_MODULE_28__services_get_bprovider_service__["a" /* GetBproviderService */],
            __WEBPACK_IMPORTED_MODULE_29__services_bprovider_service__["a" /* BproviderService */],
            __WEBPACK_IMPORTED_MODULE_30__services_bpeditprofile_service__["a" /* BpeditprofileService */],
            __WEBPACK_IMPORTED_MODULE_31__services_viewquestions_service__["a" /* ViewquestionsService */],
            __WEBPACK_IMPORTED_MODULE_32__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_33__services_answerq_service__["a" /* AnswerqService */],
            __WEBPACK_IMPORTED_MODULE_34__services_deleteservice_service__["a" /* DeleteserviceService */],
            __WEBPACK_IMPORTED_MODULE_35__services_get_reviews_service__["a" /* GetReviewsService */],
            __WEBPACK_IMPORTED_MODULE_36__services_post_reviews_service__["a" /* PostReviewsService */],
            __WEBPACK_IMPORTED_MODULE_39__services_clients_change_password_service__["a" /* ClientsChangePasswordService */],
            __WEBPACK_IMPORTED_MODULE_38__services_clients_service__["a" /* ClientsService */], __WEBPACK_IMPORTED_MODULE_26__services_view_service__["a" /* ViewService */], __WEBPACK_IMPORTED_MODULE_37__services_askquestion_service__["a" /* AskquestionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/app.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddServiceComponent = (function () {
    function AddServiceComponent(validateservice, flashmessage, authserive, router) {
        this.validateservice = validateservice;
        this.flashmessage = flashmessage;
        this.authserive = authserive;
        this.router = router;
    }
    AddServiceComponent.prototype.ngOnInit = function () { };
    AddServiceComponent.prototype.onAddingServiceSubmit = function () {
        var _this = this;
        var service = {
            name: this.name,
            description: this.description,
            price: this.price,
            picture: this.picture,
            maxSlotClients: this.maxSlotClients,
            slotDuration: this.slotDuration
        };
        if (!this.validateservice.validateService(service)) {
            this.flashmessage.show('Wrong Data Entry or Missing Fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.validateservice.AddService(service).subscribe(function (data) {
            if (data) {
                _this.flashmessage.show('Service Added successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/Bprovider']);
            }
            else {
                _this.flashmessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                //this.router.navigate(['/register']);
            }
        });
    };
    return AddServiceComponent;
}());
AddServiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-service',
        template: __webpack_require__(837),
        styles: [__webpack_require__(823)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AddServiceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/add-service.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admins_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(router, adminsservice, flashmessage, authservice) {
        this.router = router;
        this.adminsservice = adminsservice;
        this.flashmessage = flashmessage;
        this.authservice = authservice;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminsservice.getapplications().subscribe(function (application) {
            if (!application.success && application.unauthorized) {
                _this.authservice.logout();
                _this.router.navigate(['Login']);
                _this.flashmessage.show('Only Admins are allowed to visit this page.', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else if (application.success) {
                _this.applications = application.applications;
            }
        });
        this.adminsservice.viewProviders().subscribe(function (data) {
            _this.providers = data.providers;
        });
    };
    AdminComponent.prototype.ViewClients = function () {
        var _this = this;
        this.adminsservice.viewClients().subscribe(function (client) {
            _this.clients = client.result;
            if (!client.success) {
                _this.flashmessage.show(client.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    AdminComponent.prototype.BanOrUnban = function (event, bool) {
        var _this = this;
        this.id = event.target.value;
        this.bool = bool;
        this.adminsservice.banorUnban(this.id, this.bool).subscribe(function (result) {
            if (result.success) {
                location.reload();
                _this.flashmessage.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashmessage.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    AdminComponent.prototype.acceptOrDecline = function (event, approval) {
        this.adminsservice.acceptOrDecline(event.target.value, approval).subscribe(function (application) {
            location.reload();
        });
    };
    AdminComponent.prototype.onRemoveProvider = function (event) {
        this.adminsservice.removeProvider(event.target.value).subscribe(function (data) { });
        location.reload();
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(838),
        styles: [__webpack_require__(824)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_admins_service__["a" /* AdminsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admins_service__["a" /* AdminsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], AdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/admin.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_viewservices_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_bprovider_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bprovider_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_serviceedit_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_view_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_viewquestions_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_answerq_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_deleteservice_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_get_reviews_service__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BproviderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var BproviderComponent = (function () {
    function BproviderComponent(viewservicesservice, editservice, flashmessage, router, authservice, viewService, getBproviderService, bproviderservice, validateservice, viewquestionsservice, AnswerqService, deleteService, getReviews) {
        this.viewservicesservice = viewservicesservice;
        this.editservice = editservice;
        this.flashmessage = flashmessage;
        this.router = router;
        this.authservice = authservice;
        this.viewService = viewService;
        this.getBproviderService = getBproviderService;
        this.bproviderservice = bproviderservice;
        this.validateservice = validateservice;
        this.viewquestionsservice = viewquestionsservice;
        this.AnswerqService = AnswerqService;
        this.deleteService = deleteService;
        this.getReviews = getReviews;
    }
    BproviderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.business = this.getBproviderService.getBprovider().subscribe(function (Profile) {
            if (!Profile.success && Profile.unauthorized) {
                _this.authservice.logout();
                _this.router.navigate(['Login']);
                _this.flashmessage.show('Only business providers are allowed to visit this page.', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else if (!Profile.success && !Profile.unauthorized) {
                _this.flashmessage.show(Profile.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
            else if (Profile.success) {
                _this.business = Profile.Business;
                _this.announcements = Profile.Business.announcements;
                _this.providerFirstname = Profile.Provider.firstname;
                _this.providerLastname = Profile.Provider.lastname;
                _this.providerEmail = Profile.Provider.email;
                _this.providerBirthdate = Profile.Provider.birthdate;
                /*this.MyInfo = Profile.Provider;
                this.business = Profile.Business;
                this.services = Profile.Business.services;
                this.questions = Profile.Business.questions;
                this.reviews = Profile.Business.reviews;
                this.announcements= Profile.Business.announcements;
                console.log(this.MyInfo);*/
            }
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.viewService.getAllBusiness().subscribe(function (businesses) {
            _this.businesses = businesses;
        });
    };
    BproviderComponent.prototype.DeleteService = function (event) {
        var _this = this;
        var serviceid = event.target.value;
        this.deleteService.DeleteService(serviceid).subscribe(function (service) {
            if (service.Success) {
                _this.flashmessage.show('Service is deleted Successfully', { cssClass: 'alert-success', timeout: 3000 });
                location.reload();
            }
            else {
                _this.flashmessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                //this.router.navigate(['/register']);
            }
        });
    };
    BproviderComponent.prototype.ViewReviews = function () {
        var _this = this;
        this.id = this.business.bproviderid;
        this.getReviews.GetReviews(this.id).subscribe(function (Reviews) {
            _this.reviews = Reviews.Reviews;
        });
    };
    BproviderComponent.prototype.searchForBusiness = function () {
        var _this = this;
        this.viewService.searchBusinessUpdated(this.search).subscribe(function (Businesses) {
            _this.searchedBusinesses = Businesses.businessName;
        });
    };
    BproviderComponent.prototype.ViewService = function () {
        var _this = this;
        this.viewservicesservice.viewServices(this.business._id).subscribe(function (service) {
            _this.services = service.services;
            if (!service.success) {
                _this.flashmessage.show(service.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    BproviderComponent.prototype.getServiceID = function (event) {
        this.id = event.target.value;
        localStorage.setItem('serviceid', this.id);
    };
    BproviderComponent.prototype.topBusinesses = function () {
        var _this = this;
        this.viewService.getTopBusiness().subscribe(function (TopBusinesses) {
            _this.TopBusinesses = TopBusinesses;
        });
    };
    BproviderComponent.prototype.onButtonClicked = function (event) {
        var id = event.target.value;
        localStorage.setItem('businessID', id);
        this.router.navigate(['GBdetails']);
    };
    BproviderComponent.prototype.postAnnouncement = function () {
        this.getBproviderService.postAnnouncement(this.business._id, { description: this.newAnnouncement }).subscribe(function (data) {
            location.reload();
        });
    };
    BproviderComponent.prototype.isDeclined = function () {
        return localStorage.getItem('isDeclined') == 'true' ? true : false;
    };
    BproviderComponent.prototype.onClickCreate = function () {
        var _this = this;
        var business = {
            businessName: this.businessName,
            location: this.location,
            phone: this.phoneNumber,
            description: this.description,
            info: this.info
        };
        this.bproviderservice.createBusinessIfDeclined(business).subscribe(function (data) {
            if (data.success) {
                localStorage.setItem('isDeclined', 'false');
                _this.flashmessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                location.reload();
            }
        });
    };
    BproviderComponent.prototype.viewquestions = function () {
        var _this = this;
        this.viewquestionsservice.viewQuestions(this.business._id).subscribe(function (questions) { _this.questions = questions; });
    };
    BproviderComponent.prototype.onAnswerSubmit = function (id) {
        var ans = this.answer;
        if (this.validateservice.validateAnswer(this.answer)) {
            this.AnswerqService.answerQuestion({ answer: ans }, id).subscribe(function (data) {
                console.log(data);
                console.log('success');
                //this.Router.navigate(['/']);
            });
            this.flashmessage.show('Answer submitted succesfully', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
            this.flashmessage.show('Please enter an answer!', { cssClass: 'alert-danger', timeout: 3000 });
        }
        this.viewquestions();
    };
    BproviderComponent.prototype.onButtonClicked2 = function (event) {
        this.x = event.target.value;
        console.log(event.target.value);
        this.help = event.target.value;
        //  this.AnswerqService.answerQuestion(answer, event.target.value).subscribe(data=>{
        //this.onAnswerSubmit(event.target.value);
        // });
    };
    BproviderComponent.prototype.onButtonClicked3 = function (event) {
        console.log('log');
        // console.log(event.target.value);
        console.log(this.help);
        console.log('log');
        this.x = null;
        //this.help=event.target.value;
        //  this.AnswerqService.answerQuestion(answer, event.target.value).subscribe(data=>{
        this.onAnswerSubmit(event.target.value);
        this.help = null;
        this.answer = null;
        location.reload();
        // });
    };
    BproviderComponent.prototype.deleteAnnouncement = function (index) {
        var _this = this;
        this.getBproviderService.deleteAnnouncement(index).subscribe(function (announcements) { _this.announcements = announcements; });
        location.reload();
    };
    return BproviderComponent;
}());
BproviderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bprovider',
        template: __webpack_require__(839),
        styles: [__webpack_require__(825)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_viewservices_service__["a" /* ViewservicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_viewservices_service__["a" /* ViewservicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_serviceedit_service__["a" /* ServiceeditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_serviceedit_service__["a" /* ServiceeditService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_view_service__["a" /* ViewService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_bprovider_service__["a" /* GetBproviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_bprovider_service__["a" /* GetBproviderService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__services_bprovider_service__["a" /* BproviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bprovider_service__["a" /* BproviderService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__services_viewquestions_service__["a" /* ViewquestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_viewquestions_service__["a" /* ViewquestionsService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__services_answerq_service__["a" /* AnswerqService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_answerq_service__["a" /* AnswerqService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_12__services_deleteservice_service__["a" /* DeleteserviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_deleteservice_service__["a" /* DeleteserviceService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_13__services_get_reviews_service__["a" /* GetReviewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_get_reviews_service__["a" /* GetReviewsService */]) === "function" && _o || Object])
], BproviderComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/bprovider.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clients_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_view_service__ = __webpack_require__(158);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientComponent = (function () {
    function ClientComponent(authService, ClientsService, viewService, router, validateService, flashMessages) {
        this.authService = authService;
        this.ClientsService = ClientsService;
        this.viewService = viewService;
        this.router = router;
        this.validateService = validateService;
        this.flashMessages = flashMessages;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.profilefirstname = profile.firstname;
            _this.profilelastname = profile.lastname;
            _this.profileemail = profile.email;
            _this.profileaddress = profile.address;
            _this.profilephone = profile.phone;
            _this.profilebirthdate = profile.birthdate;
        } /*,
         err =>{
        return false;
        }*/);
        this.viewService.getAllBusiness().subscribe(function (businesses) {
            _this.businesses = businesses;
        });
    };
    ClientComponent.prototype.onShowProfile = function () {
        this.ngOnInit();
    };
    ClientComponent.prototype.topBusinesses = function () {
        var _this = this;
        this.viewService.getTopBusiness().subscribe(function (TopBusinesses) {
            _this.TopBusinesses = TopBusinesses;
        });
    };
    ClientComponent.prototype.searchForBusiness = function () {
        var _this = this;
        this.viewService.searchBusinessUpdated(this.search).subscribe(function (Businesses) {
            _this.searchedBusinesses = Businesses.businessName;
        });
    };
    ClientComponent.prototype.onButtonClicked = function (event) {
        var id = event.target.value;
        localStorage.setItem('businessID', id);
        this.router.navigate(['GBdetails']);
        console.log(this.businesses);
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client',
        template: __webpack_require__(840),
        styles: [__webpack_require__(826)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["a" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clients_service__["a" /* ClientsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_view_service__["a" /* ViewService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _f || Object])
], ClientComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/client.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bpeditprofile_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditbpProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditbpProfileComponent = (function () {
    function EditbpProfileComponent(bpeditprofile, router, flashMessage) {
        this.bpeditprofile = bpeditprofile;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    EditbpProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.Cprofilepicture = '../../../../../uploads/';
        this.bpeditprofile.getCU().subscribe(function (data) {
            _this.user = JSON.parse(localStorage.getItem('user'));
            _this.Cusername = _this.user.username;
            _this.Cemail = data.Provider.email;
            _this.CbName = data.Business.businessName;
            _this.Clocation = data.Business.location;
            _this.Cphone = data.Business.phone;
            _this.Cinfo = data.Business.info;
            _this.Cprofilepicture = data.Business.profilepicture;
            _this.b = data.Business;
        });
    };
    EditbpProfileComponent.prototype.onEditPSubmit = function () {
        this.bpeditprofile.editP(this.password, this.email, this.bName, this.location, this.phone, this.info).subscribe(function (err) {
        });
        this.flashMessage.show('You have successfuly updated your profile', { cssClass: 'alert-success', timout: 3000 });
        this.router.navigate(['Bprovider']);
    };
    EditbpProfileComponent.prototype.onPPchosen = function (fileInput) {
        this.profilepicture = fileInput.target.files[0];
        //console.log(this.profilepicture);
        this.bpeditprofile.editPP(this.profilepicture).subscribe(function (data) {
            console.log(data);
        });
    };
    return EditbpProfileComponent;
}());
EditbpProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editbp-profile',
        template: __webpack_require__(841),
        styles: [__webpack_require__(827)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bpeditprofile_service__["a" /* BpeditprofileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bpeditprofile_service__["a" /* BpeditprofileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], EditbpProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/editbp-profile.component.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clients_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_clients_change_password_service__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditpComponent = (function () {
    function EditpComponent(editprofile, router, flashMessage, changepw, validateService) {
        this.editprofile = editprofile;
        this.router = router;
        this.flashMessage = flashMessage;
        this.changepw = changepw;
        this.validateService = validateService;
    }
    EditpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editprofile.getCU().subscribe(function (data) {
            _this.user = JSON.parse(localStorage.getItem('user'));
            _this.Cusername = _this.user.username;
            _this.Cemail = data.email;
            _this.CbName = data.businessName;
            _this.Clocation = data.address;
            _this.Cphone = data.phone;
            _this.CFirstname = data.firstname;
            _this.CLastname = data.lastname;
            _this.CCreditCardInfo = data.creditcardinfo;
            _this.Cbdate = data.birthdate;
        });
    };
    EditpComponent.prototype.onClientseditProfileSubmit = function () {
        var client = { Firstname: this.Firstname,
            Lastname: this.Lastname,
            creditCArdInfo: this.creditCArdInfo,
            address: this.address,
            email: this.email,
            phone: this.phone,
            birthdate: this.birthdate
        };
        if (!(this.validateService.validateClient(client))) {
            this.flashMessage.show('ERROR', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.editprofile.editP(this.Firstname, this.Lastname, this.creditCArdInfo, this.address, this.email, this.phone, this.birthdate).subscribe(function (data) {
                location.reload();
            });
            this.flashMessage.show('SUCCESS', { cssClass: 'alert-success', timeout: 3000 });
        }
    };
    EditpComponent.prototype.onClientsChangePasswordSubmit = function () {
        this.changepw.editPassword(this.username, this.currentPassword, this.newPassword, this.newPasswordValidation).subscribe(function (data) {
            location.reload();
        });
    };
    return EditpComponent;
}());
EditpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editp',
        template: __webpack_require__(842),
        styles: [__webpack_require__(828)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_clients_service__["a" /* ClientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clients_service__["a" /* ClientsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_clients_change_password_service__["a" /* ClientsChangePasswordService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_clients_change_password_service__["a" /* ClientsChangePasswordService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _e || Object])
], EditpComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/editp.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_serviceedit_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_get_bprovider_service__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditserviceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditserviceComponent = (function () {
    function EditserviceComponent(serviceeditservice, router, getBproviderService, flashmessage) {
        this.serviceeditservice = serviceeditservice;
        this.router = router;
        this.getBproviderService = getBproviderService;
        this.flashmessage = flashmessage;
    }
    EditserviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBproviderService.getBprovider().subscribe(function (business) { _this.business = business.Business; });
    };
    EditserviceComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var service = {
            name: this.name,
            price: this.price,
            description: this.description
        };
        this.serviceid = localStorage.getItem('serviceid');
        this.serviceeditservice.EditService(this.business._id, this.serviceid, service)
            .subscribe(function (Service) {
            if (Service.success) {
                _this.router.navigate(['Bprovider']);
                _this.flashmessage.show(Service.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.router.navigate(['Bprovider']);
                _this.flashmessage.show(Service.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        localStorage.removeItem('serviceid');
    };
    return EditserviceComponent;
}());
EditserviceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editservice',
        template: __webpack_require__(843),
        styles: [__webpack_require__(829)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_serviceedit_service__["a" /* ServiceeditService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_serviceedit_service__["a" /* ServiceeditService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_get_bprovider_service__["a" /* GetBproviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_get_bprovider_service__["a" /* GetBproviderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], EditserviceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/editservice.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gbdetails_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_reservation_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_askquestion_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_post_reviews_service__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestbusinessdetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GuestbusinessdetailsComponent = (function () {
    function GuestbusinessdetailsComponent(gbdetails, router, authservice, flashMessage, reservationService, askquestionservice, postReviews) {
        this.gbdetails = gbdetails;
        this.router = router;
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.reservationService = reservationService;
        this.askquestionservice = askquestionservice;
        this.postReviews = postReviews;
    }
    GuestbusinessdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = localStorage.getItem('businessID');
        this.gbdetails.guestGetBusiness(this.id).subscribe(function (Business) {
            console.log(_this.id);
            _this.business = Business.Profile;
            _this.name = Business.Profile.businessName;
            _this.desc = Business.Profile.description;
            _this.inf = Business.Profile.info;
            _this.ph = Business.Profile.phone;
            _this.loc = Business.Profile.location;
            _this.services = _this.business.services;
            _this.questions = _this.business.questions;
            _this.reviews = _this.business.reviews;
            _this.announcements = _this.business.announcements;
        });
    };
    GuestbusinessdetailsComponent.prototype.postReview = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        this.id = localStorage.getItem('businessID');
        this.postReviews.PostReviews(this.id, { description: this.newReview, name: user.username }).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                location.reload();
            }
            else
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    GuestbusinessdetailsComponent.prototype.reserveSlot = function (event) {
        var _this = this;
        var serviceId = event.target.value;
        localStorage.setItem('serviceId', serviceId);
        this.reservationService.getEvents().subscribe(function (data) {
            if (data.success) {
                localStorage.setItem('events', JSON.stringify(data));
                _this.router.navigate(['reservation']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                location.reload();
            }
        });
    };
    GuestbusinessdetailsComponent.prototype.askQuestion = function (question) {
        var _this = this;
        this.askquestionservice.askQuestion(this.id, question).subscribe(function (Business) { _this.questions = Business.questions; });
        location.reload();
    };
    GuestbusinessdetailsComponent.prototype.isClient = function () {
        if (!this.authservice.loggedIn())
            return false;
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.type == 0)
            return true;
        else
            return false;
    };
    GuestbusinessdetailsComponent.prototype.onRate = function (rating) {
        console.log('a');
        this.gbdetails.onRating(rating, this.id).subscribe(function (err) {
            console.log(err);
        });
        location.reload();
        this.flashMessage.show('You have successfuly rated this business', { cssClass: 'alert-success', timout: 3000 });
    };
    return GuestbusinessdetailsComponent;
}());
GuestbusinessdetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-guestbusinessdetails',
        template: __webpack_require__(844),
        styles: [__webpack_require__(830)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gbdetails_service__["a" /* GbdetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gbdetails_service__["a" /* GbdetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_reservation_service__["a" /* ReservationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_reservation_service__["a" /* ReservationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_askquestion_service__["a" /* AskquestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_askquestion_service__["a" /* AskquestionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_post_reviews_service__["a" /* PostReviewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_post_reviews_service__["a" /* PostReviewsService */]) === "function" && _g || Object])
], GuestbusinessdetailsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/guestbusinessdetails.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestsComponent = (function () {
    function GuestsComponent(viewService, router) {
        this.viewService = viewService;
        this.router = router;
    }
    GuestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewService.getAllBusiness().subscribe(function (businesses) {
            _this.businesses = businesses;
        });
    };
    GuestsComponent.prototype.topBusinesses = function () {
        var _this = this;
        this.viewService.getTopBusiness().subscribe(function (TopBusinesses) {
            _this.TopBusinesses = TopBusinesses;
        });
    };
    GuestsComponent.prototype.searchForBusiness = function () {
        var _this = this;
        this.viewService.searchBusinessUpdated(this.search).subscribe(function (Businesses) {
            _this.searchedBusinesses = Businesses.businessName;
        });
    };
    GuestsComponent.prototype.onButtonClicked = function (event) {
        var id = event.target.value;
        localStorage.setItem('businessID', id);
        this.router.navigate(['GBdetails']);
    };
    return GuestsComponent;
}());
GuestsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-guests',
        template: __webpack_require__(845),
        styles: [__webpack_require__(831)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GuestsComponent);

var _a, _b;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/guests.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bprovider_service__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(flashMessage, router, authService, bproviderservice) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
        this.bproviderservice = bproviderservice;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data.user);
                if (data.user.type == 0)
                    _this.router.navigate(['Profile']);
                else if (data.user.type == 1) {
                    _this.bproviderservice.FindBPandB().subscribe(function (result) {
                        console.log(result.business);
                        localStorage.setItem('isDeclined', result.business.isDeclined);
                        _this.router.navigate(['Bprovider']);
                    });
                }
                else
                    _this.router.navigate(['Admin']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(846),
        styles: [__webpack_require__(832)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_bprovider_service__["a" /* BproviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_bprovider_service__["a" /* BproviderService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/login.component.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(flashMessage, router, authService) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Logged out successfully!', { cssClass: 'alert-success', timout: 3000 });
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(847),
        styles: [__webpack_require__(833)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(flashMessage, router, authService) {
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmitClient = function () {
        var _this = this;
        var client = {
            username: this.clientusername,
            password: this.clientpassword,
            firstname: this.clientfirstname,
            lastname: this.clientlastname,
            email: this.clientemail,
            address: this.clientAddress,
            creditcardinfo: this.creditcardinfo,
            birthdate: this.clientbirthdate,
            phone: this.clientphone
        };
        this.authService.registerClient(client).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['register']);
            }
        });
    };
    RegisterComponent.prototype.onRegisterSubmitbProvider = function () {
        var _this = this;
        var bprovider = {
            username: this.bproviderusername,
            password: this.bproviderpassword,
            firstname: this.bproviderfirstname,
            lastname: this.bproviderlastname,
            email: this.bprovideremail,
            location: this.bproviderlocation,
            phone: this.bproviderphone,
            businessName: this.businessName,
            birthdate: this.bproviderbirthdate,
            description: this.bproviderdescription,
            info: this.bproviderinfo
        };
        this.authService.registerbProvider(bprovider).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['login']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(848),
        styles: [__webpack_require__(834)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/register.component.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reservation_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationComponent = (function () {
    function ReservationComponent(reservationService, flashMessage) {
        this.reservationService = reservationService;
        this.flashMessage = flashMessage;
        this.event = [];
        this.isValid = false;
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent.prototype.calendarOptions = function () {
        var data = JSON.parse(localStorage.getItem('events'));
        var calendarOptions = {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay, prevYear,nextYear'
            },
            fixedWeekCount: false,
            currentDate: '2016-09-12',
            editable: true,
            eventLimit: true,
            defaultTimedEventDuration: '00:30:00',
            events: data.events
        };
        return (calendarOptions);
    };
    ReservationComponent.prototype.chooseSlot = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        this.reservationService.eventValidation({ title: user.username, start: this.dateChosen + 'T' + this.timeChosen + ':00' }).subscribe(function (data) {
            if (data.isValid) {
                localStorage.setItem('chosenEvent', JSON.stringify({ title: user.username, start: _this.dateChosen + 'T' + _this.timeChosen + ':00' }));
                _this.flashMessage.show('The desired slot is available to be reserved!', { cssClass: 'alert-success', timeout: 6000 });
                _this.isValid = true;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ReservationComponent.prototype.openCheckout = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_cSTf8NAIOj3u7MfvtLR32p2V',
            locale: 'auto',
            token: function (token) {
                var data = JSON.parse(localStorage.getItem('events'));
                var event = JSON.parse(localStorage.getItem('chosenEvent'));
                var businessId = localStorage.getItem('businessID');
                var serviceId = localStorage.getItem('serviceId');
                var start = event.start;
                var title = event.title;
                var description = data.service.description;
                var price = data.service.price;
                var name = data.service.name;
                var info = {
                    token: token.id,
                    description: description,
                    price: price,
                    name: name,
                    start: start,
                    title: title,
                    businessId: businessId,
                    serviceId: serviceId
                };
                $.ajax({
                    type: 'post',
                    url: 'http://localhost:8080/clients/charge',
                    data: info,
                    dataType: 'json',
                    xhrFields: {
                        withCredentials: false
                    },
                    headers: {},
                    success: function (data) {
                        if (data.success) {
                            var result = JSON.parse(localStorage.getItem('events'));
                            var events = result.events;
                            var chosenEvent = JSON.parse(localStorage.getItem('chosenEvent'));
                            localStorage.removeItem('events');
                            events.push(chosenEvent);
                            localStorage.setItem('events', JSON.stringify(result));
                            window.location.reload();
                        }
                        else {
                            window.location.reload();
                        }
                    }
                });
            }
        });
        handler.open({
            name: 'Reserve for the desired slot',
        });
    };
    ReservationComponent.prototype.cancelReservation = function () {
        this.isValid = false;
        location.reload();
    };
    return ReservationComponent;
}());
ReservationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reservation',
        template: __webpack_require__(849),
        styles: [__webpack_require__(835)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reservation_service__["a" /* ReservationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_reservation_service__["a" /* ReservationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ReservationComponent);

var _a, _b;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/reservation.component.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetBusinessService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetBusinessService = (function () {
    function GetBusinessService(http) {
        this.http = http;
    }
    GetBusinessService.prototype.clientGetBusiness = function (id) {
        return this.http.get('http://localhost:8080/clients/ViewBusinesses/' + id).map(function (res) { return res.json(); });
    };
    GetBusinessService.prototype.guestGetBusiness = function (id) {
        return this.http.get('http://localhost:8080/ViewBusinesses/' + id).map(function (res) { return res.json(); });
    };
    return GetBusinessService;
}());
GetBusinessService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GetBusinessService);

var _a;
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/get-business.service.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/yahia/Desktop/submission/angular-src/src/environment.js.map

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 393,
	"./af.js": 393,
	"./ar": 400,
	"./ar-dz": 394,
	"./ar-dz.js": 394,
	"./ar-kw": 395,
	"./ar-kw.js": 395,
	"./ar-ly": 396,
	"./ar-ly.js": 396,
	"./ar-ma": 397,
	"./ar-ma.js": 397,
	"./ar-sa": 398,
	"./ar-sa.js": 398,
	"./ar-tn": 399,
	"./ar-tn.js": 399,
	"./ar.js": 400,
	"./az": 401,
	"./az.js": 401,
	"./be": 402,
	"./be.js": 402,
	"./bg": 403,
	"./bg.js": 403,
	"./bn": 404,
	"./bn.js": 404,
	"./bo": 405,
	"./bo.js": 405,
	"./br": 406,
	"./br.js": 406,
	"./bs": 407,
	"./bs.js": 407,
	"./ca": 408,
	"./ca.js": 408,
	"./cs": 409,
	"./cs.js": 409,
	"./cv": 410,
	"./cv.js": 410,
	"./cy": 411,
	"./cy.js": 411,
	"./da": 412,
	"./da.js": 412,
	"./de": 415,
	"./de-at": 413,
	"./de-at.js": 413,
	"./de-ch": 414,
	"./de-ch.js": 414,
	"./de.js": 415,
	"./dv": 416,
	"./dv.js": 416,
	"./el": 417,
	"./el.js": 417,
	"./en-au": 418,
	"./en-au.js": 418,
	"./en-ca": 419,
	"./en-ca.js": 419,
	"./en-gb": 420,
	"./en-gb.js": 420,
	"./en-ie": 421,
	"./en-ie.js": 421,
	"./en-nz": 422,
	"./en-nz.js": 422,
	"./eo": 423,
	"./eo.js": 423,
	"./es": 425,
	"./es-do": 424,
	"./es-do.js": 424,
	"./es.js": 425,
	"./et": 426,
	"./et.js": 426,
	"./eu": 427,
	"./eu.js": 427,
	"./fa": 428,
	"./fa.js": 428,
	"./fi": 429,
	"./fi.js": 429,
	"./fo": 430,
	"./fo.js": 430,
	"./fr": 433,
	"./fr-ca": 431,
	"./fr-ca.js": 431,
	"./fr-ch": 432,
	"./fr-ch.js": 432,
	"./fr.js": 433,
	"./fy": 434,
	"./fy.js": 434,
	"./gd": 435,
	"./gd.js": 435,
	"./gl": 436,
	"./gl.js": 436,
	"./gom-latn": 437,
	"./gom-latn.js": 437,
	"./he": 438,
	"./he.js": 438,
	"./hi": 439,
	"./hi.js": 439,
	"./hr": 440,
	"./hr.js": 440,
	"./hu": 441,
	"./hu.js": 441,
	"./hy-am": 442,
	"./hy-am.js": 442,
	"./id": 443,
	"./id.js": 443,
	"./is": 444,
	"./is.js": 444,
	"./it": 445,
	"./it.js": 445,
	"./ja": 446,
	"./ja.js": 446,
	"./jv": 447,
	"./jv.js": 447,
	"./ka": 448,
	"./ka.js": 448,
	"./kk": 449,
	"./kk.js": 449,
	"./km": 450,
	"./km.js": 450,
	"./kn": 451,
	"./kn.js": 451,
	"./ko": 452,
	"./ko.js": 452,
	"./ky": 453,
	"./ky.js": 453,
	"./lb": 454,
	"./lb.js": 454,
	"./lo": 455,
	"./lo.js": 455,
	"./lt": 456,
	"./lt.js": 456,
	"./lv": 457,
	"./lv.js": 457,
	"./me": 458,
	"./me.js": 458,
	"./mi": 459,
	"./mi.js": 459,
	"./mk": 460,
	"./mk.js": 460,
	"./ml": 461,
	"./ml.js": 461,
	"./mr": 462,
	"./mr.js": 462,
	"./ms": 464,
	"./ms-my": 463,
	"./ms-my.js": 463,
	"./ms.js": 464,
	"./my": 465,
	"./my.js": 465,
	"./nb": 466,
	"./nb.js": 466,
	"./ne": 467,
	"./ne.js": 467,
	"./nl": 469,
	"./nl-be": 468,
	"./nl-be.js": 468,
	"./nl.js": 469,
	"./nn": 470,
	"./nn.js": 470,
	"./pa-in": 471,
	"./pa-in.js": 471,
	"./pl": 472,
	"./pl.js": 472,
	"./pt": 474,
	"./pt-br": 473,
	"./pt-br.js": 473,
	"./pt.js": 474,
	"./ro": 475,
	"./ro.js": 475,
	"./ru": 476,
	"./ru.js": 476,
	"./sd": 477,
	"./sd.js": 477,
	"./se": 478,
	"./se.js": 478,
	"./si": 479,
	"./si.js": 479,
	"./sk": 480,
	"./sk.js": 480,
	"./sl": 481,
	"./sl.js": 481,
	"./sq": 482,
	"./sq.js": 482,
	"./sr": 484,
	"./sr-cyrl": 483,
	"./sr-cyrl.js": 483,
	"./sr.js": 484,
	"./ss": 485,
	"./ss.js": 485,
	"./sv": 486,
	"./sv.js": 486,
	"./sw": 487,
	"./sw.js": 487,
	"./ta": 488,
	"./ta.js": 488,
	"./te": 489,
	"./te.js": 489,
	"./tet": 490,
	"./tet.js": 490,
	"./th": 491,
	"./th.js": 491,
	"./tl-ph": 492,
	"./tl-ph.js": 492,
	"./tlh": 493,
	"./tlh.js": 493,
	"./tr": 494,
	"./tr.js": 494,
	"./tzl": 495,
	"./tzl.js": 495,
	"./tzm": 497,
	"./tzm-latn": 496,
	"./tzm-latn.js": 496,
	"./tzm.js": 497,
	"./uk": 498,
	"./uk.js": 498,
	"./ur": 499,
	"./ur.js": 499,
	"./uz": 501,
	"./uz-latn": 500,
	"./uz-latn.js": 500,
	"./uz.js": 501,
	"./vi": 502,
	"./vi.js": 502,
	"./x-pseudo": 503,
	"./x-pseudo.js": 503,
	"./yo": 504,
	"./yo.js": 504,
	"./zh-cn": 505,
	"./zh-cn.js": 505,
	"./zh-hk": 506,
	"./zh-hk.js": 506,
	"./zh-tw": 507,
	"./zh-tw.js": 507
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 820;


/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class = \"page\" style=\"z-index:initial !important;\">\n<flash-messages> </flash-messages>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "\n\n\n  <h3 class=\"title-description\" style= \" margin-left:250px !important;\">                    AddService.</h3>\n     <div class=\"row\">\n        \t<div class=\"span9\">\n\n        \t     <form id=\"contact-form\" (submit) = \"onAddingServiceSubmit()\">\n            \t  <p class=\"contact-name\">\n            \t\t<input id=\"contact_name\"   style= \" margin-left:250px !important;\" type=\"text\" [(ngModel)]=\"name\" name =\"name\" placeholder=\"ServiceName\" value=\"\" name=\"name\" />\n                </p>\n                <p class=\"contact-email\">\n                \t<input id=\"contact_email\"  style= \" margin-left:250px !important;\" type=\"text\" [(ngModel)]=\"description\" name =\"description\" placeholder=\"description\" value=\"\" name=\"description\" />\n                </p>\n                <p class=\"contact-message\">\n                <input id=\"contact_email\"   style= \" margin-left:250px !important;\" type=\"text\" [(ngModel)]=\"price\" name =\"price\" placeholder=\"price\" value=\"\" name=\"price\" />\n\n                </p>\n                <p class=\"contact-message\">\n                <input id=\"contact_email\"   style= \" margin-left:250px !important;\" type=\"text\" [(ngModel)]=\"maxSlotClients\" name =\"maxSlotClients\" placeholder=\"maxSlotClients\" value=\"\" name=\"maxSlotClients\" />\n\n                </p>\n                <p class=\"contact-message\">\n                <input id=\"contact_email\"   style= \" margin-left:250px !important;\" type=\"text\" [(ngModel)]=\"slotDuration\" name =\"slotDuration\" placeholder=\"slotDuration\" value=\"\" name=\"slotDuration\" />\n\n                </p>\n\n                <p class = \"contact-submit\">\n                <button  class=\"button\" style= \" margin-left:250px !important;\"type=\"submit\">Submit</button>\n                </p>\n\n\n\n\n\n\n                      <div id=\"response\">\n\n                      </div>\n               </form>\n\n        </div>\n                </div>\n"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "<div id=\"home-slider\">\n    <div class=\"overlay\"></div>\n\n    <div class=\"slider-text\">\n    \t<div></div>\n    </div>\n\n\t<div class=\"control-nav\">\n        <a id=\"prevslide\" class=\"load-item\"><i class=\"font-icon-arrow-simple-left\"></i></a>\n        <a id=\"nextslide\" class=\"load-item\"><i class=\"font-icon-arrow-simple-right\"></i></a>\n        <ul id=\"slide-list\"></ul>\n\n        <a id=\"nextsection\" href=\"#work\"><i class=\"font-icon-arrow-simple-down\"></i></a>\n    </div>\n</div>\n<div id=\"work\" class=\"page\">\n\t<div class=\"container\">\n  <div class=\"row\">\n            <div class=\"span12\">\n                <div class=\"title-page\">\n                    <h3 class=\"title\" style=\"font-weight:bolder;\">Welcome To The Admin Page</h3>\n                </div>\n            </div>\n        </div>\n    \t\n        <div class=\"row\">\n        \n            <div class=\"span6\">\n                \n                <div class=\"tabbable\">\n                \n                    <ul class=\"nav nav-tabs\" id=\"myTab\">\n                        <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Providers</a></li>\n                        <li><a (click)=\"ViewClients()\" href=\"#tab2\" data-toggle=\"tab\">Clients</a></li>\n                        <li ><a  href=\"#tab3\" data-toggle=\"tab\">Applications</a> </li>\n\n                    </ul>\n                 \n                    <div class=\"tab-content\" style=\"width:1125px;\">\n                        <div class=\"tab-pane fade in active\" id=\"tab1\">\n                             <ul style=\"list-style: none;\">\n                               <li *ngFor=\"let provider of providers\" style=\"display:inline-block !important; margin-right:15px; \">\n                               <div class=\"col-md-3\">\n                                   <p style=\"color:#FFFFFF\">Name: {{provider.firstname}} {{provider.lastname}}<br>\n                                   Email: {{provider.email}}<br>Birthdate: {{provider.birthdate}}<br><button\n                                    (click)=\"onRemoveProvider($event)\" class=\"button button-mini\" value={{provider._id}}>Remove</button></p>\n                                   </div>\n                               </li>\n\n                           </ul>      \n                        </div>\n                        <div class=\"tab-pane fade in\" id=\"tab2\">\n                           <ul style=\"list-style: none;\">\n                               <li *ngFor=\"let client of clients\" style=\"display:inline-block !important; margin-right:15px; \">\n                               <div class=\"col-md-3\">\n                                   <p style=\"color:#FFFFFF\">Name: {{client.firstname}} {{client.lastname}}<br>\n                                   Email: {{client.email}}<br>Address: {{client.address}}<br>Credit-Card Information: {{client.creditcardinfo}}<br>Birthdate: {{client.birthdate}}<br>Banned: <input style=\"background-color:rgba(0,0,0,0) !important;\n       border:none !important; color:#7F8289; width:30px; font-size:15px; color:#FFFFFF\" [(ngModel)]=\"client.isBanned\"> <br><button *ngIf=\"!client.isBanned\" (click)=\"BanOrUnban($event,0)\" class=\"button button-mini\" value={{client._id}}>Ban</button><button *ngIf=\"client.isBanned\"  \n       (click)=\"BanOrUnban($event,1)\" class=\"button button-mini\" value={{client._id}}>UnBan</button></p>\n                                   </div>\n                               </li>\n\n                           </ul>\n                        </div>\n                        <div class=\"tab-pane fade in\" id=\"tab3\">\n                         <ul style=\"list-style: none;\">\n                              <li *ngFor=\"let application of applications\">\n                                <div class=\"col-md-3\">\n                                    <p style=\"color:#FFFFFF\">Business Name: {{application.businessName}}\n                                    <br>\n                                    <button  (click)=\"acceptOrDecline($event,1)\" class=\"button button-mini\" value={{application.businessName}}>Accept</button>\n                                    <button (click)=\"acceptOrDecline($event,0)\" class=\"button button-mini\" value={{application.businessName}}>Decline</button>\n                                    </p>\n                                </div>\n                              </li>\n                       </ul>\n                    </div>\n                        \n                    </div>\n                            \n                </div>\n            </div>\n        </div>\n\n\n    </div>\n</div>\n\n"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isDeclined()\">\n<div class=\"container\">\n    <div class=\"row\">\n      <br><br><br><br>\n      <div class=\"span4 profile\">\n          <img style = \"height:300px;\" src={{business.profilepicture}}>\n      </div>\n\n      <div class=\"span6 profile\">\n          <h1 class=\"title\" style=\"text-align: center;\"><span class=\"color-text\">{{business.businessName}}  </span><a [routerLink]=\"['/EditBpProfile']\"><span class=\"font-icon-edit\"></span></a>\n</h1>\n\n                <!-- Start Toggle -->\n                <div class=\"accordion\" id=\"toggleArea\">\n\n                  <div class=\"accordion-group\">\n                        <div class=\"accordion-heading togglize\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#\" href=\"#collapseZero\">\n                                Personal Information\n                                <span class=\"font-icon-plus\"></span>\n                                <span class=\"font-icon-minus\"></span>\n                            </a>\n                        </div>\n                        <div id=\"collapseZero\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                <h4 class=\"profile-name\">Username: {{user.username}}<br>\n                        Name: {{providerFirstname}} {{providerLastname}}<br>\n                        Email: {{providerEmail}} <br> Birthdate: {{providerBirthdate}} </h4>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"accordion-group\">\n                        <div class=\"accordion-heading togglize\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#\" href=\"#collapseOne\">\n                                Description\n                                <span class=\"font-icon-plus\"></span>\n                                <span class=\"font-icon-minus\"></span>\n                            </a>\n                        </div>\n                        <div id=\"collapseOne\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                {{business.description}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"accordion-group\">\n                        <div class=\"accordion-heading togglize\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#\" href=\"#collapseTwo\">\n                               General Info\n                            <span class=\"font-icon-plus\"></span>\n                            <span class=\"font-icon-minus\"></span>\n                        </a>\n                        </div>\n                        <div id=\"collapseTwo\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                {{business.info}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"accordion-group\">\n                        <div class=\"accordion-heading togglize\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#\" href=\"#collapseThird\">\n                            Contact Info\n                            <span class=\"font-icon-plus\"></span>\n                            <span class=\"font-icon-minus\"></span>\n                        </a>\n                        </div>\n                        <div id=\"collapseThird\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                Phone  :  {{business.phone}}\n                                <br>\n                                Location :  {{business.location}}\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- End Toggle -->\n      </div>\n\n    </div>\n    <br>\n\n    <div class=\"row\">\n            <div class=\"span12\">\n                <hr>\n            </div>\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"tabbable\">\n\n      <ul class=\"nav nav-tabs\" id=\"myTab\">\n         <li class=\"active\"><a  href=\"#viewall\" data-toggle=\"tab\">All Businesses</a></li>\n         <li><a  (click)=\"topBusinesses()\" href=\"#viewtop\" data-toggle=\"tab\">Top 10 Businesses</a></li>\n          <li><a (click)=\"ViewService()\" href=\"#services\" data-toggle=\"tab\">Services</a></li>\n          <li><a (click)=\"ViewReviews()\" href=\"#reviews\" data-toggle=\"tab\">Reviews</a></li>\n          <li><a (click)=\"viewquestions()\" href=\"#questions\" data-toggle=\"tab\">Questions</a></li>\n          <li><a  href=\"#announcements\" data-toggle=\"tab\">Announcements</a></li>\n          <li><a (click) = \"searchForBusiness()\" href=\"#search\" data-toggle=\"tab\">Search</a></li>\n\n\n      </ul>\n\n      <div class=\"tab-content\" style=\"width:1300px;\">\n          <div class=\"tab-pane fade in\" id=\"services\">\n              <br>\n            <ul>\n              <div *ngFor=\"let service of services\">\n\n                 <div class=\"span4 profile\">\n\n                        <img style=\"max-width:100%; max-height:100%;\" src=\"{{service.picture}}\" >\n                    <h4 class=\"profile-name\">Name: {{service.name}}<br>\n                    Description: {{service.description}}<br>Price: {{service.price}}<br><button (click)=\"getServiceID($event)\" class=\"button button-mini\" value={{service._id}} [routerLink]=\"['/EditService']\">Edit</button>\n                    <button (click)=\"DeleteService($event)\" class=\"button button-mini\" value={{service._id}}>Delete</button>\n                    </h4><br>\n                    <br><br><br><br>\n\n                </div>\n\n              </div>\n\n            </ul>\n            <button class=\"button button-small\" [routerLink]=\"['/AddService']\"> Add Service</button>\n\n          </div>\n\n\n\n          <div class=\"tab-pane fade in\" id=\"questions\">\n              <br><br>\n             <ul>\n\n                <div class=\"container\" *ngFor=\"let question of questions\">\n                 <!--   <li style = \"float: left; margin-left: 10px;\" >  -->\n                            <!-- Start Blockquote -->\n                            <div class=\"span5\" *ngIf=\"!question.answer\">\n                                <h4 class=\"spec\">Question</h4>\n\n                                <blockquote>\n                                    <p>{{question.question}}</p>\n                                    <small>\n                                        <cite>Anonymous</cite>\n                                    </small>\n                                </blockquote>\n                                <button type=\"submit\" class =\"button\" value={{question._id}} (click) = \"onButtonClicked2($event)\" >Answer</button>\n\n                            </div>\n\n                            <!-- End Blockquote -->\n\n                            <!-- Start Tooltip -->\n                            <div class=\"span5\" *ngIf=\"!question.answer\">\n                                <h4 class=\"spec\">{{business.businessName}}'s Answer</h4>\n\n                                <p class=\"profile-description\">{{question.answer}}</p>\n\n                            </div>\n                          </div>\n\n                          <div [(ngModel)]=\"help\" name=\"help\" ngDefaultControl *ngIf=\"help\">\n             <button type=\"submit\" class =\"button\" [(ngModel)]=\"x\" name=\"x\"value={{x}} ngDefaultControl (click) = \"onButtonClicked3($event)\" >Submit</button>\n                          <input type=\"text\"[(ngModel)]=\"answer\" name=\"answer\" class=\"form-control\">\n\n             </div>\n                            <!-- End Tootlip -->\n                 <!--   </li>  -->\n\n\n\n\n             </ul>\n\n          </div>\n\n\n          <div class=\"tab-pane fade in\" id=\"reviews\">\n             <ul>\n                 <div *ngFor=\"let review of reviews\">\n                 <!--   <li style = \"float: left; margin-left: 10px;\" >  -->\n                        <div class=\"row\">\n                            <!-- Start Blockquote -->\n                            <div class=\"span9\">\n\n                                <blockquote>\n                                    <p>{{review.description}}</p>\n                                    <small>\n                                        <cite>By: {{review.name}}</cite>\n                                    </small>\n                                </blockquote>\n</div>\n       </div>\n               </div>\n             </ul>\n          </div>\n\n\n\n          <div class=\"tab-pane fade in\" id=\"announcements\">\n                    <div class=\"span9\" *ngFor=\"let announcement of announcements;let i =index\">\n                                <h4 class=\"profile-description\">{{announcement}}<br><button (click)=\"deleteAnnouncement(i)\" class=\"button button-mini\" >Delete</button></h4>\n                    </div>\n\n                    <div class=\"span9\">\n                            <p id=\"contact-form\">\n                              <textarea style=\"background-color: #1f2021;\"  id=\"contact_message\" placeholder=\"Type Announcement Here...\" [(ngModel)]=\"newAnnouncement\" name=\"newAnnouncement\" rows=\"10\" cols=\"70\"></textarea>\n                            </p>\n                            <p class=\"contact-submit\">\n                              <button (click)=\"postAnnouncement()\" class=\"button button-mini\" >Post</button>\n                            </p>\n\n                    </div>\n\n          </div>\n          <div class=\"tab-pane fade in active\" id=\"viewall\">\n                        <ul style=\"list-style: none;\">\n                        <div *ngFor=\"let business of businesses\">\n                                <li style = \"float: left; margin-left: 10px;\" >\n                                <br>\n                                    <figure> <img style = \"height:300px !important;width:200px !important;\" src={{business.profilepicture}}>\n                                        <br>\n                                            Name: {{business.businessName}} <br>\n                                            Rating: {{business.rating}} <br>\n                                            Description: {{business.description}} <br>\n                                            location: {{business.location}}\n                                        <figcaption><button class =\"button\" value={{business._id}} (click) = \"onButtonClicked($event)\">More Details</button></figcaption>\n                                    </figure>\n                                </li>\n\n                        </div>\n                        </ul>\n                        </div>\n                        <div class=\"tab-pane fade in\" id=\"viewtop\">\n                         <ul style=\"list-style: none;\">\n                        <div *ngFor=\"let TopBusiness of TopBusinesses\">\n                        <li style = \"float: left; margin-left: 10px;\" >\n                        <br>\n                           <figure> <img style = \"height:300px !important;width:200px !important;\" src={{TopBusiness.profilepicture}}>\n                           <br>\n                             Name: {{TopBusiness.businessName}} <br>\n                             Rating: {{TopBusiness.rating}} <br>\n                             Description: {{TopBusiness.info}} <br>\n                             location: {{TopBusiness.location}}\n                           <figcaption><button class =\"button\" value={{TopBusiness._id}} (click) = \"onButtonClicked($event)\">More Details</button></figcaption>\n                           </figure>\n                           </li>\n                        </div>\n                        </ul>\n                        </div>\n                        <div class=\"tab-pane fade in\" id=\"search\">\n\n                              <form (submit)=\"searchForBusiness($event)\">\n                                  <div class=\"form-group\">\n                                      <input class=\"form-control\" type=\"text\" placeholder=\"Search.. \" [(ngModel)]=\"search\" name=\"search\"/>\n                                  </div>\n                              </form>\n\n                                <div *ngFor=\"let searchedBusiness of searchedBusinesses\">\n\n                                        <figure> <img style = \"height:300px !important;width:200px !important;\" src={{searchedBusiness.profilepicture}}>\n                                            <br>\n                                                Name: {{searchedBusiness.businessName}} <br>\n                                                Rating: {{searchedBusiness.rating}} <br>\n                                                Description: {{searchedBusiness.info}} <br>\n                                                location: {{searchedBusiness.location}}\n                                            <figcaption><button class =\"button\" value={{searchedBusiness._id}} (click) = \"onBusinessClicked($event)\">Learn More</button></figcaption>\n                                        </figure>\n                                        <br>\n\n\n                                </div>\n                        </div>\n\n\n\n\n            </div>\n\n        </div>\n    </div>\n  </div>\n</div>\n<div id=\"work\" class=\"page\" *ngIf=\"isDeclined()\">\n\n    <div class=\"container\">\n        <!-- Title Page -->\n        <div class=\"row\">\n            <div class=\"span12\">\n                <div class=\"title-page\">\n                    <h2 class=\"title\" style=\"color:red;\">Your Application Has Been Declined</h2>\n                </div>\n            </div>\n        </div>\n        <div class=\"span9\" style=\"width:1000px;\">\n\n\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading accordionize\">\n                    <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordionArea\" href=\"#oneArea\">\n                        Create Another Business\n                        <span class=\"font-icon-arrow-simple-down\"></span>\n                    </a>\n                </div>\n                <div id=\"oneArea\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\" style=\"width:1200px !important; margin-left:-25px !important; background:none;\">\n                      <form id=\"contact-form\"  (submit) = \"onClickCreate()\">\n                        <p class=\"contact-name\">\n                          <input id=\"contact_name\" type=\"text\" placeholder=\"Business Name\" [(ngModel)] =\"businessName\" value=\"\" name=\"businessName\" />\n                          </p>\n                          <p class=\"contact-name\">\n                            <input id=\"contact_name\" type=\"text\" placeholder=\"Location\" [(ngModel)] =\"location\" value=\"\" name=\"locaion\" />\n                            </p>\n                            <p class=\"contact-name\">\n                              <input id=\"contact_name\" type=\"text\" placeholder=\"Phone Number\" [(ngModel)] =\"phoneNumber\" value=\"\" name=\"phoneNumber\" />\n                              </p>\n                              <p class=\"contact-name\">\n                                <input id=\"contact_name\" type=\"text\" placeholder=\"Business Description\" [(ngModel)] =\"description\" value=\"\" name=\"description\" />\n                                </p>\n                                <p class=\"contact-name\">\n                                  <input id=\"contact_name\" type=\"text\" placeholder=\"Business Info\" [(ngModel)] =\"info\" value=\"\" name=\"info\" />\n                                  </p>\n                          <p class=\"contact-submit\">\n                              <button type=\"submit\"  class=\"button\">Create Business</button>\n                            </p>\n\n                          <div id=\"response\">\n\n                          </div>\n                      </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "<div id=\"home-slider\">\n    <div class=\"overlay\"></div>\n\n    <div class=\"slider-text\">\n        <div></div>\n    </div>\n\n    <div class=\"control-nav\">\n        <a id=\"prevslide\" class=\"load-item\"><i class=\"font-icon-arrow-simple-left\"></i></a>\n        <a id=\"nextslide\" class=\"load-item\"><i class=\"font-icon-arrow-simple-right\"></i></a>\n        <ul id=\"slide-list\"></ul>\n\n        <a id=\"nextsection\" href=\"#work\"><i class=\"font-icon-arrow-simple-down\"></i></a>\n    </div>\n</div>\n<div id=\"work\" class=\"page\">\n    <div class=\"container\">\n        <!-- Title Page -->\n\n        <!-- End Title Page -->\n\n        <!-- Portfolio Projects -->\n        <div>\n              <h1 class=\"title\" style=\"text-align: center;\"><span class=\"color-text\">{{profilefirstname}}  </span><a [routerLink]=\"['/editProfile']\"><span class=\"font-icon-edit\"></span></a>\n        </h1>\n                <div class=\"tabbable\">\n\n                    <ul class=\"nav nav-tabs\" style=\"width:1300px;\" id=\"myTab\">\n                        <li class=\"active\"><a href=\"#viewall\" data-toggle=\"tab\">All Businesses</a></li>\n                        <li><a (click) = \"topBusinesses()\" href=\"#viewtop\" data-toggle=\"tab\">Top 10 Businesses</a></li>\n\n                        <li><a (click) = \"searchForBusiness()\" href=\"#search\" data-toggle=\"tab\">Search</a></li>\n\n\n                    </ul>\n\n                    <div class=\"tab-content\" style=\"width:1300px !important;\">\n                        <div class=\"tab-pane fade in active\" id=\"viewall\">\n                        <ul style=\"list-style: none;\">\n                        <div *ngFor=\"let business of businesses\">\n                                <li style = \"float: left; margin-left: 10px;\" >\n                                <br>\n                                    <figure> <img style = \"height:300px !important;width:200px !important;\" src={{business.profilepicture}}>\n                                        <br>\n                                            Name: {{business.businessName}} <br>\n                                            Rating: {{business.rating}} <br>\n                                            Description: {{business.description}} <br>\n                                            location: {{business.location}}\n                                        <figcaption><button class =\"button\" value={{business._id}} (click) = \"onButtonClicked($event)\">More Details</button></figcaption>\n                                    </figure>\n                                </li>\n\n                        </div>\n                        </ul>\n                        </div>\n\n                        <div class=\"tab-pane fade in\" id=\"viewtop\">\n                         <ul style=\"list-style: none;\">\n                        <div *ngFor=\"let TopBusiness of TopBusinesses\">\n                        <li style = \"float: left; margin-left: 10px;\" >\n                        <br>\n                           <figure> <img style = \"height:300px !important;width:200px !important;\" src={{TopBusiness.profilepicture}}>\n                           <br>\n                             Name: {{TopBusiness.businessName}} <br>\n                             Rating: {{TopBusiness.rating}} <br>\n                             Description: {{TopBusiness.info}} <br>\n                             location: {{TopBusiness.location}}\n                           <figcaption><button class =\"button\" value={{TopBusiness._id}} (click) = \"onButtonClicked($event)\">More Details</button></figcaption>\n                           </figure>\n                           </li>\n                        </div>\n                        </ul>\n                        </div>\n\n\n\n\n\n\n\n\n                        <div class=\"tab-pane fade in\" id=\"search\">\n\n                              <form (submit)=\"searchForBusiness($event)\">\n                                  <div class=\"form-group\">\n                                      <input class=\"form-control\" type=\"text\" placeholder=\"Search.. \" [(ngModel)]=\"search\" name=\"search\"/>\n                                  </div>\n                              </form>\n\n                                <div *ngFor=\"let searchedBusiness of searchedBusinesses\">\n\n                                        <figure> <img style = \"height:300px !important;width:200px !important;\" src={{searchedBusiness.profilepicture}}>\n                                            <br>\n                                                Name: {{searchedBusiness.businessName}} <br>\n                                                Rating: {{searchedBusiness.rating}} <br>\n                                                Description: {{searchedBusiness.info}} <br>\n                                                location: {{searchedBusiness.location}}\n                                            <figcaption><button class =\"button\" value={{searchedBusiness._id}} (click) = \"onBusinessClicked($event)\">Learn More</button></figcaption>\n                                        </figure>\n                                        <br>\n\n\n                                </div>\n                        </div>\n\n\n                    </div>\n\n                </div>\n            </div>\n    </div>\n</div>\n\n\n\n<!-- Contact Section -->\n\n<!-- End Contact Section -->\n"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "<div id=\"work\" class=\"page\">\n\n<!-- Contact Section -->\n<div id=\"contact\" class=\"page\">\n<div class=\"container\">\n    <!-- Title Page -->\n    <div class=\"row\">\n        <div class=\"span12\">\n            <div class=\"title-page\">\n                <h2 class=\"title\">Edit Your Profile</h2>\n            </div>\n        </div>\n    </div>\n    <!-- End Title Page -->\n\n    <!-- Contact Form -->\n    <div class=\"row\">\n    \t<div class=\"span3\">\n        \t<div class=\"contact-details\">\n        \t\t<h3>Your Profile</h3>\n                <ul>\n\n                    <li>Username: {{Cusername}}</li>\n                    <li>Email: {{Cemail}}</li>\n                    <li>Business Name: {{CbName}}</li>\n                    <li>location: {{Clocation}}</li>\n                    <li>Phone Number: {{Cphone}}</li>\n                    <li>Information: {{Cinfo}}</li>\n                    <li>Information: {{Cinfo}}</li>\n\n                </ul>\n            </div>\n        </div>\n\n      <div class=\"span9\">\n<!--edit P form -->\n        \t<form (submit)=\"onEditPSubmit()\" id=\"contact-form\" class=\"contact-form\" >\n            \t<p class=\"contact-pass\">\n                \t<input id=\"contact_pass\" type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" value=\"\" name=\"password\" />\n                </p>\n                <p class=\"contact-email\">\n                \t<input id=\"contact_email\" type=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\" value=\"\" name=\"email\" />\n                </p>\n                <p class=\"contact-bName\">\n            \t\t<input id=\"contact_bName\" type=\"text\" [(ngModel)]=\"bName\" placeholder=\"Business Name\" value=\"\" name=\"bName\" />\n                </p>\n                <p class=\"contact-location\">\n            \t\t<input id=\"contact_location\" type=\"text\" [(ngModel)]=\"location\" placeholder=\"Location\" value=\"\" name=\"location\" />\n                </p>\n                <p class=\"contact-phone\">\n            \t\t<input id=\"contact_phone\" type=\"number\" [(ngModel)]=\"phone\" placeholder=\"Phone Number\" value=\"\" name=\"phone\" />\n                </p>\n\n              <p class=\"contact-info\">\n                \t<textarea id=\"contact_info\" type=\"text\" [(ngModel)]=\"info\" placeholder=\"Your Information\" name=\"info\" rows=\"15\" cols=\"40\"></textarea>\n                </p>\n\n                <p class=\"contact-submit\">\n                \t<!--a id=\"contact-submit\" class=\"submit\" href=\"#\">Save Your Changes</a-->\n                  <input type =\"submit\" class = \"submit\" value = \"Save Your Changes\">\n                </p>\n\n                <div id=\"response\">\n\n                </div>\n            </form>\n\n\n\n\n\n\n\n<!--/end form -->\n        </div>\n\n\n    </div>\n    <!-- End Contact Form -->\n</div>\n</div>\n<!-- End Contact Section -->\n"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "<div id=\"work\" class=\"page\">\n\n<!-- Contact Section -->\n<div id=\"contact\" class=\"page\">\n<div class=\"container\">\n    <!-- Title Page -->\n    <div class=\"row\">\n        <div class=\"span12\">\n            <div class=\"title-page\">\n                <h2 class=\"title\">Edit Your Profile</h2>\n            </div>\n        </div>\n    </div>\n    <!-- End Title Page -->\n\n    <!-- Contact Form -->\n    <div class=\"row\">\n        <div class=\"span3\">\n            <div class=\"contact-details\">\n                <h3>Your Profile</h3>\n                <ul>\n\n                    <li>Username: {{Cusername}}</li>\n                    <li>First Name: {{CFirstname}}</li>\n                    <li>Last Name: {{CLastname}}</li>\n                    <li>Email: {{Cemail}}</li>\n                    <li>Address: {{Clocation}}</li>\n                    <li>Phone Number: {{Cphone}}</li>\n                    <li>CreditCard: {{CCreditCardInfo}}</li>\n                    <li>Birthdate: {{Cbdate}}</li>\n\n                </ul>\n            </div>\n        </div>\n        <div class=\"span6\">\n                <div class=\"tabbable\">\n\n                    <ul class=\"nav nav-tabs\" style=\"width:1300px;\" id=\"myTab\">\n                          <li class=\"active\"><a  href=\"#editProfile\" data-toggle=\"tab\">Edit Profile </a></li>\n                        <li><a href=\"#changePassword\" data-toggle=\"tab\">change password</a></li>\n                    </ul>\n\n                    <div class=\"tab-content\" style=\"width:1300px !important;\">\n\n                        <div class=\"tab-pane fade in\" id=\"changePassword\">\n                       <ul>\n                        <div >\n                            <form (submit)=\"onClientsChangePasswordSubmit()\" id=\"contact-form\" class=\"contact-form\" >\n                <p class=\"contact-Uname\">\n                    <input id=\"contact_Uname\" type=\"password\" [(ngModel)]=\"currentPassword\" placeholder=\"Current Password\" value=\"\" name=\"currentPassword\" />\n                </p>\n                <p class=\"contact-pass\">\n                    <input id=\"contact_pass\" type=\"password\" [(ngModel)]=\"newPassword\" placeholder=\"New Password\" value=\"\" name=\"newPassword\" />\n                </p>\n\n                <p class=\"contact-phone\">\n                    <input id=\"contact_phone\" type=\"password\" [(ngModel)]=\"newPasswordValidation\" placeholder=\"New Password Validation\" value=\"\" name=\"newPasswordValidation\" />\n                </p>\n                <p class=\"contact-submit\">\n                    <!--a id=\"contact-submit\" class=\"submit\" href=\"#\">Save Your Changes</a-->\n                  <input type =\"submit\" class = \"submit\" value = \"Save Your Changes\">\n                </p>\n\n                <div id=\"response\">\n\n                </div>\n            </form>\n                        </div>\n                       </ul>\n                        </div>\n\n\n                        <div class=\"tab-pane fade in active\" id=\"editProfile\">\n                        <div>\n                        <form (submit)=\"onClientseditProfileSubmit()\" id=\"contact-form\"  >\n                <p class=\"contact-Uname\">\n                    <input id=\"contact_Uname\" type=\"text\" [(ngModel)]=\"Firstname\" placeholder=\"First Name\" value=\"\" name=\"Firstname\" />\n                </p>\n                <p class=\"contact-pass\">\n                    <input id=\"contact_pass\" type=\"text\" [(ngModel)]=\"Lastname\" placeholder=\"Last Name\" value=\"\" name=\"Lastname\" />\n                </p>\n\n                <p class=\"contact-email\">\n                    <input id=\"contact_email\" type=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\" value=\"\" name=\"email\" />\n                </p>\n                <p class=\"contact-bName\">\n                    <input id=\"contact_bName\" type=\"text\" [(ngModel)]=\"creditCArdInfo\" placeholder=\"Credit Card Info\" value=\"\" name=\"creditCArdInfo\" />\n                </p>\n                <p class=\"contact-location\">\n                    <input id=\"contact_location\" type=\"text\" [(ngModel)]=\"address\" placeholder=\"address\" value=\"\" name=\"address\" />\n                </p>\n                <p class=\"contact-phone\">\n                    <input id=\"contact_phone\" type=\"text\" [(ngModel)]=\"phone\" placeholder=\"Phone Number\" value=\"\" name=\"phone\" />\n                </p>\n                <p class=\"contact-date\">\n                    <input id=\"contact_date\" type=\"date\" [(ngModel)]=\"birthdate\" placeholder=\"Birthdate\" value=\"\" name=\"birthdate\" />\n                </p>\n\n\n\n                <p class=\"contact-submit\">\n                    <!--a id=\"contact-submit\" class=\"submit\" href=\"#\">Save Your Changes</a-->\n                  <input type =\"submit\" class = \"submit\" value = \"Save Your Changes\">\n                </p>\n\n                <div id=\"response\">\n\n                </div>\n            </form>\n                        </div>"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"formtitle\" >Edit This Service</h1>\n<form id=\"contact-form\" class=\"contact-form\" (submit)=\"onEditSubmit()\">\n              <p class=\"contact-name\">\n                <input autocomplete=\"off\" id=\"contact_name\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"name\"  name=\"name\" />\n                </p>\n                <p class=\"contact-email\">\n                  <input autocomplete=\"off\" id=\"contact_name\" type=\"text\" placeholder=\"Price\"  [(ngModel)]=\"price\" name=\"price\" />\n                </p>\n                <p class=\"contact-message\">\n                  <textarea autocomplete=\"off\" id=\"contact_message\" placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\" rows=\"15\" cols=\"40\"></textarea>\n                </p>\n                <p class=\"contact-submit\">\n                  <button class=\"button button-mini submit\">Done</button>\n                </p>\n\n                <div id=\"response\">\n\n                </div>\n            </form>\n"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n      <br><br><br><br>\n      <!--div class=\"span4 profile\">\n          <img style = \"height:300px;\" src={{business.profilepicture}}>\n      </div-->\n\n      <div class=\"span6 profile\">\n          <h1 class=\"title\" style=\"text-align: center;\"><span class=\"color-text\">{{name}}</span></h1>\n\n            \t<!-- Start Toggle -->\n                <div class=\"accordion\" id=\"toggleArea\">\n\n                    <div class=\"accordion-group\">\n                        <div class=\"accordion-heading togglize\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#\" href=\"#collapseOne\">\n                                Description\n                                <span class=\"font-icon-plus\"></span>\n                                <span class=\"font-icon-minus\"></span>\n                            </a>\n                        </div>\n                        <div id=\"collapseOne\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                {{desc}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"accordion-group\">\n                        <div class=\"accordion-heading togglize\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#\" href=\"#collapseTwo\">\n                               General Info\n                            <span class=\"font-icon-plus\"></span>\n                            <span class=\"font-icon-minus\"></span>\n                        </a>\n                        </div>\n                        <div id=\"collapseTwo\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                {{inf}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"accordion-group\">\n                        <div class=\"accordion-heading togglize\">\n                            <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#\" href=\"#collapseThird\">\n                            Contact Info\n                            <span class=\"font-icon-plus\"></span>\n                            <span class=\"font-icon-minus\"></span>\n                        </a>\n                        </div>\n                        <div id=\"collapseThird\" class=\"accordion-body collapse\">\n                            <div class=\"accordion-inner\">\n                                Phone  :  {{ph}}\n                                <br>\n                                Location :  {{loc}}\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <!-- End Toggle -->\n      </div>\n\n    </div>\n    <br>\n\n    <div class=\"row\">\n        \t<div class=\"span12\">\n            \t<hr>\n            </div>\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"tabbable\">\n\n      <ul class=\"nav nav-tabs\" id=\"myTab\">\n          <li class=\"active\"><a href=\"#services\" data-toggle=\"tab\">Services</a></li>\n          <li><a  href=\"#reviews\" data-toggle=\"tab\">Reviews</a></li>\n          <li><a  href=\"#questions\" data-toggle=\"tab\">Questions</a></li>\n          <li><a  *ngIf=isClient() href=\"#rate\" data-toggle=\"tab\">Rate</a></li>\n      </ul>\n\n      <div class=\"tab-content\" style=\"width:1185px;\">\n          <div class=\"tab-pane fade in active\" id=\"services\">\n              <br>\n            <ul>\n              <div *ngFor=\"let service of services\">\n\n                 <div class=\"span4 profile\">\n\n                        <img style=\"max-width:100%; max-height:100%;\" src=\"{{service.picture}}\" >\n                    <h4 class=\"profile-name\">Name: {{service.name}}<br>\n                    Description: {{desc}}<br>\n                    Price: {{service.price}}</h4>\n                    <button *ngIf=\"isClient()\" class=\"button\" target=\"_blank\" value={{service._id}} (click)=\"reserveSlot($event)\">Reserve a slot</button>\n                    <br><br><br><br>\n\n                </div>\n\n              </div>\n            </ul>\n          </div>\n\n\n\n          <div class=\"tab-pane fade in\" id=\"questions\">\n              <br><br>\n             <ul>\n                <div class=\"container\" *ngFor=\"let question of questions\">\n                 <!--   <li style = \"float: left; margin-left: 10px;\" >  -->\n                        <div class=\"row\">\n                            <!-- Start Blockquote -->\n                            <div class=\"span5\">\n                                <h4 class=\"spec\">Question</h4>\n\n                                <blockquote>\n                                    <p>{{question.question}}</p>\n                                    <small>\n                                        <cite title=\"John Bostic\">A Client</cite>\n                                    </small>\n                                </blockquote>\n                            </div>\n                            <!-- End Blockquote -->\n\n                            <!-- Start Tooltip -->\n                            <div class=\"span5\">\n                                <h4 class=\"spec\">{{name}}'s Answer</h4>\n\n                                <p class=\"profile-description\">{{question.answer}}</p>\n\n                            </div>\n                            <!-- End Tootlip -->\n                        </div>\n                 <!--   </li>  -->\n\n                    <div class=\"row\">\n                            <div class=\"span12\">\n                                <hr>\n                            </div>\n                    </div>\n\n                </div>\n             </ul>\n             <div class=\"span9\">\n\n         <form id=\"contact-form\" class=\"contact-form\" *ngIf=\"isClient()\" (submit)=\"askQuestion(question)\">\n             <p class=\"contact-message\">\n                 <textarea id=\"contact_message\" placeholder=\"Have a question?\" type=\"text\" name=\"question\" [(ngModel)] =\"question\" rows=\"3\" cols=\"20\"></textarea>\n               </p>\n               <p class=\"contact-submit\">\n                 <button class=\"button\" type=\"submit\" id=\"contact_submit\">Ask Question</button>\n               </p>\n           </form>\n\n       </div>\n          </div>\n\n\n          <div class=\"tab-pane fade in\" id=\"reviews\">\n             <ul>\n                <div *ngFor=\"let review of reviews\">\n              <!--       <li style = \"float: left; margin-left: 10px;\" >    -->\n                       <div class=\"span9\">\n\n                                <blockquote>\n                                    <p>{{review.description}}</p>\n                                    <small>\n                                        <cite>By: {{review.name}}</cite>\n                                    </small>\n                                </blockquote>\n                      </div>\n                <!--    </li>   -->\n                    <br>\n                </div>\n\n             </ul>\n\n\n           <div class=\"container\" *ngIf=\"isClient()\">\n\n                 <form id=\"contact-form\"  (submit)=\"postReview()\" >\n                 \t<p class=\"contact-message\">\n                 \t\t<textarea id=\"contact_message\" [(ngModel)]=\"newReview\" placeholder=\"Your Review..\" name=\"newReview\" rows=\"15\" cols=\"40\"></textarea>\n                 \t</p>\n                 \t<p class=\"contact-submit\">\n                 \t\t<button  class=\"button\" type=\"submit\" >Post</button>\n                 \t</p>\n\n                 \t<div id=\"response\">\n\n                 \t</div>\n                 </form>\n\n           </div>\n\n\n          </div>\n\n\n          <div class=\"tab-pane fade in\" id=\"announcements\">\n                    <div *ngFor=\"let announcement of announcements\">\n                                <h4 class=\"profile-description\">{{announcement}}</h4>\n                    </div>\n          </div>\n          <div class=\"tab-pane fade in \" id=\"rate\">\n              <br>\n            <ul>\n\n                 <div class=\"span4 profile\">\n\n                        <style>\n    @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\n\nfieldset, label { margin: 0; padding: 0; }\nbody{ margin: 20px; }\nh1 { font-size: 1.5em; margin: 10px; }\n\n/****** Style Star Rating Widget *****/\n\n.rating {\n  border: none;\n  float: left;\n}\n\n.rating > input { display: none; }\n.rating > label:before {\n  margin: 5px;\n  font-size: 1.25em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\f005\";\n}\n\n.rating > .half:before {\n  content: \"\\f089\";\n  position: absolute;\n}\n\n.rating > label {\n  color: #ddd;\n float: right;\n}\n\n/***** CSS Magic to Highlight Stars on Hover *****/\n\n.rating > input:checked ~ label, /* show gold star when clicked */\n.rating:not(:checked) > label:hover, /* hover current star */\n.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */\n\n.rating > input:checked + label:hover, /* hover current star when changing rating */\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label, /* lighten current selection */\n.rating > input:checked ~ label:hover ~ label { color: #FFED85;  }\n    </style>\n                                <h1></h1>\n<fieldset class=\"rating\">\n    <input (click) = \"onRate(5)\" type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n    <input (click) = \"onRate(4)\" type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n    <input (click) = \"onRate(3)\" type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n    <input (click) = \"onRate(2)\" type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n    <input (click) = \"onRate(1)\" type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n</fieldset>\n\n\n                </div>\n\n\n            </ul>\n          </div>\n\n\n\n\n\n    </div>\n\n    </div>\n   </div>\n   <div id=\"response\">\n\n                </div>\n</div>\n"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = "<div id=\"home-slider\">\n    <div class=\"overlay\"></div>\n\n    <div class=\"slider-text\">\n        <div></div>\n    </div>\n\n    <div class=\"control-nav\">\n        <a id=\"prevslide\" class=\"load-item\"><i class=\"font-icon-arrow-simple-left\"></i></a>\n        <a id=\"nextslide\" class=\"load-item\"><i class=\"font-icon-arrow-simple-right\"></i></a>\n        <ul id=\"slide-list\"></ul>\n\n        <a id=\"nextsection\" href=\"#work\"><i class=\"font-icon-arrow-simple-down\"></i></a>\n    </div>\n</div>\n<div id=\"work\" class=\"page\">\n    <div class=\"container\">\n        <!-- Title Page -->\n        <div class=\"row\">\n            <div class=\"span12\">\n                <div class=\"title-page\">\n                    <h2 class=\"title\">Okhrog.com</h2>\n                    <h3 class=\"title-description\"> Suggested outings. </h3>\n                </div>\n            </div>\n        </div>\n        <!-- End Title Page -->\n\n        <!-- Portfolio Projects -->\n        <div class=\"span6\">\n\n                <div class=\"tabbable\">\n\n                    <ul class=\"nav nav-tabs\" id=\"myTab\">\n                        <li class=\"active\"><a href=\"#viewall\" data-toggle=\"tab\">All Businesses</a></li>\n                        <li><a (click) = \"topBusinesses()\" href=\"#viewtop\" data-toggle=\"tab\">Top 10 Businesses</a></li>\n                        <li><a (click) = \"searchForBusiness()\" href=\"#search\" data-toggle=\"tab\">Search</a></li>\n\n                    </ul>\n\n                    <div class=\"tab-content\" style=\"width:1300px !important;\">\n                        <div class=\"tab-pane fade in active\" id=\"viewall\">\n                        <ul style=\"list-style: none;\">\n                        <div *ngFor=\"let business of businesses\">\n                                <li style = \"float: left; margin-left: 10px;\" >\n                                <br>\n                                    <figure> <img style = \"height:300px !important;width:200px !important;\" src={{business.profilepicture}}>\n                                        <br>\n                                            Name: {{business.businessName}} <br>\n                                            Rating: {{business.rating}} <br>\n                                            Description: {{business.description}} <br>\n                                            location: {{business.location}}\n                                        <figcaption><button class =\"button\" value={{business._id}} (click) = \"onButtonClicked($event)\">More Details</button></figcaption>\n                                    </figure>\n                                </li>\n\n                        </div>\n                        </ul>\n                        </div>\n\n\n                        <div class=\"tab-pane fade in\" id=\"viewtop\">\n                         <ul style=\"list-style: none;\">\n                        <div *ngFor=\"let TopBusiness of TopBusinesses\">\n                        <li style = \"float: left; margin-left: 10px;\" >\n                        <br>\n                           <figure> <img style = \"height:300px !important;width:200px !important;\" src={{TopBusiness.profilepicture}}>\n                           <br>\n                             Name: {{TopBusiness.businessName}} <br>\n                             Rating: {{TopBusiness.rating}} <br>\n                             Description: {{TopBusiness.info}} <br>\n                             location: {{TopBusiness.location}}\n                           <figcaption><button class =\"button\" value={{TopBusiness._id}} (click) = \"onButtonClicked($event)\">More Details</button></figcaption>\n                           </figure>\n                           </li>\n                        </div>\n                        </ul>\n                        </div>\n\n                        <div class=\"tab-pane fade in\" id=\"search\">\n\n                              <form (submit)=\"searchForBusiness($event)\">\n                                  <div class=\"form-group\">\n                                      <input class=\"form-control\" type=\"text\" placeholder=\"Search.. \" [(ngModel)]=\"search\" name=\"search\"/>\n                                  </div>\n                              </form>\n\n                                <div *ngFor=\"let searchedBusiness of searchedBusinesses\">\n\n                                        <figure> <img style = \"height:300px !important;width:200px !important;\" src={{searchedBusiness.profilepicture}}>\n                                            <br>\n                                                Name: {{searchedBusiness.businessName}} <br>\n                                                Rating: {{searchedBusiness.rating}} <br>\n                                                Description: {{searchedBusiness.info}} <br>\n                                                location: {{searchedBusiness.location}}\n                                            <figcaption><button class =\"button\" value={{searchedBusiness._id}} (click) = \"onBusinessClicked($event)\">Learn More</button></figcaption>\n                                        </figure>\n                                        <br>\n\n\n                                </div>\n                        </div>\n\n\n                    </div>\n\n                </div>\n            </div>\n    </div>\n</div>\n\n<!-- End About Section -->\n\n\n<!-- Contact Section -->\n\n<!-- End Contact Section -->\n"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = "<div class=\"title-page\">\n<h2 class = \"title\">Login </h2>\n<hr>\n</div>\n  <div   class = \"login-container\">\n<div class=\"span3\">\n    <form id=\"contact-form\" autocomplete=\"off\" (submit) = \"onLoginSubmit()\">\n        <p class=\"contact-name\">\n          <input id=\"contact_name\" type=\"text\" placeholder=\"Username\" [(ngModel)] =\"username\" value=\"\" name=\"username\" />\n          </p>\n          <p class=\"contact-email\">\n            <input id=\"contact_email\" type=\"password\" placeholder=\"Password\" value=\"\" [(ngModel)] =\"password\" name=\"password\" />\n          </p>\n          <h3>Don't have an account?</h3> <a [routerLink]=\"['/register']\">Sign up now!</a>\n          <p class=\"contact-submit\">\n            <button type=\"submit\"  class=\"button\">Login</button>\n          </p>\n\n          <div id=\"response\">\n\n          </div>\n      </form>\n</div>\n  </div>\n"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"sticky-nav\">\n    \t<a id=\"mobile-nav\" class=\"menu-nav\" href=\"#menu-nav\"></a>\n        <div id=\"logo\"><a id=\"goUp\" href=\"#home-slider\"></a></div>\n        <nav id=\"menu\">\n        \t<ul id=\"menu-nav\">\n            \t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['current']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n              <li *ngIf=\"authService.isClient()\" [routerLinkActive]=\"['current']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/Profile']\">Home</a></li>\n              <li *ngIf=\"authService.isBprovider()\" [routerLinkActive]=\"['current']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/Bprovider']\">Home</a></li>\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['current']\"  [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['current']\"  [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Sign up</a></li>\n                <li *ngIf=\"authService.loggedIn()\" ><a (click)=\"onLogoutClick()\"  >Logout</a></li>\n            </ul>\n        </nav>\n    </div>\n</header>\n"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = "<div class=\"title-page\">\n<h2 class = \"title\">Registeration</h2>\n<hr>\n</div>\n  <div   class = \"login-container\" style = \"margin-left:0% !important;\">\n\n\n      <div class=\"tabbable\">\n\n            <ul class=\"nav nav-tabs\" style=\"margin-left:30px !important;\" id=\"myTab\">\n                <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">As a client</a></li>\n                <li><a href=\"#tab2\" data-toggle=\"tab\">As a business provider</a></li>\n            </ul>\n\n                <div class=\"tab-content\" style=\"background:none !important; padding:0 !important;\">\n                <div class=\"tab-pane fade in active\" id=\"tab1\">\n                  <div class=\"span3\" style=\"margin-top:15px !important;\"id=\"tab1\">\n                      <form id=\"contact-form\" style = \"width:1100px !important;\" (submit) = \"onRegisterSubmitClient()\">\n                          <p class=\"contact-name\">\n                            <input id=\"contact_name\" type=\"text\" placeholder=\"Username\" [(ngModel)] =\"clientusername\"  name=\"username\" />\n                            </p>\n                            <p class=\"contact-name\">\n                              <input id=\"contact_email\" type=\"password\" placeholder=\"Password\"  [(ngModel)] =\"clientpassword\" name=\"password\" />\n                            </p>\n                            <p class=\"contact-name\">\n                              <input id=\"contact_name\" type=\"text\" placeholder=\"First name\" [(ngModel)] =\"clientfirstname\"  name=\"firstname\" />\n                              </p>\n                              <p class=\"contact-name\">\n                                <input id=\"contact_name\" type=\"text\" placeholder=\"Last name\" [(ngModel)] =\"clientlastname\"  name=\"lastname\" />\n                                </p>\n                                <p class=\"contact-name\">\n                                  <input id=\"contact_name\" type=\"text\" placeholder=\"Email\" [(ngModel)] =\"clientemail\"  name=\"email\" />\n                                  </p>\n                                  <p class=\"contact-name\">\n                                    <input id=\"contact_name\" type=\"text\" placeholder=\"Address\" [(ngModel)] =\"clientAddress\" name=\"address\" />\n                                    </p>\n                                    <p class=\"contact-name\">\n                                      <input id=\"contact_name\" type=\"text\" placeholder=\"Phone number\" [(ngModel)] =\"clientphone\"  name=\"phone\" />\n                                      </p>\n                                    <p class=\"contact-name\">\n                                      <input id=\"contact_name\" type=\"text\" placeholder=\"Credit card info\" [(ngModel)] =\"creditcardinfo\"  name=\"creditcardinfo\" />\n                                      </p>\n                                      <p class=\"contact-name\">\n                                        <input id=\"contact_name\" type=\"date\" placeholder=\"Birthdate\" [(ngModel)] =\"clientbirthdate\"  name=\"birthdate\" />\n                                        </p>\n                            <p class=\"contact-submit\" style=\"margin-left:500px !important;\">\n                              <button type=\"submit\"  style = \"margin-top:15px !important;\" class=\"button\">Register</button>\n                            </p>\n\n                            <div id=\"response\">\n\n                            </div>\n                        </form>\n                  </div>\n                </div>\n                <div class=\"tab-pane fade in\" id=\"tab2\">\n                  <div class=\"span3\" style=\"margin-top:15px !important;\"id=\"tab1\">\n                      <form id=\"contact-form\" style = \"width:1100px !important;\" (submit) = \"onRegisterSubmitbProvider()\">\n                          <p class=\"contact-name\">\n                            <input id=\"contact_name\" type=\"text\" placeholder=\"Username\" [(ngModel)] =\"bproviderusername\"  name=\"username\" />\n                            </p>\n                            <p class=\"contact-name\">\n                              <input id=\"contact_email\" type=\"password\" placeholder=\"Password\"  [(ngModel)] =\"bproviderpassword\" name=\"password\" />\n                            </p>\n                            <p class=\"contact-name\">\n                              <input id=\"contact_name\" type=\"text\" placeholder=\"First name\" [(ngModel)] =\"bproviderfirstname\"  name=\"firstname\" />\n                              </p>\n                              <p class=\"contact-name\">\n                                <input id=\"contact_name\" type=\"text\" placeholder=\"Last name\" [(ngModel)] =\"bproviderlastname\"  name=\"lastname\" />\n                                </p>\n                                <p class=\"contact-name\">\n                                  <input id=\"contact_name\" type=\"text\" placeholder=\"Email\" [(ngModel)] =\"bprovideremail\"  name=\"email\" />\n                                  </p>\n                                  <p class=\"contact-name\">\n                                    <input id=\"contact_name\" type=\"date\" placeholder=\"Birthdate(dd/mm/yy)\" [(ngModel)] =\"bproviderbirthdate\" name=\"birthdate\" />\n                                    </p>\n                                    <p class=\"contact-name\">\n                                      <input id=\"contact_name\" type=\"text\" placeholder=\"Business name\" [(ngModel)] =\"businessName\"  name=\"businessName\" />\n                                      </p>\n                                      <p class=\"contact-name\">\n                                        <input id=\"contact_name\" type=\"text\" placeholder=\"Business location\" [(ngModel)] =\"bproviderlocation\"  name=\"location\" />\n                                        </p>\n                                        <p class=\"contact-name\">\n                                          <input id=\"contact_name\" type=\"text\" placeholder=\"Business phone number\" [(ngModel)] =\"bproviderphone\"  name=\"phone\" />\n                                          </p>\n                                          <p class=\"contact-name\">\n                                            <textarea id=\"contact_message\" placeholder=\"Info\" name=\"info\" rows=\"4\" cols=\"40\" [(ngModel)] =\"bproviderinfo\"></textarea>\n                                            </p>\n                                            <p class=\"contact-name\">\n                                              <textarea id=\"contact_message\" placeholder=\"Description\" name=\"description\" rows=\"15\" cols=\"40\" [(ngModel)] =\"bproviderdescription\"></textarea>\n                                              </p>\n                            <p class=\"contact-submit\" style=\"margin-left:500px !important;\">\n                              <button type=\"submit\"  style = \"margin-top:15px !important;\" class=\"button\">Register</button>\n                            </p>\n\n                            <div id=\"response\">\n\n                            </div>\n                        </form>\n\n                </div>\n              </div>\n\n\n    </div>\n  </div>\n"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = "<angular2-fullcalendar [options]=\"calendarOptions()\">{{options | json}}</angular2-fullcalendar>\n<div style = \"margin-left:600px !important; margin-top:40px !important;\">\n<button *ngIf=!isValid class=\"button\" style=\"margin-left:350px !important;\" data-toggle=\"modal\" data-target=\"#myModal\" >Choose a slot</button>\n<button *ngIf=\"isValid\" (click)=\"cancelReservation()\" class=\"button\" >Cancel reservation</button>\n<button *ngIf=\"isValid\" (click)=\"openCheckout()\" class=\"button\" style=\"margin-left:30px !important;\">Purchase</button>\n</div>\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" style=\" display:none !important;\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\" style=\"color:black !important;\">Choose a slot timing</h4>\n      </div>\n      <div class=\"modal-body\">\n        <label>Date</label>\n        <input type=\"date\" name=\"dateChosen\" [(ngModel)]=\"dateChosen\" />\n        <label>Time</label>\n        <input type=\"time\" name=\"timeChosen\" [(ngModel)]=\"timeChosen\" />\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" >Close</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"chooseSlot()\" data-dismiss=\"modal\" >Validate slot</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(526);


/***/ })

},[873]);
//# sourceMappingURL=main.bundle.map