export class Weather{
    private _id: number;
    private _main: string;
    private _description: string;
    private _icon: number;

    public get id(){
        return this._id;
    }

    public get main(){
        return this._main;
    }

    public get description(){
        return this._description;
    }

    public get icon(){
        return this._icon;
    }
    
}