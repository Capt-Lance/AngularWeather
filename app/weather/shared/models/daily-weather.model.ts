import {Coordinates} from "./coordinates.model";
import {Weather} from "./weather.model";
import {Main} from "./main.model";
import {Wind} from "./wind.model";
import {Clouds} from "./clouds.model";
import {Rain} from "./rain.model";
import {Sys} from "./sys.model";

export class DailyWeather {
    private _coord: Coordinates;
    private _weather: Weather[];
    private _base: string;
    private _main: Main;
    private _wind: Wind;
    private _clouds: Clouds;
    private _rain: Rain;
    private _dt: number;
    private _sys: Sys;
    private _id: number;
    private _name: string;
    private _cod: number;

    public get coord(){
        return this._coord;
    }

    public get weather(){
        return this._weather;
    }

    public get base() {
        return this._base;
    }

    public get main(){
        return this._main;
    }

    public get wind(){
        return this._wind;
    }

    public get clouds(){
        return this._clouds;
    }

    public get rain(){
        return this._rain;
    }

    public get dt() {
        return this._dt;
    }

    public get sys(){
        return this._sys;
    }

    public get id(){
        return this._id;
    }

    public get name(){
        return this._name;
    }

    public get cod(){
        return this._cod;
    }
}