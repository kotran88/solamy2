import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { LoadingPage } from '../loading/loading';

import { TextEncoder, TextDecoder } from 'text-encoding';
// common 
import { HttpProvider } from '../../providers/http/http';
import { CommonProvider } from '../../providers/common/common';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'page-company-detail',
  templateUrl: 'company-detail.html',
})
export class CompanyDetailPage {
  comp_id = 0;
  analyse_id = 0;
  resultarea=[];
  
  modulecount=0;
  invNamecount=0;
  qualitycount=0;
  modGcount=0;
  etcCount=0;

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

  elect_licence = '';   // 전기면허증
  comData : any;         // 고객의뢰 data
  contInfoData :any;    // 견적관리정보
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public common: CommonProvider,
    public http: HttpProvider,
    private photoViewer: PhotoViewer 
  ) {
    this.comp_id = navParams.get('comp_id');
    this.analyse_id = navParams.get('analyse_id');
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
    // 회사상세정보
    let modal = this.modalCtrl.create(LoadingPage, {txt: "로딩중입니다..."});
        modal.present({animate:false});
    let sendData = [];
        sendData["comp_id"] = this.comp_id;
        sendData["analyse_id"] = this.analyse_id;
        console.log(this.comp_id)
        console.log(this.analyse_id)
        let sendData2 = [];
        sendData2["analyse_id"] = this.analyse_id;
    this.http.postHttpData("/getCompanyData", sendData2, (result) => {
      modal.dismiss({}, "", {animate:false});
      console.log("result show");
      console.log(result);
      if(result) {
        for(var i=0; i<result.length; i++){
          console.log(i);
          if(result[i].comp_id==this.comp_id){
            console.log(result[i]);
            console.log(result[i].company_name.data);
            var area=this.uintToString(result[i].area.data);
                  this.resultarea= area.split("||");
            //설치예정일 5 -5
            //설치완료일 5- 10
            //설치희망일 4-24
            //고객 계약 동의일 5-9
            //파트너 계약 동의일 5 - 11
             this.comData={"as_guide":this.uintToString(result[i].as_guide.data),"complete_cnt":result[i].complete_cnt,"area": this.resultarea,"company_name": this.uintToString(result[i].company_name.data),"comp_id":result[i].comp_id,"final_price":result[i].final_price,"rate":result[i].rate,"analyse_id":result[i].analyse_id};
         
          }
        }
       
        console.log("come data");
        console.log(this.comData);
      
      
      }
     
    });

    // this.http.postHttpData("/getCompanyDetail", sendData, (result) => {
    //   modal.dismiss({}, "", {animate:false});

    //   console.log(result);

    //   if(result) {

    //     // for(var i=0; i<result.length; i++){
         
    //       this.elect_licence = result.elect_num;
    //       var area=this.uintToString(result.area.data);
    //       this.resultarea= area.split("||");
    //       if(result.area==null){
    //         this.comData={"complete_cnt":result.complete_cnt,"as_guide":this.uintToString(result.as_guide.data),
    //         "id":result.id,"elec_licence":result.elec_licence,"inv_flag":result.inv_flag,"inv_gflag":result.inv_gflag,"module_flag":result.module_flag,
    //         "module_gflag":result.module_gflag,"quality_flag":result.quality_flag,"inv_guarent":this.uintToString(result.inv_guarent.data),
    //         "module_guarent":this.uintToString(result.module_guarent.data),"quality":this.uintToString(result.quality.data),
    //         "inv_name":this.uintToString(result.inv_name.data),"module_name":this.uintToString(result.module_name.data),
    //         "address":this.uintToString(result.address.data),"company_name": this.uintToString(result.company_name.data),
    //         "comp_id":result.comp_id,"final_price":result.final_price,"rate":result.rate,"analyse_id":result.analyse_id};
    //       }else{
    //         this.comData={"complete_cnt":result.complete_cnt,"area":this.resultarea,"as_guide":this.uintToString(result.as_guide.data),
    //         "id":result.id,"elec_licence":result.elec_licence,"inv_flag":result.inv_flag,"inv_gflag":result.inv_gflag,"module_flag":result.module_flag,
    //         "module_gflag":result.module_gflag,"quality_flag":result.quality_flag,"inv_guarent":this.uintToString(result.inv_guarent.data),
    //         "module_guarent":this.uintToString(result.module_guarent.data),"quality":this.uintToString(result.quality.data),
    //         "inv_name":this.uintToString(result.inv_name.data),"module_name":this.uintToString(result.module_name.data),
    //         "address":this.uintToString(result.address.data),"company_name": this.uintToString(result.company_name.data),
    //         "comp_id":result.comp_id,"final_price":result.final_price,"rate":result.rate,"analyse_id":result.analyse_id};
    //       }
    //   }
    // });
    // 견적관리정보
    let sendData1 = [];
    this.http.postHttpData("/getContractInfoData", sendData1, (result) => {
      if(result) {
        console.log("result issss");
        console.log(result);
        for (var i=0; i<result.length; i++){
        if(result[i].code=="1"){

        this.modulecount++;
        if(this.modulecount==1){
          console.log(result[i]);
          this.modulePhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
       
          this.moduleName=this.uintToString(result[i].product_name.data);
          console.log(this.modulePhoto);
          //http://solarmy.co.kr/solarmy_admin/uploads/20190327/155366537011.png
        }
        }
      if(result[i].code==2){
        this.invNamecount++;
        if(this.invNamecount==1){
          this.invPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
          this.invName=this.uintToString(result[i].product_name.data);
        }
      }
      if(result[i].code==3){
        this.qualitycount++;
        if(this.qualitycount==1){
          this.qPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
          this.qName=this.uintToString(result[i].product_name.data);
        }
      }
      if(result[i].code==4){
        this.modGcount++;
        if(this.modGcount==1){
          this.modPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
          this.modName=this.uintToString(result[i].product_name.data);
        }
      }
      if(result[i].code==5){
        this.invGcount++;
        if(this.invGcount==1){
          this.invGPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
          this.invGName=this.uintToString(result[i].product_name.data);
        }
      }
      if(result[i].code=6){
        this.etcCount++;
        if(this.etcCount==1){
          this.etcPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
          this.etcName=this.uintToString(result[i].product_name.data);
        }
      }
    }
        // this.contInfoData = {"id":result.id,"elec_licence":result.elec_licence,"inv_flag":result.inv_flag,"inv_gflag":result.inv_gflag,"module_flag":result.module_flag,"module_gflag":result.module_gflag,"quality_flag":result.quality_flag,"inv_guarent":this.uintToString(result.inv_guarent.data),"inv_name":this.uintToString(result.inv_name.data),
        // "module_guarent":this.uintToString(result.module_guarent.data),"module_name":this.uintToString(result.module_name.data),
        // "quality":this.uintToString(result.quality.data)};

        console.log(this.contInfoData);
      }
    });
  }
  
  back() {
    this.navCtrl.pop({animate:false});
  }

  electLicence() {
    if( this.contInfoData ) {
      if( this.elect_licence && this.contInfoData.elec_licence == 1 ) return true;
      else return false;
    }else return false;
  }

  hasComData() {
    if(this.comData) 
      return true;
    else 
      return false
  }
  // common
  getContInfo(type, value) {
    if(!this.contInfoData) return '';
    let arrStr = '';
    if(type == 'module_name') {
      arrStr = this.contInfoData.module_name.split(",");
      return arrStr[value];
    }
    else if(type == 'inv_name') {
      arrStr = this.contInfoData.inv_name.split(",");
      return arrStr[value];
    }
    else if(type == 'quality') {
      arrStr = this.contInfoData.quality.split(",");
      return arrStr[value];
    }
    else if(type == 'module_guarent') {
      arrStr = this.contInfoData.module_guarent.split(",");
      return arrStr[value];
    }
    else if(type == 'inv_guarent') {
      arrStr = this.contInfoData.inv_guarent.split(",");
      return arrStr[value];
    }
    
  }
  hasContInfo(type) {
    if(!this.contInfoData) return false;
    if(type == 'module_name' && this.contInfoData.module_flag == 1) {
      return true;
    }
    else if(type == 'inv_name' && this.contInfoData.inv_flag == 1) {
      return true;
    }
    else if(type == 'quality' && this.contInfoData.quality_flag == 1) {
      return true;
    }
    else if(type == 'module_guarent' && this.contInfoData.module_gflag == 1) {
      return true;
    }
    else if(type == 'inv_guarent' && this.contInfoData.inv_gflag == 1) {
      return true;
    }
    return false;
  }
  
  viewImg(img_url) {
    let title = "";
    let options = {
        share: false, // default is false
        closeButton: true, // default is true
        copyToReference: false // default is false
    };
    img_url = CONFIG.IMG_URL + img_url;
    this.photoViewer.show(img_url, title, options);
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

  numFormat( str ) {
    if(str)
      return this.common.number_format(str);
    else
      return '0';
  }
}
