"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular/core');
var http_1 = require('angular/http');
var auth_service_1 = require('./auth.service');
var Login = (function () {
    function Login(_service, http) {
        this._service = _service;
        this.http = http;
        this.user = new auth_service_1.User('', '');
        this.errorMsg = '';
    }
    Login.prototype.login = function () {
        var _this = this;
        var username = 'root';
        var password = 'root2';
        var creds = "username=" + username + "&password=" + password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://217.66.96.200:8080/api/login', creds, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.saveJwt(data); }, function (err) { return _this.logError(err); }, function () { return console.log('Authentication Complete'); });
    };
    Login.prototype.saveJwt = function (jwt) {
        if (jwt) {
            console.log(jwt);
            localStorage.setItem('id_token', jwt);
        }
    };
    Login.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://217.66.96.200:8080/api/login')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.saveJwt(data.id_token); }, function (err) { return _this.logError(err); }, function () { return console.log('Authentication Complete'); });
    };
    Login.prototype.logError = function (e) {
        console.log(e);
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [auth_service_1.AuthenticationService],
            template: "\n        <div class=\"container\" >\n            <div class=\"title\">\n                Welcome\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.email\" id=\"email\" \n                            type=\"email\" class=\"validate\">\n                        <label for=\"email\">Email</label>\n                    </div>\n                </div>\n \n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.password\" id=\"password\" \n                            type=\"password\" class=\"validate\">\n                        <label for=\"password\">Password</label>\n                    </div>\n                </div>\n \n                <span>{{errorMsg}}</span>\n                <button (click)=\"login()\" \n                    class=\"btn waves-effect waves-light\" \n                    type=\"submit\" name=\"action\">Login</button>\n            </div>\n        </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthenticationService, http_1.Http])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map