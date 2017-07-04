"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weather = (function () {
    function Weather() {
    }
    Object.defineProperty(Weather.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "main", {
        get: function () {
            return this._main;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weather.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        enumerable: true,
        configurable: true
    });
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=weather.model.js.map