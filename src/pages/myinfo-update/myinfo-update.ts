import { Component } from '@angular/core';
import { ModalController, AlertController, NavController, NavParams } from 'ionic-angular';
import { Camera,CameraOptions } from "@ionic-native/camera";

import { ChargeGuidePage } from '../charge-guide/charge-guide';
import { HomePage } from '../home/home';
import { LoadingPage } from '../loading/loading';

import { TextEncoder, TextDecoder } from 'text-encoding';
// common 
import { AppmgrProvider } from '../../providers/appmgr/appmgr';
import { HttpProvider } from '../../providers/http/http';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-myinfo-update',
  templateUrl: 'myinfo-update.html',
})
export class MyinfoUpdatePage {

  user_id = 0;
  email = '';
  comp_name = '';
  address = '';
  clerk = '';
  contact = '';
  hp_num = '';
  elect_num = '';
  business_num = '';
  bank_name = '';
  bank_num = '';
  tax_email = '';
  post:any;
  address_detail:any;
  tax_clerk = '';
  // 
  postCode = '';
  building = '';
  area:any;
  // 
  searchFlag = false; // search diaolog
  searchValFlag = false // search result 
  input_address = '';
  // img
  tmp_elect_url = "";
  old_elect_url = "";
  elect_name = "첨부파일없음";
  tmp_buss_url = "";
  old_buss_url = "";
  buss_name = "첨부파일없음";
  userInfo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private appmgr: AppmgrProvider,
    public common: CommonProvider,
    public http: HttpProvider,
    private camera: Camera
  ) {
    this.user_id = Number(localStorage.getItem("id"));
    this.email = localStorage.getItem("email")

    
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
  ionViewWillEnter() {
    
    this.area="";
  }
  
  back() {
    this.navCtrl.setRoot(HomePage,{animate:false});
  }

  chargeGuidePage() {
    this.navCtrl.push(ChargeGuidePage, {},{animate:false} );
  }
  doSomething(i) {

  console.log(i);
  var sports = document.forms['demoForm'].elements[ 'sports' ];
  console.log(sports[i].checked);
  if(sports[i].checked==true){
    console.log(sports[i].value+"is checked inputtttt");
    this.area+=sports[i].value+"||";
    console.log(this.area);
  }
}
  save() {
    if( !this.validation() ) return false;
    // elect img upload
    // if(this.tmp_elect_url) {
    //   this.elect_num = this.tmp_elect_url;
    // }
    // else if(this.old_elect_url) {
    //   this.elect_num = 'no-update';
    // }
    // else{
    //   this.elect_num = 'deleted';
    // }
    // // business img upload
    // if(this.tmp_buss_url) {
    //   this.business_num = this.tmp_buss_url;
    // }
    // else if(this.old_buss_url) {
    //   this.business_num = 'no-update';
    // }
    // else{
    //   this.business_num = 'deleted';
    // }
    console.log(this.area);
    this.area="";
    var sports = document.forms['demoForm'].elements[ 'sports' ];
    for (var i=0, len=sports.length; i<len; i++) {
      sports[i].onclick = this.doSomething(i);
  }

  // console.log(sports);
  
    let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
    modal.present({animate:false});
    let sendData = [];
        sendData["user_id"] = this.user_id;
        sendData["email"] = this.email;
        sendData["comp_name"] = this.comp_name;
        sendData["address"] = this.address;
        sendData["address_detail"] = this.address_detail;
        sendData["post"] = this.postCode;
        sendData["clerk"] = this.clerk;
        sendData["hp_num"] = this.hp_num;
        sendData["contact"] = this.contact;
        sendData["elect_num"] = this.elect_num;
        sendData["business_num"] = this.business_num;
        sendData["bank_name"] = this.bank_name;
        sendData["bank_num"] = this.bank_num;
        sendData["tax_email"] = this.tax_email;
        sendData["tax_clerk"] = this.tax_clerk;
        sendData["area"] = this.area;

    console.log(sendData);
    this.http.postHttpData("/updatePartnerData", sendData, (result) => {
      modal.dismiss({}, "", {animate:false});
      if(result) {
        this.navCtrl.setRoot(HomePage, {},{animate:false} );
      }
    });
  }
  
  validation() {
    let str = '';
    if( this.comp_name == '' ) {
      str = '회사이름을 입력하세요.';
      this.confirmAlert(str);
      return false;
    }
    else if( this.address == '' ) {
      str = '주소를 입력하세요.';
      this.confirmAlert(str);
      return false;
    }
    else if( this.contact == '' ) {
      str = '연락처를 입력하세요.';
      this.confirmAlert(str);
      return false;
    }
    return true;
  }

  isSearch() {
    if( this.searchFlag ) {
      return true;
    }else {
      return false;
    }
  }

  toggleSearchPop() {
    if( this.searchFlag ) {
      return this.searchFlag = false;
    }else {
      return this.searchFlag = true;
    }
  }

  searchAddress() {
    let sendData = [];
        sendData["search_address"] = this.input_address;
    this.http.postHttpData("/getAddressByWord", sendData, (result) => {
      if(result) {
        this.searchValFlag = true;
        let list = "";
        for(let i = 0; i < result.length; i++) {
          list += '<li id="address_'+i+'">'+ this.common.subString(result[i].roadAddrPart1, 27) +'</li>';
        }
        
        document.getElementById("search_list").innerHTML = list;

        for(let i = 0; i < result.length; i++) {
          document.getElementById("address_"+i).addEventListener('click', (event) => this.selectMenu( result[i]) );
        }
      }
      else {
        this.searchValFlag = false;
      }
    });
  }

  selectMenu( selectedVal ) {
    this.postCode = selectedVal.zipNo;
    this.address_detail = selectedVal.bdNm;
    // this.address = selectedVal.jibunAddr
    this.address = selectedVal.roadAddrPart1
    this.toggleSearchPop();
  }

  isSearchVal() { // search result 
    if( this.searchValFlag ) {
      return true;
    }else {
      return false;
    }
  }

  confirmAlert(str) {
    let alert = this.alertCtrl.create({      
        subTitle: str,
        buttons: ['확인']
    });
    alert.present({animate:false});
  }
  // image process

  clickGallery(type) {

    const options : CameraOptions={
      quality:50,
      targetHeight:600,
      targetWidth:600,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      saveToPhotoAlbum:true
    }
    const result= this.camera.getPicture(options).then(url=>{
      console.log("url is : "+url);
      window.alert(url);
      url = url.replace(" ", "%20");
      window.alert(url);
      // var d = new Date();
      //     var n = d.getTime();
      //     console.log(url);
      //     if(type == 'elect') {
      //       // this.tmp_elect_url = url;
      //       this.elect_name = n+'.jpg';
      //       this.updateLicence(url, 'elect_num');
      //     }
      //     else if(type == 'buss') {
            
      //       // this.tmp_buss_url = url;
      //       this.buss_name = n+'.jpg';
      //       this.updateLicence(url, 'business_num');
      //     }

      
    },(err) => {
      window.alert(err);
      console.log("clickGallery err: "+err);
  })

    // var options = {
    //     quality: 100,
    //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     correctOrientation: true,
    //     maximumImagesCount: 1,
    //     targetWidth: 1000,
    //     targetHeight: 1000,
    // };
  
    // this.camera.getPicture(options)
    // .then(
    //     (url) => {
    //       var d = new Date();
    //       var n = d.getTime();
    //       console.log(url);
    //       if(type == 'elect') {
    //         // this.tmp_elect_url = url;
    //         this.elect_name = n+'.jpg';
    //         this.updateLicence(url, 'elect_num');
    //       }
    //       else if(type == 'buss') {
            
    //         // this.tmp_buss_url = url;
    //         this.buss_name = n+'.jpg';
    //         this.updateLicence(url, 'business_num');
    //       }
    //     }, 
    //     (err) => {
    //         console.log("clickGallery err: "+err);
    //     }
    // );
  }

  hasImg( oldImg, newImg ) {
    if( oldImg != '' || newImg != '' ) return true;
    else return false;
  }

  delImage(type) {
    if(type == 'elect') {
      this.updateLicence('', 'elect_num');
      this.elect_name = '첨부파일없음';
    }
    else if(type == 'buss') {
      this.updateLicence('', 'business_num');
      this.buss_name = '첨부파일없음';
    }
  }
ionViewDidLoad(){

    // get user info
    let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
    modal.present({animate:false});
    console.log("email to send"+this.email);
    let sendData = [];
        sendData["email"] = this.email;
    this.http.postHttpData("/checkUser", sendData, (result) => {
      modal.dismiss({}, "", {animate:false});

      console.log(result);
      if(result) {
        this.area=this.uintToString(result.area.data);
        console.log(this.area);
        this.comp_name = this.uintToString(result.company_name.data);
        this.address = this.uintToString(result.address.data);
        this.address_detail = this.uintToString(result.address_detail.data);
        this.postCode = this.uintToString(result.post.data);
        this.clerk = this.uintToString(result.clerk.data);
        this.hp_num = this.uintToString(result.hp_num.data);
        this.contact = this.uintToString(result.contact.data);

        this.old_elect_url = this.uintToString(result.elect_num.data);
        this.old_buss_url = this.uintToString(result.business_num.data);

        this.bank_name = this.uintToString(result.bank_name.data);
        this.bank_num  = this.uintToString(result.bank_num.data);
        this.tax_email = this.uintToString(result.tax_email.data);
        this.tax_clerk = this.uintToString(result.tax_clerk.data);
        // img
        if(this.old_elect_url != "") {
          this.elect_name = this.old_elect_url;
        }
        if(this.old_buss_url != "") {
          this.buss_name = this.old_buss_url;
        }
      }
      var sports = document.forms['demoForm'].elements[ 'sports' ];
      console.log(this.area.split("||"));
   

      var a=this.area.split("||");
      console.log(a.length);
      for (var i=0, len=sports.length; i<len; i++) {
        console.log(sports[i].type);
        console.log(sports[i].checked);
        // sports[i].checked="false";
        // sports[i].checked=false;
      }
      setTimeout(()=>{
        for (var i=0, len=sports.length; i<len; i++) {
     
          console.log(sports[i].value)
          for(var j=0; j<a.length; j++){
    
            console.log(a[j])
    
            if(a[j]==sports[i].value){
    
              console.log(a[j]+"is matched so clicked"+sports[i].checked);
              if(sports[i].checked==true){
                sports[i].checked=false;
                sports[i].checked=true;
              }else{
                sports[i].checked=false;
                sports[i].checked=true;
              }
              
            }
    
          }
      }
      },2000)
  
    });

}
  updateLicence (url, field) {
    let sendData = [];
        sendData["email"] = this.email;
        sendData["url"] = url;
        sendData["field"] = field;
    this.http.postHttpData("/updateUserLicences", sendData, (result) => {
      if(result) {
        console.log("updating licence...");
        console.log(result);
        return true;
      }else {
        console.log("updating llllllicence...");
        console.log(result);
        return false;
      }
        
    });
  }
}
