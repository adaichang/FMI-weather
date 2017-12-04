import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherApiProvider } from '../../providers/weather-api/weather-api';
//import { Text } from '@angular/compiler';
import { Geolocation} from '@ionic-native/geolocation' 
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
//import {cordova} from '@ionic'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  lat: any;
  lon: any;
  //result: any;
  location: {
    city: string
  }

  constructor(public navCtrl: NavController,
    private weatherProvider:WeatherApiProvider,
    public geo: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    //private reverseGeocode: NativeGeocoderReverseResult
  ) {

  }

  ionViewDidLoad(){
    this.geo.getCurrentPosition().then(pos => {
        this.lat = pos.coords.latitude;
        this.lon = pos.coords.longitude;
        console.log(this.lat, this.lon );

        this.nativeGeocoder.reverseGeocode(this.lat, this.lon)
        .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
        
       
    }).catch( err => console.log(err));
    

    this.location = {
      city: 'Tampere'
    }
  
    this.weatherProvider.getWeather(this.location.city).subscribe(weather => {
      console.log(weather);
      
      this.weather = weather;
    });
  }

}
