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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.city$ = new forms_1.FormControl();
        console.log(this);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // this.setCoordinates(position);
            });
        }
        this.city$.valueChanges
            .debounceTime(800)
            .subscribe(function (city) {
            console.log(city);
            _this.city = city;
        });
    }
    AppComponent.prototype.setCoordinates = function (position) {
        var lat = position.coords.latitude.toPrecision(2);
        console.log(lat);
        var lon = position.coords.longitude.toPrecision(2);
        console.log(lon);
        console.log(this);
        this.city = lat + ", " + lon;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'angular-weather',
            templateUrl: '/app/app.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map