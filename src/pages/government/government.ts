import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { AppmgrProvider } from '../../providers/appmgr/appmgr';
/**
 * Generated class for the GovernmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-government',
  templateUrl: 'government.html',
})
export class GovernmentPage {

  email:any;
  name:any;
  tel:any;
  userInfo:any;
  constructor(public alertCtrl:AlertController,public http:HttpProvider,private appmgr: AppmgrProvider,public navCtrl: NavController, public navParams: NavParams) {

    this.userInfo  = this.appmgr.getUserInfo();
    console.log(this.userInfo);
  }

  back() {
    this.navCtrl.pop({animate:false});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GovernmentPage');
  }
  consulting(){
  //  if(this.email!=null && this.name!=null && this.name!=null) {
      let sendData = [];
          sendData["email"] = this.email;
          sendData["name"] = this.name;
          sendData["contact"] = this.tel;
          sendData["division"] = "태양광정부지원"
          console.log(sendData);
      this.http.postHttpData("/requestGovernmentInquiry", sendData, (result) => 
      {
        console.log(result);
        if(result=="ok") 
        {
          let alert = this.alertCtrl.create({ 
            title: '상담이 요청되었습니다.',
            subTitle: '담당자가 확인 후 전화 연락드리겠습니다.',
            buttons: [
                {
                  text: '취소',
                  cssClass: 'cancel',
                  handler: data => {
                    // console.log("Cancel...", id);
                  }
                },
                {
                  text: '확인',
                  cssClass: 'confirm',
                  handler: data => {
                    this.email=null;
                    this.tel=null;
                    this.name=null;
                  }
                }
            ]
          });
          alert.present({animate:false});
         
        }
      });

    }
 // }
}
