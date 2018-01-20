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

  getApiUrl : string              = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_sub_province&sort_keys=location_sub_province,weekday_tinyint,start_time";

  getMeetings() { return this.http.get<JSONObject>(this.getApiUrl); }

  AntrimMondayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=1&meeting_key=location_sub_province&meeting_key_value=Antrim&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  AntrimTuesdayAPiUrl    : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=2&meeting_key=location_sub_province&meeting_key_value=Antrim&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  AntrimMWednesdayAPiUrl : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=3&meeting_key=location_sub_province&meeting_key_value=Antrim&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  AntrimThursdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=4&meeting_key=location_sub_province&meeting_key_value=Antrim&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  AntrimFridayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=5&meeting_key=location_sub_province&meeting_key_value=Antrim&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  AntrimSaturdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=6&meeting_key=location_sub_province&meeting_key_value=Antrim&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  AntrimSundayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=7&meeting_key=location_sub_province&meeting_key_value=Antrim&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  getAntrimMondayMeetings()    { return this.http.get<JSONObject>(this.AntrimMondayAPiUrl); }
  getAntrimTuesdayMeetings()   { return this.http.get<JSONObject>(this.AntrimTuesdayAPiUrl); }
  getAntrimWednesdayMeetings() { return this.http.get<JSONObject>(this.AntrimMWednesdayAPiUrl); }
  getAntrimThursdayMeetings()  { return this.http.get<JSONObject>(this.AntrimThursdayAPiUrl); }
  getAntrimFridayMeetings()    { return this.http.get<JSONObject>(this.AntrimFridayAPiUrl); }
  getAntrimSaturdayMeetings()  { return this.http.get<JSONObject>(this.AntrimSaturdayAPiUrl); }
  getAntrimSundayMeetings()    { return this.http.get<JSONObject>(this.AntrimSundayAPiUrl); }

  ArmaghMondayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=1&meeting_key=location_sub_province&meeting_key_value=Armagh&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ArmaghTuesdayAPiUrl    : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=2&meeting_key=location_sub_province&meeting_key_value=Armagh&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ArmaghMWednesdayAPiUrl : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=3&meeting_key=location_sub_province&meeting_key_value=Armagh&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ArmaghThursdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=4&meeting_key=location_sub_province&meeting_key_value=Armagh&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ArmaghFridayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=5&meeting_key=location_sub_province&meeting_key_value=Armagh&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ArmaghSaturdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=6&meeting_key=location_sub_province&meeting_key_value=Armagh&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ArmaghSundayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=7&meeting_key=location_sub_province&meeting_key_value=Armagh&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  getArmaghMondayMeetings()    { return this.http.get<JSONObject>(this.ArmaghMondayAPiUrl); }
  getArmaghTuesdayMeetings()   { return this.http.get<JSONObject>(this.ArmaghTuesdayAPiUrl); }
  getArmaghWednesdayMeetings() { return this.http.get<JSONObject>(this.ArmaghMWednesdayAPiUrl); }
  getArmaghThursdayMeetings()  { return this.http.get<JSONObject>(this.ArmaghThursdayAPiUrl); }
  getArmaghFridayMeetings()    { return this.http.get<JSONObject>(this.ArmaghFridayAPiUrl); }
  getArmaghSaturdayMeetings()  { return this.http.get<JSONObject>(this.ArmaghSaturdayAPiUrl); }
  getArmaghSundayMeetings()    { return this.http.get<JSONObject>(this.ArmaghSundayAPiUrl); }

  CarlowMondayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=1&meeting_key=location_sub_province&meeting_key_value=Carlow&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CarlowTuesdayAPiUrl    : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=2&meeting_key=location_sub_province&meeting_key_value=Carlow&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CarlowMWednesdayAPiUrl : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=3&meeting_key=location_sub_province&meeting_key_value=Carlow&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CarlowThursdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=4&meeting_key=location_sub_province&meeting_key_value=Carlow&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CarlowFridayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=5&meeting_key=location_sub_province&meeting_key_value=Carlow&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CarlowSaturdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=6&meeting_key=location_sub_province&meeting_key_value=Carlow&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CarlowSundayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=7&meeting_key=location_sub_province&meeting_key_value=Carlow&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  getCarlowMondayMeetings()    { return this.http.get<JSONObject>(this.CarlowMondayAPiUrl); }
  getCarlowTuesdayMeetings()   { return this.http.get<JSONObject>(this.CarlowTuesdayAPiUrl); }
  getCarlowWednesdayMeetings() { return this.http.get<JSONObject>(this.CarlowMWednesdayAPiUrl); }
  getCarlowThursdayMeetings()  { return this.http.get<JSONObject>(this.CarlowThursdayAPiUrl); }
  getCarlowFridayMeetings()    { return this.http.get<JSONObject>(this.CarlowFridayAPiUrl); }
  getCarlowSaturdayMeetings()  { return this.http.get<JSONObject>(this.CarlowSaturdayAPiUrl); }
  getCarlowSundayMeetings()    { return this.http.get<JSONObject>(this.CarlowSundayAPiUrl); }

  CavanMondayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=1&meeting_key=location_sub_province&meeting_key_value=Cavan&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CavanTuesdayAPiUrl    : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=2&meeting_key=location_sub_province&meeting_key_value=Cavan&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CavanMWednesdayAPiUrl : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=3&meeting_key=location_sub_province&meeting_key_value=Cavan&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CavanThursdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=4&meeting_key=location_sub_province&meeting_key_value=Cavan&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CavanFridayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=5&meeting_key=location_sub_province&meeting_key_value=Cavan&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CavanSaturdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=6&meeting_key=location_sub_province&meeting_key_value=Cavan&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CavanSundayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=7&meeting_key=location_sub_province&meeting_key_value=Cavan&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  getCavanMondayMeetings()    { return this.http.get<JSONObject>(this.CavanMondayAPiUrl); }
  getCavanTuesdayMeetings()   { return this.http.get<JSONObject>(this.CavanTuesdayAPiUrl); }
  getCavanWednesdayMeetings() { return this.http.get<JSONObject>(this.CavanMWednesdayAPiUrl); }
  getCavanThursdayMeetings()  { return this.http.get<JSONObject>(this.CavanThursdayAPiUrl); }
  getCavanFridayMeetings()    { return this.http.get<JSONObject>(this.CavanFridayAPiUrl); }
  getCavanSaturdayMeetings()  { return this.http.get<JSONObject>(this.CavanSaturdayAPiUrl); }
  getCavanSundayMeetings()    { return this.http.get<JSONObject>(this.CavanSundayAPiUrl); }

  ClareMondayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=1&meeting_key=location_sub_province&meeting_key_value=Clare&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ClareTuesdayAPiUrl    : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=2&meeting_key=location_sub_province&meeting_key_value=Clare&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ClareMWednesdayAPiUrl : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=3&meeting_key=location_sub_province&meeting_key_value=Clare&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ClareThursdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=4&meeting_key=location_sub_province&meeting_key_value=Clare&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ClareFridayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=5&meeting_key=location_sub_province&meeting_key_value=Clare&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ClareSaturdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=6&meeting_key=location_sub_province&meeting_key_value=Clare&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  ClareSundayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=7&meeting_key=location_sub_province&meeting_key_value=Clare&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  getClareMondayMeetings()    { return this.http.get<JSONObject>(this.ClareMondayAPiUrl); }
  getClareTuesdayMeetings()   { return this.http.get<JSONObject>(this.ClareTuesdayAPiUrl); }
  getClareWednesdayMeetings() { return this.http.get<JSONObject>(this.ClareMWednesdayAPiUrl); }
  getClareThursdayMeetings()  { return this.http.get<JSONObject>(this.ClareThursdayAPiUrl); }
  getClareFridayMeetings()    { return this.http.get<JSONObject>(this.ClareFridayAPiUrl); }
  getClareSaturdayMeetings()  { return this.http.get<JSONObject>(this.ClareSaturdayAPiUrl); }
  getClareSundayMeetings()    { return this.http.get<JSONObject>(this.ClareSundayAPiUrl); }

  CorkMondayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=1&meeting_key=location_sub_province&meeting_key_value=Cork&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CorkTuesdayAPiUrl    : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=2&meeting_key=location_sub_province&meeting_key_value=Cork&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CorkMWednesdayAPiUrl : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=3&meeting_key=location_sub_province&meeting_key_value=Cork&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CorkThursdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=4&meeting_key=location_sub_province&meeting_key_value=Cork&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CorkFridayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=5&meeting_key=location_sub_province&meeting_key_value=Cork&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CorkSaturdayAPiUrl   : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=6&meeting_key=location_sub_province&meeting_key_value=Cork&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  CorkSundayAPiUrl     : string = "http://bmlt.nasouth.ie/main_server/client_interface/json/?switcher=GetSearchResults&weekdays=7&meeting_key=location_sub_province&meeting_key_value=Cork&data_field_key=weekday_tinyint,start_time,longitude,latitude,meeting_name,location_text,location_info,location_street,location_city_subsection,location_neighborhood,location_municipality,location_sub_province,location_province";
  getCorkMondayMeetings()    { return this.http.get<JSONObject>(this.CorkMondayAPiUrl); }
  getCorkTuesdayMeetings()   { return this.http.get<JSONObject>(this.CorkTuesdayAPiUrl); }
  getCorkWednesdayMeetings() { return this.http.get<JSONObject>(this.CorkMWednesdayAPiUrl); }
  getCorkThursdayMeetings()  { return this.http.get<JSONObject>(this.CorkThursdayAPiUrl); }
  getCorkFridayMeetings()    { return this.http.get<JSONObject>(this.CorkFridayAPiUrl); }
  getCorkSaturdayMeetings()  { return this.http.get<JSONObject>(this.CorkSaturdayAPiUrl); }
  getCorkSundayMeetings()    { return this.http.get<JSONObject>(this.CorkSundayAPiUrl); }




}
