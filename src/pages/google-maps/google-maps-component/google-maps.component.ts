import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { MeetingListProvider } from '../../../providers/meeting-list/meeting-list';

@Component({
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {

  meetingList : any;

  loader = null;
  constructor(private MeetingListProvider : MeetingListProvider, public loadingCtrl: LoadingController) {

    this.loader = this.loadingCtrl.create({
          content: "Loading Meetings..."
        });
    this.loader.present();

    this.getAllMeetings();
  }

  // Google Map zoom level
  zoom: number = 8;

  // Google Map center
  latitude: number = 53.341318;
  longitude: number = -6.270205;

  dayOfWeekAsString(dayIndex) {
  	return ["not a day?", "Sun", "Mon","Tue","Wed","Thu","Fri","Sat"][dayIndex];
  }

  getAllMeetings(){
    this.MeetingListProvider.getMeetings().subscribe((data)=>{
      this.meetingList  = data;
      this.meetingList  = this.meetingList.filter(meeting => meeting.latitude = parseFloat(meeting.latitude));
      this.meetingList  = this.meetingList.filter(meeting => meeting.longitude = parseFloat(meeting.longitude));
      this.meetingList  = this.meetingList.filter(meeting => meeting.start_time = (meeting.start_time).substring(0,5));
      this.meetingList  = this.meetingList.filter(meeting => meeting.weekday_tinyint = this.dayOfWeekAsString(meeting.weekday_tinyint));

      this.loader.dismiss();
    });
  }



}
