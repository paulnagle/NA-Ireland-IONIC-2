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

  constructor(private MeetingListProvider : MeetingListProvider) {
    this.getAllMeetings();
  }

  getAllMeetings(){
    this.MeetingListProvider.getMeetings().subscribe((data)=>{
        this.meetingList = data;
    });
  }


}
