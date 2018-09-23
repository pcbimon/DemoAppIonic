import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PromotionPage } from '../promotion/promotion';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  spy = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  onClickRun(){
    // alert("Hello World");
    this.spy = "I'm spy 55555";
  }
  onClickPop(){
    this.navCtrl.pop();
  }
  onOpenPromotionPage(){
    this.navCtrl.push(PromotionPage);
  }

}
