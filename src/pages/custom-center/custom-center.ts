import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KakaoCordovaSDK } from 'kakao-sdk';
// import { CallNumber } from '@ionic-native/call-number';
import { CompareQuotationPage } from '../compare-quotation/compare-quotation';
import { GovernmentPage } from '../government/government';

import { CallNumber } from '@ionic-native/call-number';
import { BenefitgeneratorPage } from '../benefitgenerator/benefitgenerator';
import { EscroPage } from '../escro/escro';



/**
 * Generated class for the CustomCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-custom-center',
  templateUrl: 'custom-center.html',
})
export class CustomCenterPage {

  partnerflag:boolean;
  constructor(public _kakaoCordovaSDK: KakaoCordovaSDK,public callNumber:CallNumber,public navCtrl: NavController, public navParams: NavParams) {


    this.partnerflag=this.navParams.get("partnerflag");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomCenterPage');
  }
  compareQuo(){
    this.navCtrl.push(CompareQuotationPage, {"partnerflag":this.partnerflag},{animate:false} );
  }
  escroclick(){
    this.navCtrl.push(EscroPage);
  }
  government(){
    this.navCtrl.push(GovernmentPage, {},{animate:false} );
  }
  generator(){
    this.navCtrl.push(BenefitgeneratorPage, {},{animate:false} );
  }
  connectToKakao(){
    console.log("plug friends")
    let plusFriendTemplate = {
      plusFriendId: '_MxeTUj',
    };
    this._kakaoCordovaSDK
      .addPlusFriend(plusFriendTemplate)
      .then(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
      .catch(err => {
      });
  }
  phonecall(){

    
this.callNumber.callNumber("07076642221", true)


.then(res => console.log('Launched dialer!', res))
.catch(err => console.log('Error launching dialer', err));

  }
  back() {
    this.navCtrl.pop({animate:false});
  }
}
