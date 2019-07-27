import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-noticedetail',
  templateUrl: 'noticedetail.html',
})
export class NoticedetailPage {

  content:any;
  subject:any;
  date:any;
  url:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.content=this.navParams.get("content");
    this.subject=this.navParams.get("subject");
    this.date=this.navParams.get("date");
    this.url=this.navParams.get("url");
    console.log(this.url);
    this.url="http://solarmy.co.kr/"+this.url;
    console.log(this.url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticedetailPage');
  }
  back(){
    this.navCtrl.pop();
  }

}
