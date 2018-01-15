import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { SpeakersComponent } from './speakers-component/speakers.component';

@NgModule({
  declarations: [
    SpeakersComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    SpeakersComponent
  ],
  entryComponents:[
  	SpeakersComponent
  ]
})
export class SpeakersModule {}
