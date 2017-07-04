"use strict";
var CurrentWeather = (function () {
    function CurrentWeather() {
    }
    Object.defineProperty(CurrentWeather.prototype, "coord", {
        get: function () {
            return this._coord;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "weather", {
        get: function () {
            return this._weather;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "base", {
        get: function () {
            return this._base;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "main", {
        get: function () {
            return this._main;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "wind", {
        get: function () {
            return this._wind;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "clouds", {
        get: function () {
            return this._clouds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "rain", {
        get: function () {
            return this._rain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "dt", {
        get: function () {
            return this._dt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "sys", {
        get: function () {
            return this._sys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentWeather.prototype, "cod", {
        get: function () {
            return this._cod;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentWeather;
}());
exports.CurrentWeather = CurrentWeather;
//# sourceMappingURL=current-weather.model.js.map