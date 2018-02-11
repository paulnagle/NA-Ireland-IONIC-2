import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { MeetingListProvider } from '../../../providers/meeting-list/meeting-list';

@Component({
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {

  options : InAppBrowserOptions = {
      location : 'yes',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only
      toolbar : 'yes', //iOS only
      enableViewportScale : 'no', //iOS only
      allowInlineMediaPlayback : 'no',//iOS only
      presentationstyle : 'pagesheet',//iOS only
      fullscreen : 'yes',//Windows only
  };

  meetingList : any;

  loader = null;
  constructor(private MeetingListProvider : MeetingListProvider,
              public loadingCtrl: LoadingController,
              private theInAppBrowser: InAppBrowser) {

    this.loader = this.loadingCtrl.create({
          content: "Loading Meeting Map..."
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

  public openMapsLink(destLatitude, destLongitude){
    let target = "_blank";
    let url = "https://www.google.com/maps/search/?api=1&query=" + destLatitude + ',' + destLongitude;
    this.theInAppBrowser.create(url,target,this.options);
  }

}
