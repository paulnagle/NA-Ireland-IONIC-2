import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface JSONObject {
  weekday_tinyint: string;
  start_time: string;
  longitude: string;
  latitude: string;
  meeting_name: string;
  location_text: string;
  location_info: string;
  location_street: string;
  location_sub_province: string;
}

@Injectable()
export class MeetingListProvider {

  meetings : any;

  constructor(public http: HttpClient) {
    console.log('Hello MeetingListProvider Provider');
  }

  getApiUrl : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_sub_province&sort_keys=location_sub_province,weekday_tinyint,start_time";

  getMeetings()  {
        console.log("MeetingsListProvider provider getMeetings()");
        return this.http.get<JSONObject>(this.getApiUrl);
  }

}
