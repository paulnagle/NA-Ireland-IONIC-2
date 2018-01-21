import { Component } from '@angular/core';
import { MeetingListProvider } from '../../../providers/meeting-list/meeting-list';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-meetinglist',
  templateUrl: 'meetinglist.html'
})
export class MeetinglistComponent {

  meetingList : any;
  AntrimList : any;
  ArmaghList : any;
  CarlowList : any;
  CavanList : any;
  ClareList : any;
  CorkList : any;
  DerryList : any;
  DonegalList : any;
  DownList : any;
  DublinList : any;
  FermanaghList : any;
  GalwayList : any;
  KerryList : any;
  KildareList : any;
  KilkennyList : any;
  LaoisList : any;
  LeitrimList : any;
  LimerickList : any;
  LongfordList : any;
  LouthList : any;
  MayoList : any;
  MeathList : any;
  MonaghanList : any;
  OffalyList : any;
  RoscommonList : any;
  SligoList : any;
  TipperaryList : any;
  TyroneList : any;
  WaterfordList : any;
  WestmeathList : any;
  WexfordList : any;
  WicklowList : any;

  constructor(private MeetingListProvider : MeetingListProvider) {
    this.getAllMeetings();
  }

  getAllMeetings(){
    this.MeetingListProvider.getMeetings().subscribe((data)=>{
      this.meetingList   = data;
      this.CorkList      = this.meetingList.filter(meeting => meeting.location_sub_province == "Cork");
      this.AntrimList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Antrim");
      this.ArmaghList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Armagh");
      this.CarlowList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Carlow");
      this.CavanList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Cavan");
      this.ClareList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Clare");
      this.CorkList      = this.meetingList.filter(meeting => meeting.location_sub_province == "Cork");
      this.DerryList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Derry");
      this.DonegalList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Donegal");
      this.DownList      = this.meetingList.filter(meeting => meeting.location_sub_province == "Down");
      this.DublinList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Dublin");
      this.FermanaghList = this.meetingList.filter(meeting => meeting.location_sub_province == "Fermanagh");
      this.GalwayList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Galway");
      this.KerryList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Kerry");
      this.KildareList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Kildare");
      this.KilkennyList  = this.meetingList.filter(meeting => meeting.location_sub_province == "Kilkenny");
      this.LaoisList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Laois");
      this.LeitrimList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Leitrim");
      this.LimerickList  = this.meetingList.filter(meeting => meeting.location_sub_province == "Limerick");
      this.LongfordList  = this.meetingList.filter(meeting => meeting.location_sub_province == "Longford");
      this.LouthList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Louth");
      this.MayoList      = this.meetingList.filter(meeting => meeting.location_sub_province == "Mayo");
      this.MeathList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Meath");
      this.MonaghanList  = this.meetingList.filter(meeting => meeting.location_sub_province == "Monaghan");
      this.OffalyList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Offaly");
      this.RoscommonList = this.meetingList.filter(meeting => meeting.location_sub_province == "Roscommon");
      this.SligoList     = this.meetingList.filter(meeting => meeting.location_sub_province == "Sligo");
      this.TipperaryList = this.meetingList.filter(meeting => meeting.location_sub_province == "Tipperary");
      this.TyroneList    = this.meetingList.filter(meeting => meeting.location_sub_province == "Tyrone");
      this.WaterfordList = this.meetingList.filter(meeting => meeting.location_sub_province == "Waterford");
      this.WestmeathList = this.meetingList.filter(meeting => meeting.location_sub_province == "Westmeath");
      this.WexfordList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Wexford");
      this.WicklowList   = this.meetingList.filter(meeting => meeting.location_sub_province == "Wicklow");
    });

  }

}
