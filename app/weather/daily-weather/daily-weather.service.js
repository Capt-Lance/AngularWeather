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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DailyWeatherService = (function () {
    //private BASEURL = '../../../weather.json'
    function DailyWeatherService(http) {
        this.http = http;
        this.APIKEY = 'a70f96f9ff020e160975ae9c1b2624ed';
        this.BASEURL = 'http://api.openweathermap.org/data/2.5';
        this.URLOPTIONS = 'units=imperial';
    }
    DailyWeatherService.prototype.getDailyWeatherByCity = function (city, country) {
        var _this = this;
        var url = this.BASEURL + "/weather?q=" + city + "," + country + "&" + this.URLOPTIONS + "&appid=" + this.APIKEY;
        //let url = `${this.BASEURL}`;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (reason) { return _this.error(reason); });
    };
    DailyWeatherService.prototype.error = function (reason) {
        console.log(reason);
    };
    DailyWeatherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DailyWeatherService);
    return DailyWeatherService;
}());
exports.DailyWeatherService = DailyWeatherService;
//# sourceMappingURL=daily-weather.service.js.map