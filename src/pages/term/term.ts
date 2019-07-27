import { Component } from '@angular/core';
import { NavController, ViewController,NavParams, Platform } from 'ionic-angular';

import { TextEncoder, TextDecoder } from 'text-encoding';
// common 
import { AppmgrProvider } from '../../providers/appmgr/appmgr';
import { HttpProvider } from '../../providers/http/http';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-term',
  templateUrl: 'term.html',
})
export class TermPage {
  type = '';
  content = '';
  email:any;
  pass:any;
  repass:any;

  viewCtrl:any;
  constructor(viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams,
    private appmgr: AppmgrProvider,
    public common: CommonProvider,
    public http: HttpProvider,
    public platform:Platform
  ) {

      
    this.viewCtrl=viewCtrl;
    let typeTmp = navParams.get('type');
    this.email = navParams.get('email');
    this.pass = navParams.get('pass');
    this.repass = navParams.get('repass');

    console.log(this.email);
    console.log(this.pass);
    console.log(this.repass);
    if(typeTmp == 'term') {
      this.type = '이용약관';
    }else {
      this.type = '개인정보 처리 방침';
    }
  }
  uintToString(uintArray) {
    var decoder = new TextDecoder("utf-8");
  
      var encodedString = String.fromCharCode.apply(null, uintArray);
        var  decodedString = decoder.decode(new Uint8Array(uintArray));
      return decodedString;
  }
  ionViewWillEnter() {
    let sendData = [];
        sendData['type'] = this.type == '이용약관' ? 0 : 1;
        if(this.type=='개인정보 처리 방침'){
          
        }
    // this.http.postHttpData("/getTerm", sendData, (result) => 
    // {
    //   console.log(result);
    //   if(result) {
        
    //     this.content = this.uintToString(result.term.data) 
    //   }
    // });
  }

  back() {
    this.viewCtrl.dismiss({"email":this.email,"pass":this.pass,"repass":this.repass});
  }
}
