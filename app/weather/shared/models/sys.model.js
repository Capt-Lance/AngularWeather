"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sys = (function () {
    function Sys() {
    }
    Object.defineProperty(Sys.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys.prototype, "country", {
        get: function () {
            return this._country;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys.prototype, "sunrise", {
        get: function () {
            return this.sunrise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys.prototype, "sunset", {
        get: function () {
            return this._sunset;
        },
        enumerable: true,
        configurable: true
    });
    return Sys;
}());
exports.Sys = Sys;
//# sourceMappingURL=sys.model.js.map