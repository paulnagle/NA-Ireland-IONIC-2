import { Component } from '@angular/core';
import { MeetingListProvider } from '../../../providers/meeting-list/meeting-list';

import { NavController } from 'ionic-angular';

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

@Component({
  selector: 'page-placeholder',
  templateUrl: 'placeholder.html'
})
export class PlaceholderComponent {

  meetingList : JSONObject;
  AntrimMondayList : JSONObject; AntrimTuesdayList : JSONObject; AntrimWednesdayList : JSONObject; AntrimThursdayList : JSONObject; AntrimFridayList : JSONObject; AntrimSaturdayList : JSONObject; AntrimSundayList : JSONObject;
  ArmaghMondayList : JSONObject; ArmaghTuesdayList : JSONObject; ArmaghWednesdayList : JSONObject; ArmaghThursdayList : JSONObject; ArmaghFridayList : JSONObject; ArmaghSaturdayList : JSONObject; ArmaghSundayList : JSONObject;
  CarlowMondayList : JSONObject; CarlowTuesdayList : JSONObject; CarlowWednesdayList : JSONObject; CarlowThursdayList : JSONObject; CarlowFridayList : JSONObject; CarlowSaturdayList : JSONObject; CarlowSundayList : JSONObject;
  CavanMondayList : JSONObject; CavanTuesdayList : JSONObject; CavanWednesdayList : JSONObject; CavanThursdayList : JSONObject; CavanFridayList : JSONObject; CavanSaturdayList : JSONObject; CavanSundayList : JSONObject;
  ClareMondayList : JSONObject; ClareTuesdayList : JSONObject; ClareWednesdayList : JSONObject; ClareThursdayList : JSONObject; ClareFridayList : JSONObject; ClareSaturdayList : JSONObject; ClareSundayList : JSONObject;
  CorkMondayList : JSONObject; CorkTuesdayList : JSONObject; CorkWednesdayList : JSONObject; CorkThursdayList : JSONObject; CorkFridayList : JSONObject; CorkSaturdayList : JSONObject; CorkSundayList : JSONObject;
  DerryMondayList : JSONObject; DerryTuesdayList : JSONObject; DerryWednesdayList : JSONObject; DerryThursdayList : JSONObject; DerryFridayList : JSONObject; DerrySaturdayList : JSONObject; DerrySundayList : JSONObject;
  DonegalMondayList : JSONObject; DonegalTuesdayList : JSONObject; DonegalWednesdayList : JSONObject; DonegalThursdayList : JSONObject; DonegalFridayList : JSONObject; DonegalSaturdayList : JSONObject; DonegalSundayList : JSONObject;
  DownMondayList : JSONObject; DownTuesdayList : JSONObject; DownWednesdayList : JSONObject; DownThursdayList : JSONObject; DownFridayList : JSONObject; DownSaturdayList : JSONObject; DownSundayList : JSONObject;
  DublinMondayList : JSONObject; DublinTuesdayList : JSONObject; DublinWednesdayList : JSONObject; DublinThursdayList : JSONObject; DublinFridayList : JSONObject; DublinSaturdayList : JSONObject; DublinSundayList : JSONObject;
  FermanaghMondayList : JSONObject; FermanaghTuesdayList : JSONObject; FermanaghWednesdayList : JSONObject; FermanaghThursdayList : JSONObject; FermanaghFridayList : JSONObject; FermanaghSaturdayList : JSONObject; FermanaghSundayList : JSONObject;
  GalwayMondayList : JSONObject; GalwayTuesdayList : JSONObject; GalwayWednesdayList : JSONObject; GalwayThursdayList : JSONObject; GalwayFridayList : JSONObject; GalwaySaturdayList : JSONObject; GalwaySundayList : JSONObject;
  KerryMondayList : JSONObject; KerryTuesdayList : JSONObject; KerryWednesdayList : JSONObject; KerryThursdayList : JSONObject; KerryFridayList : JSONObject; KerrySaturdayList : JSONObject; KerrySundayList : JSONObject;
  KildareMondayList : JSONObject; KildareTuesdayList : JSONObject; KildareWednesdayList : JSONObject; KildareThursdayList : JSONObject; KildareFridayList : JSONObject; KildareSaturdayList : JSONObject; KildareSundayList : JSONObject;
  KilkennyMondayList : JSONObject; KilkennyTuesdayList : JSONObject; KilkennyWednesdayList : JSONObject; KilkennyThursdayList : JSONObject; KilkennyFridayList : JSONObject; KilkennySaturdayList : JSONObject; KilkennySundayList : JSONObject;
  LaoisMondayList : JSONObject; LaoisTuesdayList : JSONObject; LaoisWednesdayList : JSONObject; LaoisThursdayList : JSONObject; LaoisFridayList : JSONObject; LaoisSaturdayList : JSONObject; LaoisSundayList : JSONObject;
  LeitrimMondayList : JSONObject; LeitrimTuesdayList : JSONObject; LeitrimWednesdayList : JSONObject; LeitrimThursdayList : JSONObject; LeitrimFridayList : JSONObject; LeitrimSaturdayList : JSONObject; LeitrimSundayList : JSONObject;
  LimerickMondayList : JSONObject; LimerickTuesdayList : JSONObject; LimerickWednesdayList : JSONObject; LimerickThursdayList : JSONObject; LimerickFridayList : JSONObject; LimerickSaturdayList : JSONObject; LimerickSundayList : JSONObject;
  LongfordMondayList : JSONObject; LongfordTuesdayList : JSONObject; LongfordWednesdayList : JSONObject; LongfordThursdayList : JSONObject; LongfordFridayList : JSONObject; LongfordSaturdayList : JSONObject; LongfordSundayList : JSONObject;
  LouthMondayList : JSONObject; LouthTuesdayList : JSONObject; LouthWednesdayList : JSONObject; LouthThursdayList : JSONObject; LouthFridayList : JSONObject; LouthSaturdayList : JSONObject; LouthSundayList : JSONObject;
  MayoMondayList : JSONObject; MayoTuesdayList : JSONObject; MayoWednesdayList : JSONObject; MayoThursdayList : JSONObject; MayoFridayList : JSONObject; MayoSaturdayList : JSONObject; MayoSundayList : JSONObject;
  MeathMondayList : JSONObject; MeathTuesdayList : JSONObject; MeathWednesdayList : JSONObject; MeathThursdayList : JSONObject; MeathFridayList : JSONObject; MeathSaturdayList : JSONObject; MeathSundayList : JSONObject;
  MonaghanMondayList : JSONObject; MonaghanTuesdayList : JSONObject; MonaghanWednesdayList : JSONObject; MonaghanThursdayList : JSONObject; MonaghanFridayList : JSONObject; MonaghanSaturdayList : JSONObject; MonaghanSundayList : JSONObject;
  OffalyMondayList : JSONObject; OffalyTuesdayList : JSONObject; OffalyWednesdayList : JSONObject; OffalyThursdayList : JSONObject; OffalyFridayList : JSONObject; OffalySaturdayList : JSONObject; OffalySundayList : JSONObject;
  RoscommonMondayList : JSONObject; RoscommonTuesdayList : JSONObject; RoscommonWednesdayList : JSONObject; RoscommonThursdayList : JSONObject; RoscommonFridayList : JSONObject; RoscommonSaturdayList : JSONObject; RoscommonSundayList : JSONObject;
  SligoMondayList : JSONObject; SligoTuesdayList : JSONObject; SligoWednesdayList : JSONObject; SligoThursdayList : JSONObject; SligoFridayList : JSONObject; SligoSaturdayList : JSONObject; SligoSundayList : JSONObject;
  TipperaryMondayList : JSONObject; TipperaryTuesdayList : JSONObject; TipperaryWednesdayList : JSONObject; TipperaryThursdayList : JSONObject; TipperaryFridayList : JSONObject; TipperarySaturdayList : JSONObject; TipperarySundayList : JSONObject;
  TyroneMondayList : JSONObject; TyroneTuesdayList : JSONObject; TyroneWednesdayList : JSONObject; TyroneThursdayList : JSONObject; TyroneFridayList : JSONObject; TyroneSaturdayList : JSONObject; TyroneSundayList : JSONObject;
  WaterfordMondayList : JSONObject; WaterfordTuesdayList : JSONObject; WaterfordWednesdayList : JSONObject; WaterfordThursdayList : JSONObject; WaterfordFridayList : JSONObject; WaterfordSaturdayList : JSONObject; WaterfordSundayList : JSONObject;
  WestmeathMondayList : JSONObject; WestmeathTuesdayList : JSONObject; WestmeathWednesdayList : JSONObject; WestmeathThursdayList : JSONObject; WestmeathFridayList : JSONObject; WestmeathSaturdayList : JSONObject; WestmeathSundayList : JSONObject;
  WexfordMondayList : JSONObject; WexfordTuesdayList : JSONObject; WexfordWednesdayList : JSONObject; WexfordThursdayList : JSONObject; WexfordFridayList : JSONObject; WexfordSaturdayList : JSONObject; WexfordSundayList : JSONObject;
  WicklowMondayList : JSONObject; WicklowTuesdayList : JSONObject; WicklowWednesdayList : JSONObject; WicklowThursdayList : JSONObject; WicklowFridayList : JSONObject; WicklowSaturdayList : JSONObject; WicklowSundayList : JSONObject;

  constructor(private MeetingListProvider : MeetingListProvider) {
    this.getAllMeetings();
  }

  getAllMeetings(){
    this.MeetingListProvider.getMeetings().subscribe((data)=>{ this.meetingList = data; });

    this.MeetingListProvider.getAntrimMondayMeetings().subscribe((data)=>{ this.AntrimMondayList = data; });
    this.MeetingListProvider.getAntrimTuesdayMeetings().subscribe((data)=>{ this.AntrimTuesdayList = data; });
    this.MeetingListProvider.getAntrimWednesdayMeetings().subscribe((data)=>{ this.AntrimWednesdayList = data; });
    this.MeetingListProvider.getAntrimThursdayMeetings().subscribe((data)=>{ this.AntrimThursdayList = data; });
    this.MeetingListProvider.getAntrimFridayMeetings().subscribe((data)=>{ this.AntrimFridayList = data; });
    this.MeetingListProvider.getAntrimSaturdayMeetings().subscribe((data)=>{ this.AntrimSaturdayList = data; });
    this.MeetingListProvider.getAntrimSundayMeetings().subscribe((data)=>{ this.AntrimSundayList = data; });

  }


}
