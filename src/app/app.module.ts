import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SharedModule } from './shared/shared.module'
import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { SlidesModule } from '../pages/slides/slides.module';
import { GridModule } from '../pages/grid/grid.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { FeedsModule } from '../pages/feeds/feeds.module';
import { YoutubeModule } from '../pages/youtube/youtube.module';
import { AboutModule } from '../pages/about/about.module';
import { ContactModule } from '../pages/contact/contact.module';
import { DatetimeModule } from '../pages/datetime/datetime.module';
import { ActionSheetModule } from '../pages/action-sheet/action-sheet.module';
import { FacebookConnectModule } from '../pages/facebook-connect/facebook-connect.module';
import { LoginModule } from '../pages/login/login.module';
import { BarcodeScannerModule } from '../pages/barcode-scanner/barcode-scanner.module';
import { ChartsModule } from '../pages/charts/charts.module';
// Module Example: Use the PlaceholderModule for any new App Module
import { PlaceholderModule } from '../pages/placeholder/placeholder.module';

import { MyApp } from './app.component';

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
    SlidesModule,
    GridModule,
    SettingsModule,
    FeedsModule,
    YoutubeModule,
    AboutModule,
    ContactModule,
    DatetimeModule,
    ActionSheetModule,
    FacebookConnectModule,
    LoginModule,
    BarcodeScannerModule,
    ChartsModule,
    PlaceholderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
