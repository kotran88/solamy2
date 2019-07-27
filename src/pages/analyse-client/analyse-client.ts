import { Component } from '@angular/core';
import { ModalController, AlertController, NavController, NavParams } from 'ionic-angular';

import { MyClientPage } from '../my-client/my-client';
import { LoadingPage } from '../loading/loading';

import { TextEncoder, TextDecoder } from 'text-encoding';
// common 
import { AppmgrProvider } from '../../providers/appmgr/appmgr';
import { HttpProvider } from '../../providers/http/http';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-analyse-client',
  templateUrl: 'analyse-client.html',
})
export class AnalyseClientPage {

  user_id = 0;
  mem_type = 0;
  login_flag = false;
  email = '';
  name = '';
  address = '';
  contact = '';
  month_fee = "";
  // 
  postCode = '';
  building = '';
  // 
  userInfo:any;
  searchFlag = false; // search diaolog
  searchValFlag = false // search result 
  input_address = '';
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private appmgr: AppmgrProvider,
    public common: CommonProvider,
    public http: HttpProvider) {
      
    
  }
  
   numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
checkFocus(){
  console.log("onfocus")
  if(this.month_fee.length>0){
    this.month_fee="";
  }
}
change(event) {
  console.log(event);
  console.log(this.month_fee);
  var final_price=this.month_fee;
  this.month_fee=this.month_fee+"원";
    // (<HTMLInputElement>document.getElementById("value1")).value = event+"won";
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
    var userInfo = this.appmgr.getUserInfo();
    this.user_id = userInfo.user_id;
    this.userInfo=userInfo;
    console.log(userInfo);
    console.log(this.userInfo);
    console.log("email issss")
    this.email=localStorage.getItem("email");
    this.user_id = this.userInfo.user_id;
    this.mem_type = this.userInfo.mem_type;
    // this.name = this.uintToString(this.userInfo.name.data);
    // this.address = this.uintToString(this.userInfo.address.data) 
    console.log(this.address);
    // this.postCode = userInfo.zipcode,
    // this.building = userInfo.building,
    // this.contact = this.uintToString(this.userInfo.contact.data)  
    // this.month_fee = this.userInfo.month_fee;
    // this.month_fee=this.numberWithCommas(this.month_fee)+"원";
    // this.postCode=this.userInfo.zipcode;
    if(this.userInfo.login_flag == 1) {
      this.login_flag = true;
    }else {
      this.login_flag = false;
    }
    
    this.postCode = '';
    this.building = '';
  }

  back() {
    this.navCtrl.pop({animate:false});
  }
  
  analyseClient() {
    if( !this.validation() ) return false;

    let modal = this.modalCtrl.create(LoadingPage, {txt: "제출중입니다..."});
    modal.present({animate:false});
    var newvalue=(<HTMLInputElement>document.getElementById("detailaddress")).value;
    let sendData = [];
        sendData["user_id"] = this.user_id;
        sendData["email"] = this.email;
        sendData["name"] = this.name;
        sendData["address"] = this.address;
        sendData["address_detail"] = newvalue;
        sendData["post"] = this.postCode;
        sendData["contact"] = this.contact;
        sendData["month_fee"] = this.month_fee;
        console.log(sendData);
        
        this.http.postHttpData("/getCountsAnal", sendData, (result) => 
    {
    
      if(result) 
      {

        console.log(result.cnt);
        if(result.cnt>2){
          modal.dismiss({}, "", {animate:false});
              let alert = this.alertCtrl.create({ 
          title: '분석의뢰 제한 안내',
          subTitle: '2개월 이내에는 <br />세번의 요청만 가능합니다. ',
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
                  this.navCtrl.pop();
                }
              }
          ]
        });
        alert.present({animate:false});
        }else{

                this.http.postHttpData("/analyseNormalClient", sendData, (result) => 
          {
            modal.dismiss({}, "", {animate:false});
            if(result) 
            {
              let alert = this.alertCtrl.create({ 
                title: '의뢰해주셔서 감사합니다.',
                subTitle: '24시간 내에 (영업시간 기준) 분석 <br />요청하신 자료를 받아 보실 수 있습니다.',
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
                        this.clientSuccess ();
                      }
                    }
                ]
              });
              alert.present({animate:false});
            }
          });

        }
      }
    });
   
  }

  clientSuccess () {
    let userData = {
      name : this.name,
      address : this.address,
      zipcode : this.postCode,
      building : this.building,
      contact : this.contact,
      month_fee : this.month_fee
    }
    this.appmgr.setUserInfoIndivial(userData);

    this.navCtrl.push(MyClientPage, {},{animate:false} );
  }

  validation() {
    let str = '';
    if( this.name == '' ) {
      str = '성함을 입력하세요.';
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
    else if( Number(this.month_fee) <= 0) {
      str = '월평균 전기요금을 입력하세요.';
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
    this.building = selectedVal.bdNm;
    // this.address = selectedVal.jibunAddr
    this.address = selectedVal.roadAddrPart1
    console.log(this.postCode);
    console.log(this.building);
    console.log(this.address);
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
}
