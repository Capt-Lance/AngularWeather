export class Main {
    private _temp: number;
    private _pressure: number;
    private _humidity: number;
    private _temp_min: number;
    private _temp_max: number;
    private _sea_level: number;
    private _grnd_level: number;

    public get temp(){
        return this._temp;
    }

    public get pressure(){
        return this._pressure;
    }

    public get humidity(){
        return this._humidity;
    }

    public get temp_min(){
        return this._temp_min;
    }

    public get temp_max(){
        return this._temp_max;
    }

    public get sea_level(){
        return this._sea_level;
    }

    public get grnd_level(){
        return this._grnd_level;
    }



}