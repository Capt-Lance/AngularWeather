import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {DailyWeatherComponent} from './weather/daily-weather/daily-weather.component';
import {DailyWeatherService} from './weather/daily-weather/daily-weather.service';
@NgModule({
    imports: [
        BrowserModule,,
        BrowserAnimationsModule,
        HttpModule,
        ReactiveFormsModule,
        MaterialModule
        ],
    declarations: [
        AppComponent,
        DailyWeatherComponent
    ],
    providers: [
        DailyWeatherService
    ],
    bootstrap: [AppComponent]
})

export class AppModule{}