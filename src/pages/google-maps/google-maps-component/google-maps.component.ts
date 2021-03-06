import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { MeetingListProvider } from '../../../providers/meeting-list/meeting-list';

@Component({
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {

  meetingList : any;

  loader = null;
  constructor(private MeetingListProvider : MeetingListProvider,
              public loadingCtrl: LoadingController,
              public plt: Platform) {

    this.loader = this.loadingCtrl.create({
          content: "Loading Meeting Map...",
          duration: 10000
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

      //check to see if any of the  markers overlap.. meetings are sorted by long first, then lat
      // If lat/longs overlap, move one by a couple of meters
      var i : any;
      for (i = 0; i < this.meetingList.length - 1; i++) {
        var longOffset : any = 0;
        var latOffset : any = 0;
        var Offset : any = 0.00002;
        // maybe use :- https://github.com/TopicFriends/TopicFriends/commit/d6c61ae976eb1473b314bd804cebacd5106dac37
        while ((this.meetingList[i].longitude == this.meetingList[i+1].longitude) &&
               (this.meetingList[i].latitude == this.meetingList[i+1].latitude) ){
          if ( (i % 2) === 1) {
            longOffset += Offset;
            this.meetingList[i].longitude = this.meetingList[i].longitude  + longOffset;
          } else {
            latOffset += Offset;
            this.meetingList[i].latitude = this.meetingList[i].latitude  + latOffset;
          }
          i++;
          if (i == (this.meetingList.length - 1)) {
            longOffset = 0;
            latOffset = 0;
            break;
          }
        } // while
      } // for

      this.loader.dismiss();
    });
  }

  public openMapsLink(destLatitude, destLongitude) {
    // ios
    if (this.plt.is('ios')) {
      window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude + ')', '_system');
    };
    // android
    if (this.plt.is('android')) {
      window.open('https://www.google.com/maps/search/?api=1&query=' + destLatitude + ',' + destLongitude + ')', '_system');
    };


  }

}
