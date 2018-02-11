import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SharedModule } from './shared/shared.module'
import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { AboutModule } from '../pages/about/about.module';
import { ContactModule } from '../pages/contact/contact.module';
import { DatetimeModule } from '../pages/datetime/datetime.module';
import { MeetinglistModule }  from '../pages/meetinglist/meetinglist.module';
import { JustfortodayModule } from '../pages/justfortoday/justfortoday.module';
import { SpeakersModule }     from '../pages/speakers/speakers.module';
import { MeetingListProvider } from '../providers/meeting-list/meeting-list';

import { HttpClientModule  } from '@angular/common/http';

import { MyApp } from './app.component';
import { JftProvider } from '../providers/jft/jft';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SharedModule,
    HomeModule,
    TabsModule,
    GoogleMapsModule,
    WordpressModule,
    SettingsModule,
    AboutModule,
    ContactModule,
    DatetimeModule,
    JustfortodayModule,
    SpeakersModule,
    MeetinglistModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    MeetingListProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JftProvider,
    InAppBrowser
    ]
})
export class AppModule {}
