import { Component,ViewChild } from '@angular/core';
import { NavController, Platform,AlertController, NavParams, Events,Slides } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';

import { OneSignal } from '@ionic-native/onesignal';
// common 
import { TextEncoder, TextDecoder } from 'text-encoding';
import { AppmgrProvider } from '../../providers/appmgr/appmgr';
import { HttpProvider } from '../../providers/http/http';
import { CommonProvider } from '../../providers/common/common';
// normal
import { LoginPage } from '../login/login';
import { RegisterTypePage } from '../register-type/register-type';
import { CustomCenterPage } from '../custom-center/custom-center';
import { ServiceIntroPage } from '../service-intro/service-intro';
import { SettingPage } from '../setting/setting';
import { SupportInfoPage } from '../support-info/support-info';
import { CompareQuotationPage } from '../compare-quotation/compare-quotation';
import { AnalyseClientPage } from '../analyse-client/analyse-client';
import { MyClientPage } from '../my-client/my-client';
// partners
import { MyquotStatusPage } from '../myquot-status/myquot-status';
import { MyinfoUpdatePage } from '../myinfo-update/myinfo-update';
import { ChargeGuidePage } from '../charge-guide/charge-guide';
import { QuotationPage } from '../quotation/quotation';
import { CurrentInstallPage } from '../current-install/current-install';

import { InAppBrowser ,InAppBrowserOptions} from '@ionic-native/in-app-browser';
import { AnalyseResultPage } from '../analyse-result/analyse-result';
import { NotiPage } from '../noti/noti';
import { EscroPage } from '../escro/escro';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slides') slides : Slides;
  @ViewChild('scroll') scroll: any;
  user_id = 0;
  flagopen:string="열기";
  regStatus:any;
  mem_type = 1;
  userInfo:any;
  arrayinstalltodisplay=[];
  partnerflag:any;
  array_quotaion=[];
  picturelist=[];
  login_flag = true;
  notilist:any;
  videolist=[];
  arrayInstall=[];
  arrayInstallDetail=[];
  email:any;
  footeropen:boolean=false;
  // 
  constructor(public iab:InAppBrowser,public navCtrl: NavController, public navParams: NavParams,
    private appmgr: AppmgrProvider,
    public sanitizer: DomSanitizer,
    public common: CommonProvider,
    public alertCtrl: AlertController,
    public http: HttpProvider,
    private oneSignal: OneSignal,
    private platform : Platform,  
    public event : Events
  ) {
    this.flagopen="열기"
    this.login_flag = navParams.get('login_status');
    this.event.unsubscribe("get_sqlite_data");
    this.event.subscribe("get_sqlite_data", (userInfo) => {
        this.mem_type = userInfo.mem_type;
        if(userInfo.login_flag == 1) {
          this.login_flag = true;
        }else {
          this.login_flag = false;
        }
    });

    setTimeout(()=>{

      setInterval(()=>{
      
          this.scroll.nativeElement.scrollTop +=1;
  
          if(this.scroll.nativeElement.scrollTop==this.scroll.nativeElement.scrollHeight-100){
            this.scroll.nativeElement.scrollTop=0;
          }
          // console.log(this.scroll.nativeElement.scrollHeight)
      },100)
      // this.scroll.nativeElement.scrollTop({ bottom: 50, top: 0, behavior: 'smooth' });
      
      
 
      // this.scroll._scrollContent.scrollTo({ bottom: 500,behavior: 'smooth' });

    },500)
  }

  quotation(){
    console.log(this.array_quotaion);
    this.navCtrl.push(QuotationPage,{"array":this.array_quotaion});

  }
   ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
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
opening(v){
  console.log(v);
  if(v==0){
      this.navCtrl.push(ServiceIntroPage, { redirect: this.login_flag,partnerflag:this.isPartners(),"array":this.videolist },{animate:false} );
  }
}
onv(value){
  console.log(value);
  const options: InAppBrowserOptions = {
    zoom: 'no',
    
  }

  // this.iab.create("https://escrow.nonghyup.com/?certMarkURLKey="+value,'_system',options)
  window.open("https://escrow.nonghyup.com/?certMarkURLKey="+value,'_system','height=700, width=650, status=yes, toolbar=no, menubar=no, location=no');
  // (<HTMLInputElement>document.getElementById("forming")).submit();
  // document.CERTMARK_FORM.certMarkURLKey.value = key;
  // document.CERTMARK_FORM.action='https://escrow.nonghyup.com/?certMarkURLKey=' + key; 
  // document.CERTMARK_FORM.target='self';
  // document.CERTMARK_FORM.submit();
}
escroclick(){
  this.navCtrl.push(EscroPage)
}
  ionViewDidLoad() {
    
    let userInfo = this.appmgr.getUserInfo();
    this.user_id = userInfo.user_id;
    this.mem_type = userInfo.mem_type;
    console.log("user info is : ");
    console.log(userInfo);
    this.user_id = Number(localStorage.getItem("id"));
    this.partnerflag = Number(localStorage.getItem("partnerflag"));
    this.email = localStorage.getItem("email")
    console.log(this.user_id)
   
    
    if(userInfo.login_flag == 1) {
      this.login_flag = true;
     
      if(this.platform.is('android') || this.platform.is('ios')) {
        this.OneSignalInstall(); 
    }
    }else {
      this.login_flag = false;
    }

    
    let message = [];

    let sendData12 = [];
    message["note"]=0;
    message["user_id"]=this.user_id
    // this.http.postHttpData("/sendPush", message, (result) => {
    //   console.log("sendmmmm")
    //   console.log(result);
    //   window.alert(result);
    //   if(result) {
    //   }
    // })
    this.http.postHttpData("/getNotice", sendData12, (result) => {
      console.log("getnoti");
      console.log(result);
      this.notilist=result;
      if(result) {
      }
    })
    let sendData2 = [];
    sendData2["user_id"] = this.user_id;
    this.http.postHttpData("/getUserInfoById", sendData2, (result) => {
      this.userInfo=result;
      if(result) {
        this.regStatus=result.reg_status;
        console.log(result);
      }
    });
    
    let sendData1 = [];
    this.http.postHttpData("/getBanner", sendData1, (result) => {
      if(result) {
        this.picturelist=[];
      console.log("getBanner result gogo"+this.picturelist);
      
      var count=0;
      console.log(result)
      console.log(this.picturelist);
      this.picturelist=[];
      console.log(this.picturelist);
      for(var i=0; i<result.length; i++){
        console.log(this.picturelist);
        console.log(result[i]);
        console.log(result[i].file_name.data);
        console.log(result[i].file_path.data);
        var filename=String.fromCharCode.apply(null, result[i].file_name.data)
        var filepath=String.fromCharCode.apply(null, result[i].file_path.data)
        var url=String.fromCharCode.apply(null, result[i].url.data)
        var flag=result[i].rank_flag;
        console.log(filename);
        console.log(filepath);
        console.log(url);
        console.log(result[i].banner_type);
        console.log("i is : "+i);
        if(result[i].banner_type==1){
          console.log("video input");
          this.videolist.push({"url":url,"rank_flag":flag});
        }
        if(i>4){

          console.log("i no input"+i);
        }else{
          console.log("starting input");
          if(result[i].banner_type==0){
            console.log(flag);
            if(flag==1){
              console.log("file path and name"+filename+"///"+filepath);
              this.picturelist.push({"file":"http://solarmy.co.kr/"+filepath+""+filename,"url":url,"flag":flag,"type":0})
              console.log("http://solarmy.co.kr/"+filepath+""+filename)
            }
           
          }
          else{
            //video
          }
          console.log("kkkk")
            console.log(this.picturelist);
        }
       
       
    

      };
      
      console.log(this.picturelist);
      }
    });
    this.http.postHttpData("/getQuotation", sendData1, (result) => {
      if(result) {
      console.log("result gogo");
      console.log(result);
      for(var i=0; i<result.length; i++){
        console.log(String.fromCharCode.apply(null, result[i].name.data));

        console.log(String.fromCharCode.apply(null, result[i].email.data));
        console.log(String.fromCharCode.apply(null, result[i].address.data));
        var name=this.uintToString( result[i].name.data);
        var address=this.uintToString(result[i].address.data);
        var newaddress=[];
        newaddress=address.split(" ");
        var newaddressstring="";
        console.log(newaddress);
        console.log(newaddress.length);
        // for(var i=0; i<newaddress.length; i++){
        //   if(i==newaddress.length-1){

        //   }else if(i==newaddress.length-1){

        //   }else{

        //     // newaddressstring=newaddressstring+""+newaddress[i]
        //   }
         
        // }
        if(newaddress[0]=="서울특별시"||newaddress[0]=="인천광역시"||newaddress[0]=="부산광역시"||newaddress[0]=="대구광역시"||newaddress[0]=="광주광역시"){
          newaddressstring=newaddress[0]+" "+newaddress[1];
        }else{
          newaddressstring=newaddress[0]+" "+newaddress[1]+" "+newaddress[2];
        }
        
        console.log("new addressstring is : "+newaddressstring)
        var status=result[i].status;
        console.log(status);
        console.log(name);
        console.log(address);
        console.log(result[i].reg_time.split("T")[0]);
        // this.array_quotaion.push({"name":name.substring(0,1)+"*"+name.substring(2,3),"address":address,"reg_date":result[i].reg_time.split("T")[0],"status":status})
        this.array_quotaion.push({"name":name.substring(0,1)+"*"+name.substring(2,3),"address":newaddressstring,"reg_date":result[i].reg_time.split("T")[0].replace(/-/gi,"."),"status":status})
       
      }
      console.log(this.array_quotaion);
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})
      // this.array_quotaion.push({"name":"abcde","address":"fffffffff","reg_date":"regdate","status":0})

      }
    });
    this.http.postHttpData("/getInquiry", sendData1, (result) => {
      if(result) {
      console.log("getInquiry gogo");
      console.log(result);
      for(var i=0; i<result.length; i++){
        var division = this.uintToString(result[i].division.data);
        var email = String.fromCharCode.apply(null, result[i].email.data);
        var name = this.uintToString(result[i].name.data);
        var phone = String.fromCharCode.apply(null, result[i].phone.data);
        console.log(division);
        console.log(email);
        console.log(name);
        console.log(phone);
      }
      // for(var i=0; i<result.length; i++){
      //   console.log(String.fromCharCode.apply(null, result[i].name.data));

      //   console.log(String.fromCharCode.apply(null, result[i].email.data));
      //   console.log(String.fromCharCode.apply(null, result[i].address.data));
      //   var name=this.uintToString( result[i].name.data);
      //   var address=this.uintToString(result[i].address.data);
      //   var status=result[i].status;
      //   console.log(status);
      //   console.log(name);
      //   console.log(address);
      //   console.log(result[i].reg_time.split("T")[0]);
      //   this.array_quotaion.push({"name":name.substring(0,1)+"*"+name.substring(2,3),"address":address,"reg_date":result[i].reg_time.split("T")[0],"status":status})
        
      // }
      console.log(this.array_quotaion);
      }else{
        console.log("error "+result);
      }
    });
    console.log("asking for banner")
    /**
     * banner_type 이 0인 경우 host + file_path + file_name 조합으로 이미지 불러오면 됩니다. ex) http://solarmy.co.kr/solarmy_admin/uploads/test1.png

영상은 url 주소 입니다.
banner_type 이 1인경우 url 을 쓰면 됩니다.

     */
    
    this.http.postHttpData("/getInstallation", sendData1, (result) => {
      if(result) {
        
      console.log("getInstallation result gogo");
      console.log(result);
      for(var i=0; i<result.length; i++){
        console.log(result[i]);
        var filename= String.fromCharCode.apply(null, result[i].v_file_name.data) 
        var filepath=String.fromCharCode.apply(null, result[i].v_file_path.data)  
        console.log(filename);
        console.log(filepath);
        var area=String.fromCharCode.apply(null, result[i].area.data)
        var amount=String.fromCharCode.apply(null, result[i].amount.data)
        var subject=String.fromCharCode.apply(null, result[i].subject.data) 
        var id=result[i].id
        var i_date=result[i].i_date
        
        console.log("http://solarmy.co.kr/"+filepath+""+filename)
        console.log(area);
        console.log(amount);
        console.log(subject);
        console.log("mmmmmmmmmmmmmm")
        console.log(this.uintToString(result[i].area.data));
        console.log(this.uintToString(result[i].amount.data));
        console.log(this.uintToString(result[i].subject.data));
    
    
        this.arrayInstall.push({"id":id,"i_date":i_date,"url":"http://solarmy.co.kr"+filepath+""+filename,"area":this.uintToString(result[i].area.data),"amount":this.uintToString(result[i].amount.data),"subject":this.uintToString(result[i].subject.data)})

        console.log("input done");
      };

      console.log("before sorting array")
console.log(this.arrayInstall);
      var tag="i_date";
        this.arrayInstall.sort(function(a, b) {
          console.log(a[tag]);
          // convert date object into number to resolve issue in typescript
          var dateA = new Date(a[tag]).getTime();
      var dateB = new Date(b[tag]).getTime();
      return dateB > dateA ? 1 : -1;  
        })


console.log(this.arrayInstall);

for(var i=0; i<this.arrayInstall.length; i++){
  if(i<2){
this.arrayinstalltodisplay.push(this.arrayInstall[i]);
  }
 
}

     
      console.log(this.arrayInstall)
      
      }
    });

    this.http.postHttpData("/getInstallDetail", sendData1, (result) => {
      if(result) {
      console.log("getInstallDetail result gogo");
      console.log(result);
      for(var i=0; i<result.length; i++){
        console.log(result[i]);
        var filename="";
        var filepath="";
        if(result[i].file_name!=null){
          console.log("gogo")
           filename= String.fromCharCode.apply(null,result[i].file_name.data);
        }
        if(result[i].file_path!=null){
          filepath= String.fromCharCode.apply(null,result[i].file_path.data);
        }
        console.log(filename);
        console.log(filepath);
        var code=String.fromCharCode.apply(null, result[i].code.data)
        var contents=String.fromCharCode.apply(null, result[i].content.data)

        var id= result[i].id
        var p_id=result[i].p_id
        var v_flag=result[i].v_flag
        var reg_time=result[i].reg_time
        // var subject=String.fromCharCode.apply(null, result[i].subject.data) 
        // this.array_pic.push("http://solarmy.co.kr/"+filepath+""+filename)
        // console.log("http://solarmy.co.kr/"+filepath+""+filename)
        // console.log(area);
        // console.log(amount);
        // console.log(subject);
        // console.log("mmmmmmmmmmmmmm")
        console.log(this.uintToString(result[i].code.data));
        console.log(this.uintToString(result[i].content.data));
    
        this.arrayInstallDetail.push({"id":id,"p_id":p_id,"v_flag":v_flag,"reg_time":reg_time,"filename":filename,"filepath":filepath,"code":this.uintToString(result[i].code.data),"content":this.uintToString(result[i].content.data)})
     
        console.log(this.arrayInstallDetail)
      };
      
      }else{
        console.log("getInstallDetail result gogo error "+result);
      }
    });
  }

  registerPage() {
    this.navCtrl.push(RegisterTypePage, {},{animate:false} );
  }
  
  login() {
    this.navCtrl.push(LoginPage, {},{animate:false} );
  }
  
  myclientt() {
    this.navCtrl.push(MyClientPage, {  },{animate:false} );
  }
  
  supportInfo() {
    this.navCtrl.push(SupportInfoPage, {  },{animate:false} );
  }
  installcheck(){
    console.log(this.arrayInstallDetail);
    this.navCtrl.push(CurrentInstallPage, { "array":this.arrayInstall,"array_detail":this.arrayInstallDetail },{animate:false} );
  }
  compQuotation() {
    this.navCtrl.push(CompareQuotationPage, {  },{animate:false} );
  }
  
  anal() {

    if(this.userInfo==null){

      this.navCtrl.push(LoginPage, {},{animate:false} );
      // let alert = this.alertCtrl.create({ 
      //   title: '로그인을 해주세요',
      //   // subTitle: '24시간 내에 (영업시간 기준) 분석 <br />요청하신 자료를 받아 보실 수 있습니다.',
      //   buttons: [
      //       {
      //         text: '취소',
      //         cssClass: 'cancel',
      //         handler: data => {
      //           // console.log("Cancel...", id);
      //         }
      //       },
      //       {
      //         text: '확인',
      //         cssClass: 'confirm',
      //         handler: data => {
      //         }
      //       }
      //   ]
      // });
      // alert.present({animate:false});
    }else{
      this.navCtrl.push(AnalyseClientPage, {  },{animate:false} );
    }
    
  }
  anal_result(){
    this.navCtrl.push(AnalyseResultPage, {  },{animate:false} );
  }
  
  customer_center() {
    this.navCtrl.push(CustomCenterPage, {redirect: this.login_flag,partnerflag:this.isPartners()},{animate:false} );
  }
  
  service_intro() {
    console.log(this.videolist);
    this.navCtrl.push(ServiceIntroPage, { redirect: this.login_flag,partnerflag:this.isPartners(),"array":this.videolist },{animate:false} );
  }
  
  setting() {
    this.navCtrl.push(SettingPage, { "flag":this.login_flag },{animate:false} );
  }
  gonoti(){
    this.navCtrl.push(NotiPage,{ "flag":this.login_flag,"notilist":this.notilist,"partnerflag":this.partnerflag },{animate:false} );
  }
  
  isLogin() {
    if(this.login_flag == true)
        return true;
    else
        return false;
  }
  isPartners() {
    if(this.mem_type == 1)
        return true;
    else
        return false;
  }
  // partners
  myQuotStatus() {
    this.navCtrl.push(MyquotStatusPage, {"regStatus":this.regStatus},{animate:false} );
  }
  
  chargeGuidePage() {
    this.navCtrl.push(ChargeGuidePage, {},{animate:false} );
  }

  myInfoUpdate() {
    this.navCtrl.push(MyinfoUpdatePage, {  },{animate:false} );
  }

  oopening(){
    console.log("goo")
    if(this.footeropen==true){
      this.flagopen="열기";
      this.footeropen=false;
    }else{
      this.flagopen="닫기";
      this.footeropen=true;
    }
    
  }
  OneSignalInstall()
  {
    this.oneSignal.startInit('0016198c-1b1d-4535-9335-b908bed3554a', '199290897115');
    var iosSettings = {
      "kOSSettingsKeyAutoPrompt" : true,
      "kOSSettingsKeyInAppLaunchURL" : true
    };
    this.oneSignal.iOSSettings(iosSettings);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((data) => {
    // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      
    });

    this.oneSignal.endInit();

    this.oneSignal.getIds().then(data => {
      let sendData = [];
          sendData['user_id'] = this.user_id;
          sendData["field"] = 'token';
          sendData["value"] = data.userId;
          this.http.postHttpData("/updateTokenId", sendData, (result) => {

            console.log("updatetoken id : ");
            console.log(result);
          });
    });
  }

  //----prev, next for banner img slides------//
  prev() {
    this.slides.slidePrev();
  }
  next() {
    this.slides.slideNext();
  }
  //------------------------------------------//
}
