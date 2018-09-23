import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/Detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message:string ="Patipat Chew.";
  constructor(public navCtrl: NavController) {

  }
  onClickPushBtn(){
    this.navCtrl.push(DetailPage);
  }
}
