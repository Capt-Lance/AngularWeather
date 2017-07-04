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
require("rxjs/add/operator/debounceTime");
var daily_weather_service_1 = require("./daily-weather.service");
var DailyWeatherComponent = (function () {
    function DailyWeatherComponent(dailyWeatherService) {
        this.dailyWeatherService = dailyWeatherService;
        this.country = 'America';
        this.iconBaseUrl = 'http://openweathermap.org/img/w';
        this.dailyWeather = null;
    }
    DailyWeatherComponent.prototype.ngOnInit = function () {
        // console.log('city is');
        // console.log(this.city);
        this.getDailyWeather();
    };
    DailyWeatherComponent.prototype.ngOnChanges = function (changes) {
        // this.city = changes['city'].currentValue;
        // console.log(`current city is ${changes['city'].currentValue}`);
        // console.log(`old city is ${changes['city'].previousValue}`)
        // this.dailyWeatherService.getDailyWeatherByCity(this.city, this.country)
        // .then(weather => {
        //     this.dailyWeather = weather;
        // });
        this.getDailyWeather();
    };
    DailyWeatherComponent.prototype.getDailyWeather = function () {
        var _this = this;
        this.dailyWeatherService.getDailyWeatherByCity(this.city, this.country)
            .then(function (weather) {
            _this.dailyWeather = weather;
            _this.iconUrl = _this.iconBaseUrl + "/" + _this.dailyWeather.weather[0].icon + ".png";
            console.log("Icon is " + _this.dailyWeather.weather[0].icon);
            console.log(_this.dailyWeather.weather);
            console.log(_this.iconUrl);
            console.log(_this.dailyWeather);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DailyWeatherComponent.prototype, "city", void 0);
    DailyWeatherComponent = __decorate([
        core_1.Component({
            selector: 'daily-weather',
            templateUrl: '/app/weather/daily-weather/daily-weather.component.html'
        }),
        __metadata("design:paramtypes", [daily_weather_service_1.DailyWeatherService])
    ], DailyWeatherComponent);
    return DailyWeatherComponent;
}());
exports.DailyWeatherComponent = DailyWeatherComponent;
//# sourceMappingURL=daily-weather.component.js.map