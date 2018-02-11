import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Config } from '../../../app/app.config';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactComponent {

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

  email: {subject: string, body: string} = {
    subject: '',
    body: ''
  };

  constructor(
  	private config: Config,
    private emailComposer: EmailComposer,
    private theInAppBrowser: InAppBrowser
  ) {}

  sendEmail() {
  	let email = {
  		to: this.config.emailTo,
  		cc: '',
  		bcc: '',
  		attachments: [],
  		subject: this.email.subject,
  		body: this.email.body,
  		isHtml: true
  	};
  	this.emailComposer.open(email);
  }

  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.theInAppBrowser.create(url,target,this.options);
  }

}
