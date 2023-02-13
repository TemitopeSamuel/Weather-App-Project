import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService){

  }
  cityName: string = 'Lagos';
   weatherData?: weatherData;
  
  ngOnInit(): void {
    this.getWeatherDatd(this.cityName);
    this.cityName ='';
  }

  onSubmit(){
    this.getWeatherDatd(this.cityName);
    this.cityName ='';

  }

  private getWeatherDatd(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }

}
