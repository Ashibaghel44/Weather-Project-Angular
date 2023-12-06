import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-App';
  error: any;

  constructor(private http: HttpClient) {



  }
  weatherData: any;
  city = '';
  

  check() {
  this.weatherData = '';
  let appId = 'bfa9676b5d906c86dc05a9ccc704e8a1';
  let url ='https://api.openweathermap.org/data/2.5/weather?q'
  let params = {q:this.city, appid:appId }
    this.http.get(url,{params}).subscribe(
      (data)=>{
        this.weatherData = data

    },(error)=>{
      error= 'data not'
    })
  }

}
