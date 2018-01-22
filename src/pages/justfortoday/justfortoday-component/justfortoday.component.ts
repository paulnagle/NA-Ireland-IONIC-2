import { Component } from '@angular/core';
import { JftProvider } from '../../../providers/jft/jft';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-justfortoday',
  templateUrl: 'justfortoday.html'
})

export class JustfortodayComponent {

   jft : string;

  constructor(private JftProvider : JftProvider ) {
    this.getJFT();
  }

  getJFT(){
    this.JftProvider.getJFT().subscribe((data)=>{
      this.jft = data;
      console.log(data);

    });
  }

}
