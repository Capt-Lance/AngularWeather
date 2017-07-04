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
var core_1 = require('@angular/core');
require("rxjs/add/operator/debounceTime");
var current_weather_service_1 = require('./current-weather.service');
var CurrentWeatherComponent = (function () {
    function CurrentWeatherComponent(currentWeatherService) {
        this.currentWeatherService = currentWeatherService;
        this.country = 'America';
    }
    CurrentWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('city is');
        console.log(this.city);
        this.currentWeatherService.getCurrentWeatherByCity(this.city, this.country)
            .then(function (weather) {
            _this.currentWeather = weather;
            console.log(_this.currentWeather);
        });
    };
    CurrentWeatherComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.city = changes['city'].currentValue;
        console.log("current city is " + changes['city'].currentValue);
        console.log("old city is " + changes['city'].previousValue);
        this.currentWeatherService.getCurrentWeatherByCity(this.city, this.country)
            .then(function (weather) {
            _this.currentWeather = weather;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CurrentWeatherComponent.prototype, "city", void 0);
    CurrentWeatherComponent = __decorate([
        core_1.Component({
            selector: 'current-weather',
            templateUrl: '/app/weather/current-weather/current-weather.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof current_weather_service_1.CurrentWeatherService !== 'undefined' && current_weather_service_1.CurrentWeatherService) === 'function' && _a) || Object])
    ], CurrentWeatherComponent);
    return CurrentWeatherComponent;
    var _a;
}());
exports.CurrentWeatherComponent = CurrentWeatherComponent;
//# sourceMappingURL=current-weather.component.js.map