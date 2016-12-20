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
var auth_service_1 = require('../auth/auth.service');
var Script = (function () {
    function Script(_service) {
        this._service = _service;
        this.script = {};
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!',
            'And another choice for you.', 'but wait! A third!'];
    }
    Script.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    Script.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    Script.prototype.ngOnInit = function () {
        this.script = { "test": "Hello world" };
        console.log(this.script);
        this._service.checkCredentials();
    };
    Script = __decorate([
        core_1.Component({
            selector: 'app-contact',
            providers: [auth_service_1.AuthenticationService],
            templateUrl: 'app/script/Views/script.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthenticationService])
    ], Script);
    return Script;
}());
exports.Script = Script;
//# sourceMappingURL=script.js.map