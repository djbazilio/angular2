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
var auth_service_1 = require('./auth.service');
var LoginComponent = (function () {
    function LoginComponent(_service) {
        this._service = _service;
        this.user = new auth_service_1.User('', '');
        this.errorMsg = '';
    }
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [auth_service_1.AuthenticationService],
            template: "\n        <div class=\"container\" >\n            <div class=\"title\">\n                Welcome\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.email\" id=\"email\" \n                            type=\"email\" class=\"validate\">\n                        <label for=\"email\">Email</label>\n                    </div>\n                </div>\n \n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.password\" id=\"password\" \n                            type=\"password\" class=\"validate\">\n                        <label for=\"password\">Password</label>\n                    </div>\n                </div>\n \n                <span>{{errorMsg}}</span>\n                <button (click)=\"login()\" \n                    class=\"btn waves-effect waves-light\" \n                    type=\"submit\" name=\"action\">Login</button>\n            </div>\n        </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=_login.js.map