import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, ModalController, Platform  } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { File } from '@ionic-native/file';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';

import { TextEncoder, TextDecoder } from 'text-encoding';
import { CompanyDetailPage } from '../company-detail/company-detail';
import { ProcessStatmodalPage } from '../process-statmodal/process-statmodal';
import { CalendarmodalPage } from '../calendarmodal/calendarmodal';
import { LoadingPage } from '../loading/loading';
import { PdfViewerPage } from './../pdf-viewer/pdf-viewer';

// common 
import { AppmgrProvider } from '../../providers/appmgr/appmgr';
import { HttpProvider } from '../../providers/http/http';
import { CommonProvider } from '../../providers/common/common';
import { CONFIG } from '../../config/config';
import { EscroPage } from '../escro/escro';

@Component({
  selector: 'page-process-status',
  templateUrl: 'process-status.html',
})
export class ProcessStatusPage {
  tab = "tab1";
  array=[];
  cname:any;
  contractinfo:any;
  evalval:any="평가하기"
  user_id = 0;
  contractFinished:any;
  confirmmessage:any="구매확정"
  selectedIndex:any=-0;
  radio = false;
  client = 0; // 의뢰버튼
  // 
  termFlag = false; //  // 동의버튼
  contractFlag = false; // 계약버튼
  pay = 0;          // 결제
  payDate = '';          // 결제date
  // 
  analyse_id = 0;       // 분석
  contCompId = 0;       // 계약(의뢰)된 회사id
  contCompTmpId = 0;    // 계약된 회사id tmp
  comData=[];        // 고객의뢰 data
  contData :any;         // 계약 data
  // 평가주기
  imgUrl = [];
  rating = 0;           // 
  comment = '';
  hasCom = 1;           // 처음으로 평가를 줄때 1
  // 계약 및 결제

  contractcomp_id:any;
  public confirmflag:any;
  installDay = '';
  contCompDate = '';
  newarray:any;
  contract_path = '';   // 계약서 경로
  escro_url = CONFIG.ESCRO_URL;       // 에스크로 결제 
  public target = "_system";// "_self";//_blank, _system
  public inAppoptions_Android : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
  };
   formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('.');
}

  constructor(public inapp:InAppBrowser,public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    private photoViewer: PhotoViewer ,
    private appmgr: AppmgrProvider,
    public common: CommonProvider,
    public http: HttpProvider, 
    
    public appbrowser:InAppBrowser,
    public alertCtrl: AlertController,
    private platform: Platform,
    private document: DocumentViewer, 
    private file: File, 
    private transfer: FileTransfer
  ) {
    this.array=navParams.get("array");
    this.analyse_id = navParams.get('analyse_id');
    console.log(this.array);
    console.log(this.analyse_id);
    for(var i=0; i<this.array.length; i++){
      if(this.array[i].id==this.analyse_id){
        console.log("!!!KKK");
        console.log(this.array[i]);
       
      }
    }
    console.log(this.array[i]);
    console.log("above is array from before ")

    this.confirmflag=localStorage.getItem("confirm"+this.analyse_id);
    if(this.confirmflag=="yes"){
      this.confirmmessage="구매확정완료"
    }
    let userInfo = this.appmgr.getUserInfo();
    this.user_id = userInfo.user_id;
    console.log(userInfo);
    // initialize
    let star = 'assets/imgs/star.png';
    for(var i=0; i<5; i++) {
      this.imgUrl[i] = star;
    }
    this.comData=[];
    // get company data
    let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
    modal.present({animate:false});
    let sendData = [];
        sendData["analyse_id"] = this.analyse_id;
    this.http.postHttpData("/getCompanyData", sendData, (result) => {
      modal.dismiss({}, "", {animate:false});
      console.log("result show");
      console.log(result);
      if(result) {
        for(var i=0; i<result.length; i++){
          console.log(i);
          if(result[i].company_name!=null){
            console.log(result[i]);
            console.log(result[i].company_name.data);
            //설치예정일 5 -5
            //설치완료일 5- 10
            //설치희망일 4-24
            //고객 계약 동의일 5-9
            //파트너 계약 동의일 5 - 11
            var contract_time="";
            if(result[i].contract_time!=null){
              if(result[i].contract_time=="0000-00-00 00:00:00"){
                contract_time="";
              }else{
                var ndate=new Date(result[i].contract_time);
                ndate.setDate(ndate.getDate());
                console.log(this.formatDate(ndate));
                contract_time=this.formatDate(ndate);
              }
              // contract_time=this.array[i].contract_time.split("T")[0].replace("-",".").replace("-",".")
            
            }else{
              contract_time="";
            }
            var ins_exp_time="";
            if(result[i].ins_exp_time!=null){ 
              if(result[i].ins_exp_time=="0000-00-00 00:00:00"){

              }else{
                var ndate=new Date(result[i].ins_exp_time);
                ndate.setDate(ndate.getDate());
                console.log(this.formatDate(ndate));
                ins_exp_time=this.formatDate(ndate);
              }
             

              // ins_exp_time=result[i].ins_exp_time.split("T")[0].replace("-",".").replace("-",".")
           

            }else{
              ins_exp_time="";
            }
             var ins_comp_time="";
            if(result[i].ins_comp_time!=null){ 
              if(result[i].ins_comp_time=="0000-00-00 00:00:00"){
                ins_comp_time="";
              }else{
                console.log(result[i].ins_comp_time);
                var ndate=new Date(result[i].ins_comp_time);
                ndate.setDate(ndate.getDate());
                console.log(this.formatDate(ndate));
                ins_comp_time=this.formatDate(ndate);
                console.log(ins_comp_time);
              }
             

            }else{
              ins_comp_time="";
            }
               var ins_hope_time="";
            if(result[i].ins_hope_time!=null){ 
              var ndate=new Date(result[i].ins_hope_time);
              ndate.setDate(ndate.getDate());
              console.log(this.formatDate(ndate));
              ins_hope_time=this.formatDate(ndate);
           

            }else{
              ins_hope_time="";
            }
            this.newarray={"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time};
            console.log(this.newarray);
             this.comData.push({"add_price":result[i].add_price,"company_name": this.uintToString(result[i].company_name.data),"comp_id":result[i].comp_id,"final_price":result[i].final_price,"rate":result[i].rate,"analyse_id":result[i].analyse_id});
         
          }
        }
        console.log(result[0].comp_id);
        this.radioClicked(result[0].comp_id,0);
        console.log("come data");
        console.log(this.comData);
      
      
      }
      else {
        this.comData  = null;
        this.contCompId = 0;
      }
    });
    // get analyse data
    let sendData1 = [];
        sendData1["analyse_id"] = this.analyse_id;
        console.log("company id is : "+this.contCompId);
    this.http.postHttpData("/getAnalyseById", sendData1, (result) => {
      if(result) {  // 계약된 회사가 있으면
        console.log(result);
        this.contCompId = result.cont_comp_id;
        if( result.contract_time!="0000-00-00 00:00:00" ) {
          this.contCompDate = this.getStrDate(result.contract_time);
          console.log("동의일 : "+this.contCompDate)
          this.contractFlag = true;   // 계약된것으로 절환
        }
       




        let sendData2 = [];
            sendData2["comp_id"] = this.contCompId;
            sendData2["analyse_id"] = this.analyse_id;

            let sendData1 = [];
            sendData1["analyse_id"] = this.analyse_id;
            console.log(sendData2);
        this.http.postHttpData("/getCompanyDataByCompId", sendData2, (result) => {
          if(result) {
            console.log("kkkkkkkkkkkkkkk");
            console.log(result);
            let sendData1 = [];
            sendData1["analyse_id"] = this.analyse_id;
            sendData1["cont_id"] = result.cid;

            this.http.postHttpData("/getQuotStatus", sendData1, (result) => {
                if(result) {

                    console.log(result);
                    let sendData1 = [];
                    sendData1["analyse_id"] = this.analyse_id;
                    sendData1["cont_id"] = result.id;
                    this.http.postHttpData("/getCompanyData", sendData1, (result2) => {
                      if(result2) {
                        console.log("new result is ")
                        console.log(result2);
                        console.log(this.contractcomp_id)
                        for(var i=0; i<result2.length; i++){
                          if(result2[i].comp_id==this.contractcomp_id){
                            this.cname=this.uintToString(result2[i].company_name.data);
  
                            this.contract_path=this.uintToString(result2[i].contract_path.data)
  
  
                            console.log("contract path is ")
                            console.log(this.contract_path)
                            console.log(this.cname);
                            console.log(result);
                      if(result.add_price_content!=null){
                        var contract_time="";
                        if(result.contract_time!=null){
                          contract_time=result.contract_time;
                        }else{
                          contract_time="";
                        }
                        var ins_exp_time="";
                        if(result.ins_exp_time!=null&&result.ins_exp_time!="0000-00-00 00:00:00"){ 
                            ins_exp_time=result.ins_exp_time;
                       
          
                        }else{
                          ins_exp_time="";
                        }
                         var ins_comp_time="";
                        if(result.ins_comp_time!=null&&result.ins_comp_time!="0000-00-00 00:00:00"){ 
                          ins_comp_time=result.ins_comp_time
                       
          
                        }else{
                          ins_comp_time="";
                        }
                           var ins_hope_time="";
                        if(result.ins_hope_time!=null){ 
                          ins_hope_time=result.ins_hope_time
                       
          
                        }else{
                          ins_hope_time="";
                        }
                        var comname="";
                        for(var i=0; i<this.comData.length; i++){
                            if(this.comData[i].comp_id==result.comp_id){
  
                                comname=this.comData[i].company_name;
                            }
                            console.log(this.comData[i].comp_id)
                        }
                        this.contData={"add_price":result.add_price,"final_price":result.final_price,"add_price_content":this.uintToString(result.add_price_content.data),"add_price_flag":result.add_price_flag,"comp_id":result.comp_id,"company_name": comname,"cont_price":result.cont_price};
                        this.newarray={"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time};
                     
                        console.log("tttthis is new arrayyyy");
                        console.log(this.newarray); 
                        console.log(this.comData);
                      }else{
                        var contract_time="";
                        if(result.contract_time!=null){
                          contract_time=result.contract_time
                        }else{
                          contract_time="";
                        }
                        var ins_exp_time="";
                        if(result.ins_exp_time!=null&&result.ins_exp_time!="0000-00-00 00:00:00"){ 
                            ins_exp_time=result.ins_exp_time
                       
          
                        }else{
                          ins_exp_time="";
                        }
                         var ins_comp_time="";
                        if(result.ins_comp_time!=null&&result.ins_comp_time!="0000-00-00 00:00:00"){ 
                          ins_comp_time=result.ins_comp_time
                       
          
                        }else{
                          ins_comp_time="";
                        }
                           var ins_hope_time="";
                        if(result.ins_hope_time!=null){ 
                          ins_hope_time=result.ins_hope_time
                       
          
                        }else{
                          ins_hope_time="";
                        }
                        if(result.company_name!=undefined){
                          this.contData={"add_price":result.add_price,"final_price":result.final_price,"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time,"add_price_flag":result.add_price_flag,"comp_id":result.comp_id,"company_name": this.uintToString(result.company_name.data),"cont_price":result.cont_price};
                        }else{
                          this.contData={"add_price":result.add_price,"final_price":result.final_price,"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time,"add_price_flag":result.add_price_flag,"comp_id":result.comp_id,"company_name": this.cname,"cont_price":result.cont_price};
                        }
                        this.newarray={"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time};
                     
                        console.log(this.cname);
                        console.log("this is new array");
                        console.log(this.newarray); 
                        console.log(this.comData);
                        console.log(this.contData);
                      }
                      this.pay = result.pay_flag; 
                      this.payDate = this.getStrDate(result.pay_time); 
                      if(result.custom_replay!=null){
                        this.comment = this.uintToString(result.custom_replay.data) ; 
                      }
                    
                      this.rating = result.rate;
                      let star = 'assets/imgs/star.png';
                      let stared = 'assets/imgs/star2.png';
                      for(var i=0; i<5; i++) {
                        if( result.rate > 0 && i+1 <= result.rate ) {
                          this.hasCom = 0;
                          this.imgUrl[i] = stared;
                        }
                        else
                          this.imgUrl[i] = star;
                      }   
                          }
                        }
                        

                      }
                    });


                }
            });
        }
    });



        




        
      }
      else {
        this.contCompId = 0;
      }
    });
    // get today
    let curSelDate = this.getToday();
    let year = curSelDate.getFullYear();
    let month = curSelDate.getMonth() + 1;
    let day = curSelDate.getDate();
    this.installDay = this.correctDate(year, month, day);

  }
  escroclick(){
    this.navCtrl.push(EscroPage)
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
    // let userInfo = this.appmgr.getUserInfo();
    // this.user_id = userInfo.user_id;
    // console.log(userInfo);
    // // initialize
    // let star = 'assets/imgs/star.png';
    // for(var i=0; i<5; i++) {
    //   this.imgUrl[i] = star;
    // }
    // this.comData=[];
    // // get company data
    // let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
    // modal.present({animate:false});
    // let sendData = [];
    //     sendData["analyse_id"] = this.analyse_id;
    // this.http.postHttpData("/getCompanyData", sendData, (result) => {
    //   modal.dismiss({}, "", {animate:false});
    //   console.log("result show");
    //   console.log(result);
    //   if(result) {
    //     for(var i=0; i<result.length; i++){
         
    //       this.comData.push({"company_name": this.uintToString(result[i].company_name.data),"comp_id":result[i].comp_id,"final_price":result[i].final_price,"rate":result[i].rate,"analyse_id":result[i].analyse_id});
    //     }
    //     console.log("come data");
    //     console.log(this.comData);
      
      
    //   }
    //   else {
    //     this.comData  = null;
    //     this.contCompId = 0;
    //   }
    // });
    // // get analyse data
    // let sendData1 = [];
    //     sendData1["analyse_id"] = this.analyse_id;
    // this.http.postHttpData("/getAnalyseById", sendData1, (result) => {
    //   if(result) {  // 계약된 회사가 있으면
    //     this.contCompId = result.cont_comp_id;
    //     if( result.contract_time ) {
    //       this.contCompDate = this.getStrDate(result.contract_time);
    //       this.contractFlag = true;   // 계약된것으로 절환
    //     }
    //     // 계약된 회사정보(계약&평가 정보얻기)
    //     let sendData2 = [];
    //         sendData2["comp_id"] = this.contCompId;
    //         sendData2["analyse_id"] = this.analyse_id;
    //     this.http.postHttpData("/getCompanyDataByCompId", sendData2, (result) => {
    //       if(result) {
    //         console.log(result);
    //         // this.comData={"inv_guarent":this.uintToString(result.inv_guarent.data),"module_guarent":this.uintToString(result.module_guarent.data),"quality":this.uintToString(result.quality.data),"inv_name":this.uintToString(result.inv_name),"module_name":this.uintToString(result.module_name),"address":this.uintToString(result.address.data),"company_name": this.uintToString(result.company_name.data),"comp_id":result.comp_id,"final_price":result.final_price,"rate":result.rate,"analyse_id":result.analyse_id};
       
    //         this.contData={"company_name": this.uintToString(result.company_name.data),"cont_price":result.cont_price};
      
    //         // this.contData = result;
    //         this.pay = result.pay_flag; 
    //         this.payDate = this.getStrDate(result.pay_time); 
    //         this.contract_path = result.contract_path;
    //         // rating
    //         this.comment = result.custom_replay; 
    //         this.rating = result.rate;
    //         let star = 'assets/imgs/star.png';
    //         let stared = 'assets/imgs/stared.png';
    //         for(var i=0; i<5; i++) {
    //           if( result.rate > 0 && i+1 <= result.rate ) {
    //             this.hasCom = 0;
    //             this.imgUrl[i] = stared;
    //           }
    //           else
    //             this.imgUrl[i] = star;
    //         }
    //       }
    //       else {
    //         this.comment = ''; 
    //         this.contData = [];
    //         this.contCompId = 0;
    //         this.hasCom = 1;
    //       }
    //     });
    //   }
    //   else {
    //     this.contCompId = 0;
    //   }
    // });
    // // get today
    // let curSelDate = this.getToday();
    // let year = curSelDate.getFullYear();
    // let month = curSelDate.getMonth() + 1;
    // let day = curSelDate.getDate();
    // this.installDay = this.correctDate(year, month, day);
  }

  back() {
    this.navCtrl.pop({animate:false});
  }
  viewContract2(){
    console.log("viewContract2 come");
    this.contractFinished = this.getNow();
    this.confirmmessage="구매확정완료"

    localStorage.setItem("confirm"+this.analyse_id,"yes");
    let sendData = [];
    sendData["analyse_id"] = this.analyse_id;
this.http.postHttpData("/updateInstallStatus", sendData, (result) => {
  console.log(result);
});

  }
// 평가주기
setComment() {
  console.log(this.rating);
  console.log(this.comment);
  if(this.rating==null||this.comment.length<6){

    console.log(this.rating);
    console.log(this.comment);
    let alert = this.alertCtrl.create({ 
        title: '후기(5자이상)와 평가를 남겨주세요',
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
    let sendData = [];
    sendData["comp_id"] = this.contCompId;
    sendData["user_id"] = this.user_id;
    sendData["analyse_id"] = this.analyse_id;
    sendData["comment"] = this.comment;
    sendData["rate"] = this.rating;
    console.log(sendData);
this.http.postHttpData("/setCustomerRating", sendData, (result) => {
  this.evalval="평가 완료"
  if(result) {
    this.hasCom = 0;
  }
  else {
    this.hasCom = 1;
  }
});

let sendData1 = [];
sendData1["analyse_id"] = this.analyse_id;
this.http.postHttpData("/updateInstallStatus", sendData, (result) => {
console.log(result);
});

  }
 
}
  viewContract() {
    console.log(this.contract_path);
    if( !this.contract_path ) {
      let str = '계약서파일이 존재하지 않습니다.';
      this.confirmAlert(str);
      return false;
    }
    
    if(this.contract_path.indexOf('pdf') > 0) {
      ///viewContract
      //http://solarmy.co.kr/solarmy_admin/uploads/15539567913.pdf
      let url = "http://solarmy.co.kr/solarmy_admin/uploads" +'/'+ this.contract_path;
      var options : InAppBrowserOptions = {
        location : 'yes',//Or 'no' 
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',//Android only ,shows browser zoom controls 
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only 
        closebuttoncaption : 'Close', //iOS only
        disallowoverscroll : 'no', //iOS only 
        toolbar : 'yes', //iOS only 
        enableViewportScale : 'no', //iOS only 
        allowInlineMediaPlayback : 'no',//iOS only 
        presentationstyle : 'pagesheet',//iOS only 
        fullscreen : 'yes',//Windows only    
    };
      // this.download();
      // const browser = this.inapp.create(this.url,"_system","location=yes,enableViewportScale=yes,hidden=no" );
      let browser = this.inapp.create(url, '_system', options)

        // let modal1 = this.modalCtrl.create(PdfViewerPage, {
        //   url: url
        // });
        // modal1.present();
    }
    else {  // png / jpg
      let url = "http://solarmy.co.kr/solarmy_admin/uploads" +'/'+ this.contract_path;
      var options : InAppBrowserOptions = {
        location : 'yes',//Or 'no' 
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',//Android only ,shows browser zoom controls 
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only 
        closebuttoncaption : 'Close', //iOS only
        disallowoverscroll : 'no', //iOS only 
        toolbar : 'yes', //iOS only 
        enableViewportScale : 'no', //iOS only 
        allowInlineMediaPlayback : 'no',//iOS only 
        presentationstyle : 'pagesheet',//iOS only 
        fullscreen : 'yes',//Windows only    
    };
      // this.download();
      // const browser = this.inapp.create(this.url,"_system","location=yes,enableViewportScale=yes,hidden=no" );
      let browser = this.inapp.create(url, '_system', options)

    }
  }

  detailCompany(comp_id, analyse_id) {
    this.navCtrl.push(CompanyDetailPage, { contractinfo:this.contractinfo, comp_id: comp_id, analyse_id: analyse_id },{animate:false} );
  }

  companyClient() {
    
    let modal = this.modalCtrl.create(ProcessStatmodalPage);
    modal.present({animate:false});
    modal.onDidDismiss(res => {
      if( res.client == 1 ) {   // if ok button clicked
        // 견적요청상태 tbl_analyse 의 quote_status을 1(완료)로
        
        let modal = this.modalCtrl.create(LoadingPage, {txt: "의뢰중입니다..."});
        modal.present({animate:false});
        let sendData = [];
            sendData["field"] = 'cont_comp_id';
            sendData["value"] = this.contCompTmpId;
            sendData["analyse_id"] = this.analyse_id;
        this.http.postHttpData("/updateAnalyseData", sendData, (result) => {
          modal.dismiss({}, "", {animate:false});
          if(result) {
            console.log(result);
            this.contCompId = this.contCompTmpId; // radio에서 선택된 comp_id
            // 계약된 회사정보(계약&평가 정보얻기)
            let sendData2 = [];
                sendData2["comp_id"] = this.contCompId;
                sendData2["analyse_id"] = this.analyse_id;
            this.http.postHttpData("/getCompanyDataByCompId", sendData2, (result) => {
              if(result) {
                console.log(result);
                this.contData = {"company_name": this.uintToString(result.company_name.data),"comp_id":result.comp_id,"final_price":result.final_price,"rate":result.rate,"analyse_id":result.analyse_id};
              
                this.processStatus();
                console.log(this.contData);
              }
              else {
                this.contCompId = 0;
              }
            });
            
          }
          else {
            this.contCompId = 0;
          }
        });
      }
    });
  }
  

  radioClicked( comp_id , index ) {
    console.log("radioclicked")
    console.log(index);
    this.selectedIndex=index;
    
    console.log(comp_id);
    console.log(this.contCompId);
    console.log(this.radio);
    if( this.contCompId == 0 ) {
      this.contCompTmpId = comp_id;
      this.radio = true;
    }
  }
  returnData(date) {
    let date1 = this.common.getStrDate(date)
    if( date1 ) {
      return date1.replace(/-/g, ".").substring(0,10);
    }else {
      return '';
    }
  }
  processStatus() {
    this.tab = "tab2";
      console.log("processStatus come")
      console.log(this.analyse_id)
      console.log("processStatus come")
    let sendData1 = [];
        sendData1["analyse_id"] = this.analyse_id;
    this.http.postHttpData("/getAnalyseById", sendData1, (result) => {
      if(result) {  // 계약된 회사가 있으면
        console.log(result);
        this.contCompId = result.cont_comp_id;
        if( result.contract_time!="0000-00-00 00:00:00" ) {
          this.contCompDate = this.getStrDate(result.contract_time);
          this.contractFlag = true;   // 계약된것으로 절환
        }
        // 계약된 회사정보(계약&평가 정보얻기)
        let sendData2 = [];
            sendData2["comp_id"] = this.contCompId;
            sendData2["analyse_id"] = this.analyse_id;

            let sendData1 = [];
            sendData1["analyse_id"] = this.analyse_id;
            console.log(sendData2);
        this.http.postHttpData("/getCompanyDataByCompId", sendData2, (result) => {
          if(result) {
            console.log("kkkkkkkkkkkkkkk");
            console.log(result);
            let sendData1 = [];
            sendData1["analyse_id"] = this.analyse_id;
            sendData1["cont_id"] = result.cid;
            this.http.postHttpData("/getCompanyData", sendData1, (result) => {
              if(result) {
                console.log(result);
                // if((HTMLElement document.getElementById('gender_Male').checked) {
                //   //Male radio button is checked
                // }else if(document.getElementById('gender_Female').checked) {
                //   //Female radio button is checked
                // }

                
                for(var i=0; i<result.length; i++){
                  console.log(this.contractcomp_id+"////"+result[i].comp_id);
                  if(result[i].comp_id==this.contractcomp_id){
                    this.cname=this.uintToString(result[i].company_name.data);
                    this.contract_path=this.uintToString(result[i].contract_path.data)
                    console.log(this.contract_path);
                    
                  }
                  console.log(this.contData);
                  console.log(this.contData["comp_id"]);

                  if(result[i].comp_id==this.contData["comp_id"]){
                   
                  }
                  
                }




                this.http.postHttpData("/getQuotStatus", sendData1, (result) => {
                  if(result) {
  
                      console.log(result);
  
  
  
                      if(result.add_price_content!=null){
                          var contract_time="";
                          if(result.contract_time!=null&&result.contract_time!="0000-00-00 00:00:00"){
                            contract_time=result.contract_time;
                          }else{
                            contract_time="";
                          }
                          var ins_exp_time="";
                          if(result.ins_exp_time!=null&&result.ins_exp_time!="0000-00-00 00:00:00"){ 
                              ins_exp_time=result.ins_exp_time;
                         
            
                          }else{
                            ins_exp_time="";
                          }
                           var ins_comp_time="";
                          if(result.ins_comp_time!=null&&result.ins_comp_time!="0000-00-00 00:00:00"){ 
                            ins_comp_time=result.ins_comp_time
                         
            
                          }else{
                            ins_comp_time="";
                          }
                             var ins_hope_time="";
                          if(result.ins_hope_time!=null){ 
                            ins_hope_time=result.ins_hope_time
                         
            
                          }else{
                            ins_hope_time="";
                          }
                          
                          console.log(result);
                          console.log(this.cname)
  
                          this.contData={"add_price":result.add_price,"final_price":result.final_price,"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time,"add_price_content":this.uintToString(result.add_price_content.data),"add_price_flag":result.add_price_flag,"comp_id":result.comp_id,"company_name": this.cname,"cont_price":result.cont_price};
                          this.newarray={"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time};
                       
                          console.log("tttttttttthis is new array");
                          console.log(this.contData);
                          console.log(this.newarray); 
                        }else{
                          var contract_time="";
                          if(result.contract_time!=null&&result.contract_time!="0000-00-00 00:00:00"){
                            contract_time=result.contract_time
                          }else{
                            contract_time="";
                          }
                          var ins_exp_time="";
                          if(result.ins_exp_time!=null&&result.ins_exp_time!="0000-00-00 00:00:00"){ 
                              ins_exp_time=result.ins_exp_time
                         
            
                          }else{
                            ins_exp_time="";
                          }
                           var ins_comp_time="";
                          if(result.ins_comp_time!=null&&result.ins_comp_time!="0000-00-00 00:00:00"){ 
                            ins_comp_time=result.ins_comp_time
                         
            
                          }else{
                            ins_comp_time="";
                          }
                             var ins_hope_time="";
                          if(result.ins_hope_time!=null){ 
                            ins_hope_time=result.ins_hope_time
                         
            
                          }else{
                            ins_hope_time="";
                          }
                          this.contData={"add_price":result.add_price,"final_price":result.final_price,"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time,"add_price_flag":result.add_price_flag,"comp_id":result.comp_id,"company_name": this.cname,"cont_price":result.cont_price};
                          this.newarray={"contract_time":contract_time,"ins_exp_time":ins_exp_time,"ins_comp_time":ins_comp_time,"ins_hope_time":ins_hope_time};
                          console.log(result);
                          console.log("this is new array");
                          console.log(this.contData);
                          console.log(this.newarray); 
                        }
  
                  }
              });




                
              }
            });
            
            
            // if(result.status==4){
            //   this.confirmmessage="구매확정완료"
            // }
            // this.comData={"inv_guarent":this.uintToString(result.inv_guarent.data),"module_guarent":this.uintToString(result.module_guarent.data),"quality":this.uintToString(result.quality.data),"inv_name":this.uintToString(result.inv_name),"module_name":this.uintToString(result.module_name),"address":this.uintToString(result.address.data),"company_name": this.uintToString(result.company_name.data),"comp_id":result.comp_id,"final_price":result.final_price,"rate":result.rate,"analyse_id":result.analyse_id};
       
            
            console.log(this.contData);
            // this.contData = result;
            this.pay = result.pay_flag; 
            this.payDate = this.getStrDate(result.pay_time); 
            this.contract_path = result.contract_path;
            if(result.custom_replay!=null){
              this.comment = this.uintToString(result.custom_replay.data) ; 
            }
          
            this.rating = result.rate;
            let star = 'assets/imgs/star.png';
            let stared = 'assets/imgs/star2.png';
            for(var i=0; i<5; i++) {
              if( result.rate > 0 && i+1 <= result.rate ) {
                this.hasCom = 0;
                this.imgUrl[i] = stared;
              }
              else
                this.imgUrl[i] = star;
            }

            
          }
          else {
            this.comment = ''; 
            this.contData = [];
            this.contCompId = 0;
            this.hasCom = 1;
          }
        });
      }
      else {
        this.contCompId = 0;
      }
    });
    // get today
    let curSelDate = this.getToday();
    let year = curSelDate.getFullYear();
    let month = curSelDate.getMonth() + 1;
    let day = curSelDate.getDate();
    this.installDay = this.correctDate(year, month, day);

  }

  convRate(rate) {
    if(rate) {
      if(rate > 4)
        return rate.toFixed(1);
      else {
        return '4.0';
      }
    }else {
      return '4.0';
    }
  }

  isCliented() {  //의뢰가 완료되었습니다(or 의뢰된 회사있음))
    if(this.contCompId > 0)
      return true;
    else
      return false;
  }
  isRadio() {   //업체가 선택됨
    if(this.radio == true)
      return true;
    else
      return false;
  }
  hasCompany() {  // 참여업체가 있으면
    if( this.comData )
      return true;
    else
      return false;
  }
  isSeledComp(comp_id) {  // 참여업체가 이미 계약되어있으면
   
    if(this.contCompId > 0 && this.contCompId == comp_id){
      
    this.contractcomp_id=comp_id;
        return true;
    }else
        return false;
  }
  hasSeledComp() {  // 참여업체가 있으면
    if(this.contCompId > 0)
        return true;
    else
        return false;
  }
  hasComment() {
    if( this.comment && this.rating > 0 && this.hasCom == 0 ) { // 후기있음
      return true;
    }else 
      return false;
  }
  setRating(id) {
    this.rating = id+1;
    let star = 'assets/imgs/star.png';
    let stared = 'assets/imgs/star2.png';
    for(var i=0; i<5; i++) {
      if( i <= id ) {
        this.imgUrl[i] = stared;
      }
      else
        this.imgUrl[i] = star;
    }
  }
  ///////////// contract 계약&평가 /////////////
  
  agreeContract() { // 약관에 동의 
    if(this.termFlag == true)
      this.termFlag = false;
    else
      this.termFlag = true;
  }
  isTerm() {
    if(this.termFlag == true)
        return true;
    else
        return false;
  }
  
  setContract() { // 계약하기
    this.contCompDate = this.getNow();
    this.comData=[];
    // 계약된 회사정보(계약&평가 정보얻기)
    let sendData = [];
        sendData["analyse_id"] = this.analyse_id;
        sendData["comp_id"] = this.contCompId;
        sendData["installDay"] = this.installDay;   // 설치날자
        // sendData["contCompDate"] = this.contCompDate;   // 계약날자
    this.http.postHttpData("/updateContData", sendData, (result) => {
      console.log(result);
      // window.alert("계약완료");
      if(result) {
        this.contractFlag = true;   // 계약된것으로 절환



        let sendData = [];
        sendData["analyse_id"] = this.analyse_id;
    this.http.postHttpData("/getCompanyData", sendData, (result) => {
      console.log("result show");
      console.log(result);
      if(result) {
        for(var i=0; i<result.length; i++){
          console.log(i);
          if(result[i].company_name!=null){
            console.log(result[i]);
            console.log(result[i].company_name.data);
            //설치예정일 5 -5
            //설치완료일 5- 10
            //설치희망일 4-24
            //고객 계약 동의일 5-9

            this.newarray.ins_hope_time=result[i].ins_hope_time;

            //파트너 계약 동의일 5 - 11
          console.log(this.newarray);
             this.comData.push({"add_price":result[i].add_price,"company_name": this.uintToString(result[i].company_name.data),"comp_id":result[i].comp_id,"final_price":result[i].final_price,"rate":result[i].rate,"analyse_id":result[i].analyse_id});
         
             console.log(this.comData);
          }
        }
        console.log(result[0].comp_id);
        this.radioClicked(result[0].comp_id,0);
        console.log("come data");
        console.log(this.comData);
      
      
      }
      else {
        this.comData  = null;
        this.contCompId = 0;
      }
    });


      }
      else {
        this.contCompId = 0;
      }
    });
  }
  isContract() {
    if(this.contractFlag == true)
        return true;
    else
        return false;
  }

  isPay() {
    if(this.pay == 1)
        return true;
    else
        return false;
  }

  viewImg(img_url) {
    let title = "";
    let options = {
        share: false, // default is false
        closeButton: true, // default is true
        copyToReference: false // default is false
    };
    
    this.photoViewer.show(img_url, title, options);
  }

  ecros() {
    this.appbrowser.create(this.escro_url, this.target, this.inAppoptions_Android);
  }

  // common functions
  calendar() {        
    let modal = this.modalCtrl.create(CalendarmodalPage, { reserve_date : '' });
    modal.present({animate:false});
    modal.onDidDismiss(data => {
        if(data.date != "") {
            this.installDay = data.date;
        }
    });
  }
  
  correctDate(year, month, day) {
    let t_month = parseInt(month) < 10 ? '0'+month : month;
    let t_day = parseInt(day) < 10 ? '0'+day : day;
    return year+'.'+t_month+'.'+t_day;
  }
  getToday() {
      let now_date = new Date();
      let year = now_date.getFullYear();
      let month = now_date.getMonth() + 1;
      let day = now_date.getDate();
      let today = new Date(this.correctDate(year, month, day));
      return today;
  }
  getStrDate(str_date) {
    let now_date = null;
    if(!str_date) {
      now_date = new Date();
    }else {
      now_date = new Date(str_date);
    }
    let year = now_date.getFullYear();
    let month = now_date.getMonth() + 1;
    let day = now_date.getDate();
    let hour = now_date.getHours();
    let minute = now_date.getMinutes();
    let second = now_date.getSeconds();
    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;
    hour = hour < 10 ? '0'+hour : hour;
    minute = minute < 10 ? '0'+minute : minute;
    second = second < 10 ? '0'+second : second;
    return year+"-"+month+"-"+day+" "+hour+":"+minute;
  }
  formatNow (year, month, day, hour, min) {
    let t_month = parseInt(month) < 10 ? '0'+month : month;
    let t_day = parseInt(day) < 10 ? '0'+day : day;
    return year+'-'+t_month+'-'+t_day+' '+hour+':'+min;
  }
  getNow() {
      let now_date = new Date();
      let year = now_date.getFullYear();
      let month = now_date.getMonth() + 1;
      let day = now_date.getDate();
      let minutes = now_date.getMinutes();
      let hour = now_date.getHours();
      let today = this.formatNow(year, month, day, hour, minutes);
      return today;
  }
  numFormat( str ) {
    if(str)
      return this.common.number_format(str);
    else
      return '0';
  }
  confirmAlert(str) {
    let alert = this.alertCtrl.create({      
        subTitle: str,
        buttons: ['확인']
    });
    alert.present({animate:false});
  }
}
