import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TextEncoder, TextDecoder } from 'text-encoding';
import { NoticedetailPage } from '../noticedetail/noticedetail';
/**
 * Generated class for the NotiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-noti',
  templateUrl: 'noti.html',
})
export class NotiPage {

  partnerflag:any;
  notilist=[];
  notilistnew=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var a =this.navParams.get("flag")
    this.notilist=this.navParams.get("notilist");
    this.partnerflag=this.navParams.get("partnerflag");
    // this.notilist.push({"content":"abc"});
    // this.notilist.push({"content":"abc22"});
    // this.notilist.push({"content":"abc333"});
    console.log(this.partnerflag);

    for(var i=0; i<this.notilist.length; i++){
      if(this.notilist[i].user_type==this.partnerflag){


      console.log(this.notilist[i]);
      console.log(this.uintToString(this.notilist[i].file_path.data));
      console.log(this.uintToString(this.notilist[i].file_name.data));
      var filepath=this.uintToString(this.notilist[i].file_path.data);
      var filename=this.uintToString(this.notilist[i].file_name.data);
        this.notilistnew.push({"url":filepath+filename,"subject":this.uintToString(this.notilist[i].subject.data),"content":this.uintToString(this.notilist[i].content.data),"date":this.notilist[i].reg_time.split("T")[0]});
      }
    }
    var tag="date";
    this.notilistnew.sort(function(a, b) {
      console.log(a[tag]);
      // convert date object into number to resolve issue in typescript
      var dateA = new Date(a[tag]).getTime();
  var dateB = new Date(b[tag]).getTime();
  return dateB > dateA ? 1 : -1;  
    })


    console.log(this.notilistnew);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotiPage');
  }
  back(){
    this.navCtrl.pop({animate:false});
  }
  gotodetail(a){
    console.log(a);
    this.navCtrl.push(NoticedetailPage,{"url":a.url,"date":a.date,"content":a.content,"subject":a.subject})
  }
  uintToString(uintArray) {
    var decoder = new TextDecoder("utf-8");
  
      var encodedString = String.fromCharCode.apply(null, uintArray);
        var  decodedString = decoder.decode(new Uint8Array(uintArray));
  //         let decoder = new TextDecoder('utf-8');
  // return decoder.decode(uintArray);
      //  var   decodedString = encodeURIComponent(encodedString);
      return decodedString;
  }
}
