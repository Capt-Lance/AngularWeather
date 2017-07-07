import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/toPromise';

import {DailyWeather} from '../shared/models/daily-weather.model';

@Injectable()
export class DailyWeatherService {
    private APIKEY = 'a70f96f9ff020e160975ae9c1b2624ed';
    private BASEURL = 'http://api.openweathermap.org/data/2.5';
    private URLOPTIONS = 'units=imperial';
    //private BASEURL = '../../../weather.json'
    constructor(private http: Http){}

    public getDailyWeatherByCity(city: string, country: string): Observable<DailyWeather> {//Promise<DailyWeather> {
        let url = `${this.BASEURL}/weather?q=${city},${country}&${this.URLOPTIONS}&appid=${this.APIKEY}`;
        //let url = `${this.BASEURL}`;
        return this.http.get(url)
            .map(response => response.json() as DailyWeather)
            // .toPromise()
            // .then(response => response.json() as DailyWeather)
            // .catch(reason => this.error(reason));
    }

    private error(reason: any){
        console.log(reason);
    }

}