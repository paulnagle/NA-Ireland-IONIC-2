import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { JftProvider } from '../../../providers/jft/jft';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-justfortoday',
  templateUrl: 'justfortoday.html'
})

export class JustfortodayComponent {

   jft : string;
   loader = null;

  constructor(private JftProvider : JftProvider , public loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create({
          content: "Loading Just For Today..."
        });
    this.loader.present();
    this.getJFT();
  }

  getJFT(){
    this
      .JftProvider
      .getJFT()
      .timeout(10000)
      .subscribe((data)=>{
        this.jft = data;
        this.loader.dismiss();
      }, (errorResponse: any) =>{
        this.jft = "Timed out after 10 seconds. Check internet connection?";
        this.loader.dismiss();
      });
  }

}
