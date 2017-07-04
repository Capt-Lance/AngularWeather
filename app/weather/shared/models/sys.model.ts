export class Sys{
    private _type: number;
    private _id: number;
    private _message: number;
    private _country: string;
    private _sunrise: number;
    private _sunset: number;

    public get type(){
        return this._type;
    }

    public get id(){
        return this._id;
    }

    public get message(){
        return this._message;
    }

    public get country(){
        return this._country;
    }

    public get sunrise(){
        return this.sunrise;
    }

    public get sunset(){
        return this._sunset;
    }
}