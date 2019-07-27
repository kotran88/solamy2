import { Component } from '@angular/core';
import { PopoverController,AlertController, NavController, NavParams } from 'ionic-angular';

import { MyquotStatusPage } from '../myquot-status/myquot-status';
import { WheelSelector } from '@ionic-native/wheel-selector';

// common 
import { AppmgrProvider } from '../../providers/appmgr/appmgr';
import { HttpProvider } from '../../providers/http/http';
import { CommonProvider } from '../../providers/common/common';

import { TextEncoder, TextDecoder } from 'text-encoding';
import { PopoverComponent } from '../../components/popover/popover';
@Component({
  selector: 'page-myquot-input',
  templateUrl: 'myquot-input.html',
})
export class MyquotInputPage {
  quotFlag = false;
  // 
  analyse_id = 0;
  user_id = 0;
  email = '';
  contInfoData =[];    // 견적관리정보
  // main data
  person = 1;
  insPrice = 0;
  solarpower:any;
  module_name = '';
  inv_name    = '';
  quality     = '';
  module_guarent = '';
  modulegphoto='';
  calidadphoto='';
  modulephoto='';
  inverterphoto='';
  inv_guarent = '';
  as_guide   = '';
  final_price = '';
  jsonData = {
  
    calidad:[

      {description:"",photo:""}
    ],
    inverter:[
      {description:"",photo:""}
    ],
    hospital: [
    ],
    moduleg:[

    ]
   }
  // select data
  modNameData :any;
  invNameData = [];
  qualityData = [];
  modGuaData = [];
  modulecount=0;
  invNamecount=0;
  qualitycount=0;
  modGcount=0;
  etcCount=0;
  modulenamearray=[];
  calidadnamearray=[];
  inverternamearray=[];
  modulegnamearray=[];

  modulephotoarray=[];
  calidadphotoarray=[];
  inverterphotoarray=[];
  modulegphotoarray=[];


  calidad=[];
  invGcount=0;
  invGuaData = [];
  modulePhoto:any;
  moduleName:any;
  invPhoto:any;
  invName:any;
  qPhoto:any;
  qName:any;
  modPhoto:any;
  modName:any;
  invGPhoto:any;
  invGName:any;
  etcPhoto:any;
  etcName:any;
  contractinfo:any;
  com_id:any;
  solar:any;
  constructor(public wheel:WheelSelector,public popoverCtrl: PopoverController,public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    private appmgr: AppmgrProvider,
    public common: CommonProvider,
    public http: HttpProvider
  ) {
    this.com_id=navParams.get("comapny_id");
    this.analyse_id = navParams.get('analyse_id');
    this.solar = navParams.get('solar');
    let userInfo = this.appmgr.getUserInfo();
    this.user_id = userInfo.user_id;
    this.email = userInfo.email;
    
    let sendData2 = [];
    //comp_id analyse_id
    sendData2["comp_id"] = this.com_id;
    sendData2["analyse_id"] = this.analyse_id;

    console.log(sendData2);

this.http.postHttpData("/getCompanyDataByCompId", sendData2, (result) => {
  console.log(result);
  if(result) {
    console.log("kkkkkkkkkkkkkkk");
    console.log(result);
    this.contractinfo=result;

  }
});
    // 견적관리정보
    let sendData1 = [];
    this.http.postHttpData("/getContractInfoData", sendData1, (result) => {
      if(result) {
        console.log(result);
        
        for (var i=0; i<result.length; i++){
          console.log(i+"i is : "+result[i]);
          console.log(result[i])
          console.log("name is : "+this.uintToString(result[i].product_name.data));
    this.contInfoData.push({"file_name":this.uintToString(result[i].file_name.data),
    "file_path":this.uintToString(result[i].file_path.data),
    "code":result[i].code,"id":result[i].id,"product_name":this.uintToString(result[i].product_name.data)
      });
      var filepath=this.uintToString(result[i].file_path.data);
      var filename=this.uintToString(result[i].file_name.data);
      if(result[i].code=="1"){

        //모듈
          console.log(result[i]);
         
          this.modulePhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
       
          var module_name=this.uintToString(result[i].product_name.data);
        
          console.log("module name is : "+module_name);
          if(module_name.length>0){
         
            this.modulephotoarray.push(filepath+filename);
            this.modulenamearray.push(module_name);
          }
          console.log(this.modulephotoarray);
         
          console.log("photo done");
          console.log(this.modulenamearray);
          //http://solarmy.co.kr/solarmy_admin/uploads/20190327/155366537011.png
          this.modNameData={"file_name":this.uintToString(result[i].file_name.data),"file_path":this.uintToString(result[i].file_path.data),"name":this.uintToString(result[i].product_name.data)}
        }
      if(result[i].code==2){
        var inv_name=this.uintToString(result[i].product_name.data);
          console.log("inverter name is : "+inv_name);
          if(inv_name.length>0){
            this.inverterphotoarray.push(filepath+filename);
            this.inverternamearray.push(inv_name);
          }

      }
      if(result[i].code==3){
        var calidad_name=this.uintToString(result[i].product_name.data);
          console.log("calidad_name name is : "+calidad_name);
          if(calidad_name.length>0){
            this.calidadphotoarray.push(filepath+filename);
            this.calidadnamearray.push(calidad_name);

          }
      }
      if(result[i].code==4){
        var moduleg=this.uintToString(result[i].product_name.data);
          console.log("moduleg name is : "+moduleg);
          if(moduleg.length>0){
         
            this.modulegphotoarray.push(filepath+filename);
            this.modulegnamearray.push(moduleg);
          }
      }
      // if(result[i].code==5){
      //   var inverterg=this.uintToString(result[i].product_name.data);
      //     console.log("moduleg name is : "+inverterg);
      //     if(inverterg.length>0){
         
      //       this.invertergnamearray.push(inverterg);
      //     }
      // }
      if(result[i].code==6){
          this.etcName=this.uintToString(result[i].product_name.data);
          this.etcPhoto="http://solarmy.co.kr"+filepath+filename;
      }
      console.log("etc is : ");
      console.log(this.etcPhoto);
      console.log(this.etcName);

      // if(result[i].code==6){
      //   this.invGuaData.push(this.uintToString(result[i].product_name.data))
      // }

        }

        console.log("module name array is : "+this.modulenamearray);
      
    
        for(var i=0; i<this.modulenamearray.length; i++){
          this.jsonData.hospital[i]={description:this.modulenamearray[i],photo:this.modulephotoarray[i]}
        }
        for(var i=0; i<this.inverternamearray.length; i++){
          this.jsonData.inverter[i]={description:this.inverternamearray[i],photo:this.inverterphotoarray[i]}
        }
        for(var i=0; i<this.calidadnamearray.length; i++){
          this.jsonData.calidad[i]={description:this.calidadnamearray[i],photo:this.calidadphotoarray[i]}
        }
        for(var i=0; i<this.modulegnamearray.length; i++){
          this.jsonData.moduleg[i]={description:this.modulegnamearray[i],photo:this.modulegphotoarray[i]}
        }

        console.log("json array printing");
      
        console.log(this.modulephotoarray);
        console.log(this.inverterphotoarray);
        console.log(this.calidadphotoarray)
        console.log(this.jsonData);
        console.log(this.jsonData.inverter[0]);
        console.log(this.jsonData.inverter[0].photo);
        // for(var i=0; i<this.invertergnamearray.length; i++){
        //   this.jsonData.inverterg[i]={description:this.invertergnamearray[i]}
        // }
        console.log(this.jsonData);
        console.log("contInfoData");
        console.log(this.modNameData);

        console.log("file path for module is : "+this.modulegphotoarray);
        // this.modNameData    = this.contInfoData.module_name
        // this.invNameData    = this.contInfoData.inv_name
        // this.qualityData    = this.contInfoData.quality.split(",");
        // this.modGuaData     = this.contInfoData.module_guarent.split(",");
        // this.invGuaData     = this.contInfoData.inv_guarent.split(",");
      }
      console.log("all done");
    });
  }
  public optionsFn(): void { //here item is an object 
    console.log(this.module_name);
  }
  // presentPopoverInverterg(){
  //   this.wheel.show({
  //     title: "기타사항을 선택해주세요",
  //     items: [
  //      this.jsonData.moduleg
  //     ],
  //     positiveButtonText: "선택",
  //     negativeButtonText: "취소",
  //     defaultItems: [
  //       {index:0, value: this.jsonData.moduleg[0].description},
  //     ]
  //   }).then(
  //     result => {
  //       console.log(result);
  //       this.module_guarent=result[0].description;
  //       this.modulegphoto=result[0].photo;
  //       console.log(result[0].description);
       
  //     },
  //     err => console.log('Error: ' + JSON.stringify(err))
  //     );
  // }
  presentPopoverInverter(){
    this.wheel.show({
      title: "인버터 제품명을 선택해주세요..",
      items: [
       this.jsonData.inverter
      ],
      positiveButtonText: "선택",
      negativeButtonText: "취소",
      defaultItems: [
        {index:0, value: this.jsonData.inverter[0].photo},
      ]
    }).then(
      result => {
        // console.log(result[0].name + ' (id= ' + this.jsonData.firstNames[result[0].index].id + '), ' +
        console.log(this.jsonData.inverter[result[0].index].photo);
        console.log(result);
        this.inv_name=result[0].description;
        console.log(result[0].description);
        console.log(result[0].photo);
        this.invPhoto=this.jsonData.inverter[result[0].index].photo;
       
      },
      err => console.log('Error: ' + JSON.stringify(err))
      );
  }
  presentPopoverCalidad(){
    this.wheel.show({
      title: "설치할 구조물 품질을 선택해주세요",
      items: [
       this.jsonData.calidad
      ],
      positiveButtonText: "선택",
      negativeButtonText: "취소",
      defaultItems: [
        {index:0, value: this.jsonData.calidad[0].description},
      ]
    }).then(
      result => {
        console.log(result);
        console.log(result[0].description);
        this.quality=result[0].description;
        this.calidadphoto=this.jsonData.calidad[result[0].index].photo;
        console.log("구조물 품질"+this.calidadphoto);
      },
      err => console.log('Error: ' + JSON.stringify(err))
      );
  }
  presentPopover() {
    this.wheel.show({
      title: "모듈 제품명을 선택해주세요",
      items: [
       this.jsonData.hospital
      ],
      positiveButtonText: "선택",
      negativeButtonText: "취소",
      defaultItems: [
        {index:0, value: this.jsonData.hospital[0].description},
      ]
    }).then(
      result => {
        console.log(result);
        console.log(result[0].description);
        this.module_name=result[0].description;
        this.modulephoto=this.jsonData.hospital[result[0].index].photo;
      },
      err => console.log('Error: ' + JSON.stringify(err))
      );
  }
  uintToString(uintArray) {
    var decoder = new TextDecoder("utf-8");
      var encodedString = String.fromCharCode.apply(null, uintArray);
        var  decodedString = decoder.decode(new Uint8Array(uintArray));
      return decodedString;
  }
  ionViewWillEnter() {
    let userInfo = this.appmgr.getUserInfo();
    this.user_id = userInfo.user_id;
    this.email = userInfo.email;
    
    // 견적관리정보
    // let sendData1 = [];
    // this.http.postHttpData("/getContractInfoData", sendData1, (result) => {
    //   if(result) {
    //     console.log(result);
    //     this.contInfoData = {"module_name":this.uintToString(result.module_name.data),"inv_name":this.uintToString(result.inv_name.data),
    //     "quality":this.uintToString(result.quality.data),"module_guarent":this.uintToString(result.module_guarent.data),
    //       "inv_guarent":this.uintToString(result.inv_guarent.data),"module_flag":result.module_flag,"inv_flag":result.inv_flag,"inv_gflag":result.inv_gflag,"module_gflag":result.module_gflag,"quality_flag":result.quality_flag
    //   };
        
    //     this.modNameData    = this.contInfoData.module_name.split(",");
    //     this.invNameData    = this.contInfoData.inv_name.split(",");
    //     this.qualityData    = this.contInfoData.quality.split(",");
    //     this.modGuaData     = this.contInfoData.module_guarent.split(",");
    //     this.invGuaData     = this.contInfoData.inv_guarent.split(",");
    //   }
    //   console.log()
    // });
  }

  back() {
    this.navCtrl.pop({animate:false});
  }

  quotSubmit() {
    if( !this.validation() ) return false;
    var newfinal="";
    if(this.final_price.indexOf("원")>-1){
      newfinal=this.final_price.split("원")[0];
    }else{
      newfinal=this.final_price;
    }
    let sendData= [];
        sendData["analyse_id"]  = this.analyse_id;
        sendData["comp_id"] 	  = this.user_id;
        sendData["person"] 		  = this.person;
        sendData["price"] 	  = 0;
        sendData["module_name"] = this.module_name;
        sendData["inv_name"] 	  = this.inv_name;
        sendData["quality"] 	  = this.quality;
        sendData["module_guarent"] = this.etcName;
        sendData["inv_guarent"] = this.inv_guarent;
        sendData["as_guide"] 	  = this.as_guide;
        sendData["final_price"] = newfinal;
        sendData["module_file"] = this.modulephoto;
        sendData["inv_file"] = this.invPhoto;
        sendData["quality_file"] = this.calidadphoto;
        sendData["module_guarent_file"] = this.etcPhoto;
        
        sendData["solarpower"]=this.solar
        console.log(sendData);
    this.http.postHttpData("/setSubmitContract", sendData, (result) => {
      if(result) {
        this.quotFlag = true;
      }
    });
  }

  validation() {
    let str = '';
    // if( this.insPrice == 0 ) {
    //   str = '설치 견적비용을 입력하세요.';
    //   this.confirmAlert(str);
    //   return false;
    // }
    if( this.as_guide == '' ) {
      str = '보증기간 및 A/S 안내를 입력하세요.';
      this.confirmAlert(str);
      return false;
    }
    else if( this.final_price == '' ) {
      str = '최종 소비자가격을 입력하세요.';
      this.confirmAlert(str);
      return false;
    }
    
    // else if( this.module_name == '' ) {
    //   str = '모듈 제품명을 입력하세요.';
    //   this.confirmAlert(str);
    //   return false;
    // }
    // else if( this.inv_name == '' ) {
    //   str = '인버터 제품명을 입력하세요.';
    //   this.confirmAlert(str);
    //   return false;
    // }
    // else if( this.quality == '' ) {
    //   str = '설치할 구조물 품질을 입력하세요.';
    //   this.confirmAlert(str);
    //   return false;
    // }
    // else if( this.module_guarent == '' ) {
    //   str = '모듈보증을 입력하세요.';
    //   this.confirmAlert(str);
    //   return false;
    // }
    // else if( this.inv_guarent == '' ) {
    //   str = '인버터 보증을 입력하세요.';
    //   this.confirmAlert(str);
    //   return false;
    // }
    return true;
  }

  quotList() {
    this.navCtrl.push(MyquotStatusPage, { tab: 'tab2' },{animate:false} );
  }
  // common

  hasContInfo(type) {
    if(!this.contInfoData) return false;
    
    return true;
    // if(type == 'module_name' && this.contInfoData.module_flag == 1) {
      
    //   return true;
    // }
    // else if(type == 'inv_name' && this.contInfoData.inv_flag == 1) {
    //   return true;
    // }
    // else if(type == 'quality' && this.contInfoData.quality_flag == 1) {
    //   return true;
    // }
    // else if(type == 'module_guarent' && this.contInfoData.module_gflag == 1) {
    //   return true;
    // }
    // else if(type == 'inv_guarent' && this.contInfoData.inv_gflag == 1) {
    //   return true;
    // }
    // return false;
  }

  operator(operate) {
    if(operate == 'inc') {
      this.person++;
    }
    else {
      if(this.person == 1) return;
      this.person--;
    }
  }

  isQuot() {
    if(this.quotFlag == true) {
      return true;
    }
    else {
      return false;
    }
  }
  isFirst( id ) {
    if(id==0) return true;
    else return false;
  }
  
  confirmAlert(str) {
    let alert = this.alertCtrl.create({      
        subTitle: str,
        buttons: ['확인']
    });
    alert.present({animate:false});
  }
  checkFocus(){
    console.log("onfocus")
    if(this.final_price.length>0){
      this.final_price="";
    }
  }
  change(event) {
    console.log(event);
    console.log(this.final_price+"");
    this.final_price=""+this.final_price+"원";
      // (<HTMLInputElement>document.getElementById("value1")).value = event+"won";
  }
}
