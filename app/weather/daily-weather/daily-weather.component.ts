import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/debounceTime";

import {DailyWeather} from '../shared/models/daily-weather.model';
import {DailyWeatherService} from './daily-weather.service';

@Component({
    selector: 'daily-weather',
    templateUrl: '/app/weather/daily-weather/daily-weather.component.html'
})
export class DailyWeatherComponent implements OnInit, OnChanges {
    @Input() city: string//Observable<string>;
    private country: string = 'America';
    private iconBaseUrl: string = 'http://openweathermap.org/img/w';
    private iconUrl; string;

    private dailyWeather: DailyWeather = null;

    constructor(private dailyWeatherService: DailyWeatherService){
    }

    ngOnInit(){
        // console.log('city is');
        // console.log(this.city);
        this.getDailyWeather();
        
    }

    ngOnChanges(changes: SimpleChanges){
        // this.city = changes['city'].currentValue;
        // console.log(`current city is ${changes['city'].currentValue}`);
        // console.log(`old city is ${changes['city'].previousValue}`)
        // this.dailyWeatherService.getDailyWeatherByCity(this.city, this.country)
        // .then(weather => {
        //     this.dailyWeather = weather;
        // });
        this.getDailyWeather();
    }

    private getDailyWeather(){
        this.dailyWeatherService.getDailyWeatherByCity(this.city, this.country)
                .then(weather => {
                    this.dailyWeather = weather;
                    this.iconUrl= `${this.iconBaseUrl}/${this.dailyWeather.weather[0].icon}.png`
                    console.log(`Icon is ${this.dailyWeather.weather[0].icon}`);
                    console.log(this.dailyWeather.weather);
                    console.log(this.iconUrl);
                    console.log(this.dailyWeather);
                });
    }
}