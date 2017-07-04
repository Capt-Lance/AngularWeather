import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'angular-weather',
    templateUrl: '/app/app.component.html' 
})

export class AppComponent{
    private city$ = new FormControl();
    private city: string;
    constructor(){
        console.log(this);
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                // this.setCoordinates(position);
            });
        }
        this.city$.valueChanges
            .debounceTime(800)
            .subscribe((city)=>{
                console.log(city);
                this.city = city;
            })
    }

    private setCoordinates(position){
        let lat: number = position.coords.latitude.toPrecision(2);
        console.log(lat);
        let lon: number = position.coords.longitude.toPrecision(2);
        console.log(lon);
        console.log(this);
        this.city = `${lat}, ${lon}`;
    }
    //find way to pass city from app.component to current-weather.component
}