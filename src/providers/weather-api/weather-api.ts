import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  http://data.fmi.fi/fmi-apikey/8fadf008-1141-401c-8ff0-c5ca7dcef15c/avain/wfs?request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::multipointcoverage&place=helsinki&
*/
@Injectable()
export class WeatherApiProvider {
	apiKey = '8fadf008-1141-401c-8ff0-c5ca7dcef15c';
	url;
  /* Taken from  http://en.ilmatieteenlaitos.fi/open-data-manual-time-series-data
  
  var SERVER_URL = "http://data.fmi.fi/fmi-apikey/insert-your-apikey-here/wfs";
var STORED_QUERY_OBSERVATION = "fmi::observations::weather::multipointcoverage";
var connection = new fi.fmi.metoclient.metolib.WfsConnection();
if (connection.connect(SERVER_URL, STORED_QUERY_OBSERVATION)) {
    // Connection was properly initialized. So, get the data.
    connection.getData({
        requestParameter : "td",
        begin : new Date(1368172800000),
        end : new Date(1368352800000),
        timestep : 60 * 60 * 1000,
        sites : "Helsinki",
        callback : function(data, errors) {
            // Handle the data and errors object in a way you choose.
            handleCallback(data, errors);
            // Disconnect because the flow has finished.
            connection.disconnect();
        }
    });
}

/*
  */
  constructor(public http: HttpClient) {
    console.log('Hello WeatherApiProvider Provider');
    // this.url="http://data.fmi.fi/fmi-apikey/"+this.apiKey+"/avain/wfs?request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::multipointcoverage&place="
    this.url="http://data.fmi.fi/fmi-apikey/"+this.apiKey+"/wfs?request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::simple&place="
  }

  getWeather(city){
    return this.http.get(this.url+city, {responseType: 'text'})

  }
}
