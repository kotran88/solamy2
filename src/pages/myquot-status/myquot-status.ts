import { Component } from '@angular/core';
import {  ModalController,AlertController, NavController, NavParams } from 'ionic-angular';

import { MyquotInputPage } from '../myquot-input/myquot-input';
import { MyquotViewPage } from '../myquot-view/myquot-view';
import { MyquotProcessStatusPage } from '../myquot-process-status/myquot-process-status';
import { LoadingPage } from '../loading/loading';

import { TextEncoder, TextDecoder } from 'text-encoding';
// common 
import { AppmgrProvider } from '../../providers/appmgr/appmgr';
import { HttpProvider } from '../../providers/http/http';
import { CommonProvider } from '../../providers/common/common';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-myquot-status',
  templateUrl: 'myquot-status.html',
})
export class MyquotStatusPage {

  //파트너스 화면. 
  tab = "tab1";
  user_id = 0;
  email = '';
  // 요청 견적
  quotData=[];
  // 제출한 견적
  submitCont=[];
  // 계약
  agreeCont =[];
  // 설치완료
  complCont =[];
  regStatus:any;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,
    private appmgr: AppmgrProvider,
    public common: CommonProvider,
    public http: HttpProvider,
    public modalCtrl: ModalController


  ) {
    this.regStatus=this.navParams.get("regStatus");
   
    if( navParams.get('tab') ) {
      this.tab = navParams.get('tab');
    }else {
      this.tab = "tab1";
    }


    let userInfo = this.appmgr.getUserInfo();
    this.user_id = userInfo.user_id;
    this.email = userInfo.email;
    console.log(userInfo);
    // initialize
    // 요청 견적
    // let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
    // modal.present({animate:false});
    let sendData = [];
        sendData["comp_id"] = this.user_id;
    this.http.postHttpData("/getAnalyseData", sendData, (result) => {
      // modal.dismiss({}, "", {animate:false});
      console.log(result);
      if(result) {
        for(var i=0; i<result.length; i++){
          // if(this.quotData[i].reg_time
          var date = new Date();
          console.log(date);
          var timestamp = date.getTime();
          var pastTime=new Date(result[i].reg_time);
          console.log(pastTime);
          // var newdate=date-pastTime;
          var timeDiff = Math.abs(date.getTime() - pastTime.getTime());

         // days difference
         var diff = Math.abs(date.getTime() - pastTime.getTime()) / 3600000;
         var diffDays = Math.ceil(timeDiff / (1000 * 3600 ));

         console.log(diff);
         console.log(diffDays);
         if(diffDays<25){
          this.quotData.push( {"solar_power":result[i].solar_power,"reg_time":result[i].reg_time,"id":result[i].analyse_id,"month_fee":result[i].month_fee,"contract_time":result[i].contract_time,"address":this.uintToString(result[i].address.data).split(" ")[0]+this.uintToString(result[i].address.data).split(" ")[1]});
     
         }
         
        }

        console.log(this.quotData);
       
        var tag="reg_time";
        this.quotData.sort(function(a, b) {
          console.log(a[tag]);
          // convert date object into number to resolve issue in typescript
          var dateA = new Date(a[tag]).getTime();
      var dateB = new Date(b[tag]).getTime();
      return dateB > dateA ? 1 : -1;  
        })
      
        }
      else {
        this.quotData  = null;
      }
    });
    // 제출한 견적
    let sendData1= [];
        sendData1["comp_id"] = this.user_id;

    this.http.postHttpData("/getSubmitContract", sendData1, (result) => {
      if(result) {
        console.log(result);




        for(var i=0; i<result.length; i++){
          //  reg_time,submit_cont_time,address,month_fee
          console.log("iiiiiiiiiii is : "+i);
          console.log(result);
          this.submitCont.push({"submit_cont_time":result[i].submit_cont_time,"solar_power":result[i].solar_power,"id":result[i].id,"reg_time":result[i].reg_time,"analyse_id":result[i].analyse_id,"address":this.uintToString(result[i].address.data).split(" ")[0]+this.uintToString(result[i].address.data).split(" ")[1],"month_fee":result[i].month_fee})
        }
        console.log(this.submitCont);
        var tag="reg_time";
        this.submitCont.sort(function(a, b) {
          console.log(a[tag]);
          // convert date object into number to resolve issue in typescript
          var dateA = new Date(a[tag]).getTime();
      var dateB = new Date(b[tag]).getTime();
      return dateB > dateA ? 1 : -1;  
        })
      
        console.log(this.submitCont);
      }
      
      else {
        this.submitCont  = null;
      }
    });
    // 계약완료, 계약대기
    this.http.postHttpData("/getAgreeContract", sendData1, (result) => {
      if(result) {
        console.log("계약대기 완료 출력시작")
        console.log(result);
        for(var i=0; i<result.length; i++){
          //  reg_time,submit_cont_time,address,month_fee
          console.log(result[i].contract_path.data);
          this.agreeCont.push({"ins_exp_time":result[i].ins_exp_time,"contract_time":result[i].contract_time,"status":result[i].status,"contract_path":this.uintToString(result[i].contract_path.data),"quote_status":result[i].quote_status,"id":result[i].id,"reg_time":result[i].reg_time,"analyse_id":result[i].analyse_id,"submit_cont_time":result[i].submit_cont_time,"address":this.uintToString(result[i].address.data),"month_fee":result[i].month_fee})
        }
        var tag="reg_time";
        this.agreeCont.sort(function(a, b) {
          console.log(a[tag]);
          // convert date object into number to resolve issue in typescript
          var dateA = new Date(a[tag]).getTime();
      var dateB = new Date(b[tag]).getTime();
      return dateB > dateA ? 1 : -1;  
        })
        
        console.log(this.agreeCont);
      }
      else {
        console.log(result);
        this.agreeCont  = null;
      }
    });
    // 설치완료
    this.http.postHttpData("/getCompleteContract", sendData1, (result) => {
      if(result) {
        console.log(result);
        for(var i=0; i<result.length; i++){
          //  reg_time,submit_cont_time,address,month_fee
          console.log(result[i]);
        this.complCont.push({"contract_time":result[i].contract_time,"status":result[i].status,"id":result[i].id,"reg_time":result[i].reg_time,"analyse_id":result[i].analyse_id,"address":this.uintToString(result[i].address.data),"month_fee":result[i].month_fee})
        }
        var tag="reg_time";
        this.complCont.sort(function(a, b) {
          console.log(a[tag]);
          // convert date object into number to resolve issue in typescript
          var dateA = new Date(a[tag]).getTime();
      var dateB = new Date(b[tag]).getTime();
      return dateB > dateA ? 1 : -1;  
        })
        console.log(this.complCont);

      }
      else {
        console.log(result);
        this.complCont  = null;
      }
    });

    
  }
  uintToString(uintArray) {
    var decoder = new TextDecoder("utf-8");
  
      var encodedString = String.fromCharCode.apply(null, uintArray);
        var  decodedString = decoder.decode(new Uint8Array(uintArray));
      return decodedString;
  }
  ionViewWillEnter() {
   
  }

  back() {
    console.log("sssssback")
    this.navCtrl.setRoot(HomePage,{animate:false});
  }

  // 요청 견적
  quotation( analyse_id ,solar) {
    if(this.regStatus==0){

          let alert = this.alertCtrl.create({ 
        title: '승인 후에 견적내기 가능합니다',
        subTitle: '24시간 이내에<br />담당자가 연락드립니다',
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
              }
            }
        ]
      });
      alert.present({animate:false});

    }else{

      this.navCtrl.push(MyquotInputPage, {comapny_id:this.user_id, analyse_id:analyse_id ,"solar":solar},{animate:false} );
    }
  }
  // 제출한 견적
  quotationView( id ,analyse_id) {
    this.navCtrl.push(MyquotViewPage, { cont_id: id , analyse_id: analyse_id },{animate:false} );
  }
  // 설치완료
  processStatus( id, analyse_id ) {
    console.log(id);
    console.log(analyse_id)
    this.navCtrl.push(MyquotProcessStatusPage, { cont_id: id, analyse_id: analyse_id },{animate:false} );
  }
  // 상태관리
  hasQuot() {
    if(this.quotData) return true; 
    else return false;
  }
  hasSubmitCont() {
    if(this.submitCont) return true; 
    else return false;
  }
  hasAgreeCont() {
    if(this.agreeCont) return true; 
    else return false;
  }
  hasComplete() {
    if(this.complCont) return true; 
    else return false;
  }
  // common functions
  returnData(date) {
    let date1 = this.common.getStrDate(date)
    if( date1 ) {
      return date1.replace(/-/g, ".").substring(0,10);
    }else {
      return '';
    }
  }
  partnersAddress( addr ) {
    // if(addr) {
    //   var tmpAddr = addr.split(' ');
    //   var tmp = '';
    //   for(var i=0; i<tmpAddr.length-1; i++){
    //     tmp = tmp + ' ' + tmpAddr[i];
    //   }
    //   return tmp;
    // }
    return addr;
    // else return 'ttt';
  }
  numFormat( str ) {
    if(str)
      return this.common.number_format(str);
    else 
      return '0';
  }
}
