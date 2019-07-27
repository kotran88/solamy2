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
  contractinfo:any;
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
    // this.contractinfo=navParams.get('contractinfo');
    let sendData2 = [];
            sendData2["comp_id"] = this.comp_id;
            sendData2["analyse_id"] = this.analyse_id;

            console.log(sendData2);
        this.http.postHttpData("/getCompanyDataByCompId", sendData2, (result) => {
          if(result) {
            console.log("kkkkkkkkkkkkkkk");
            console.log(result);
            this.contractinfo=result;
            console.log("contractinfo is : "+this.contractinfo);
    console.log(this.contractinfo);

    this.moduleName=this.uintToString(this.contractinfo.module_name.data);
    this.invName=this.uintToString(this.contractinfo.inv_name.data);
    this.qName=this.uintToString(this.contractinfo.quality.data);
    this.modName=this.uintToString(this.contractinfo.module_guarent.data);

    this.modulePhoto="http://solarmy.co.kr"+this.uintToString(this.contractinfo.module_file.data);
    this.invPhoto="http://solarmy.co.kr"+this.uintToString(this.contractinfo.inv_file.data);
    this.qPhoto="http://solarmy.co.kr"+this.uintToString(this.contractinfo.quality_file.data);
    
    this.modPhoto=this.uintToString(this.contractinfo.module_guarent_file.data);
    if(this.modPhoto.indexOf("http://")>-1){
      
    }else{
      this.modPhoto="http://solarmy.co.kr"+this.uintToString(this.contractinfo.module_guarent_file.data);
    }
    console.log(this.moduleName);
    console.log(this.invName);
    console.log(this.qName);
    console.log(this.modName);

    console.log(this.modulePhoto);
    console.log(this.invPhoto);
    console.log(this.qPhoto);
    console.log(this.modPhoto);
          }
        });

    


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
    /**
     * 
     *  <h4 style="margin:16px 0">{{moduleName}}</h4>
        <img src="{{modulePhoto}}" />
        <h4 style="margin:16px 0">{{invName}}</h4> 
        <img src="{{invPhoto}}"/>
        <h4 style="margin:16px 0">{{qName}}</h4> 
        <img src="{{qPhoto}}"/>
        <h4 style="margin:16px 0">{{modName}}</h4> 
        <img src="{{modPhoto}}"/>
        <h4 style="margin:16px 0">{{invGName}}</h4> 
        <img src="{{invGPhoto}}"/>
        <h4 style="margin:16px 0">{{etcName}}</h4>
        <img src="{{etcPhoto}}"/>
     */
    console.log("id is : "+this.comp_id);
    // this.moduleName=localStorage.getItem("moduleName"+this.analyse_id+this.comp_id);
    // this.invName=localStorage.getItem("invName"+this.analyse_id+this.comp_id);
    // this.qName=localStorage.getItem("qName"+this.analyse_id+this.comp_id);
    // this.modName=localStorage.getItem("modName"+this.analyse_id+this.comp_id);
    // this.invGName=localStorage.getItem("invGName"+this.analyse_id+this.comp_id);
    // this.etcName=localStorage.getItem("etcName"+this.analyse_id+this.comp_id);

    // this.modulePhoto=localStorage.getItem("modulePhoto"+this.analyse_id+this.comp_id);
    // this.invPhoto=localStorage.getItem("invPhoto"+this.analyse_id+this.comp_id);
    // this.qPhoto=localStorage.getItem("qPhoto"+this.analyse_id+this.comp_id);
    // this.modPhoto=localStorage.getItem("modPhoto"+this.analyse_id+this.comp_id);
    // this.invGPhoto=localStorage.getItem("invGPhoto"+this.analyse_id+this.comp_id);
    // this.etcPhoto=localStorage.getItem("etcPhoto"+this.analyse_id+this.comp_id);

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







/**
 * 
 * 
 * this.http.postHttpData("/getComsinfodata", sendData1, (result2) => {
          if(result2) {

            var result=result2[0];
            console.log("result is : ")
            console.log(result);
          if(this.moduleName==null){
            var modulename=this.uintToString(result.module_name.data);
            var m1filename=this.uintToString(result.m1_file_name.data)
            var m1filepath=this.uintToString(result.m1_file_path.data)
            var first="http://solarmy.co.kr/"+m1filepath+m1filename;
            localStorage.setItem("moduleName"+this.analyse_id+this.comp_id,modulename);
            localStorage.setItem("modulePhoto"+this.analyse_id+this.comp_id,first);
            this.moduleName=modulename;
            this.modulePhoto=first;
          }else{


           
          }
           
            var inv_name=this.uintToString(result.inv_name.data);
            var inv_guarent=this.uintToString(result.inv_guarent.data);
            var module_guarent=this.uintToString(result.module_guarent.data);
            var quality=this.uintToString(result.quality.data);
           
            
           
            var m2filename=this.uintToString(result.m2_file_name.data)
            var m2filepath=this.uintToString(result.m2_file_path.data)
            var m3filename=this.uintToString(result.m3_file_name.data)
            var m3filepath=this.uintToString(result.m3_file_path.data)
            var second="http://solarmy.co.kr/"+m2filepath+m2filename;
            console.log(inv_name);
            console.log(module_guarent);
            console.log(modulename);
            console.log(second);
            
            this.invName=inv_name;
            this.invPhoto=second;
            console.log(quality);
            console.log(first);
         
            var third="http://solarmy.co.kr/"+m3filepath+m3filename;
            this.qPhoto=third;
            this.qName=quality;
            var m4filename;
            var m4filepath;
            if(result.m4_file_name!=null){
               m4filename=this.uintToString(result.m4_file_name.data)
               m4filepath=this.uintToString(result.m4_file_path.data)
            }else{
              this.modName=module_guarent;
              this.modPhoto="http://solarmy.co.kr/"+m4filepath+m4filename;
            }
            var m5filename;
            var m5filepath;
            if(result.m5_file_name!=null){
               m5filename=this.uintToString(result.m5_file_name.data)
               m5filepath=this.uintToString(result.m5_file_path.data)
            }else{
              this.invGName=inv_guarent;
              this.invGPhoto="http://solarmy.co.kr/"+m5filepath+m5filename;
            }
           
           
          }
        });
 */












      // this.http.postHttpData("/getContractInfoData", sendData1, (result) => {
      //   if(result) {
      //     console.log("result issss");
      //     console.log(result);
      //     for (var i=0; i<result.length; i++){
      //       console.log(result[i]+"i index"+i);
      //       console.log(result[i])
      //     if(result[i].code==1){
  
      //     this.modulecount++;
      //     if(this.modulecount==1){
      //       console.log(result[i]);
      //       this.modulePhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
      //       console.log("filepath1"+this.uintToString(result[i].file_path.data));
      //       this.moduleName=this.uintToString(result[i].product_name.data);
      //       localStorage.setItem("moduleName"+this.comp_id,this.moduleName);
      //       localStorage.setItem("modulePhoto"+this.comp_id,this.modulePhoto);
      //       console.log("module photo");
      //       console.log(this.modulePhoto);
      //       console.log(this.moduleName);
      //       //http://solarmy.co.kr/solarmy_admin/uploads/20190327/155366537011.png
      //     }
      //     }
      //   if(result[i].code==2){
      //     this.invNamecount++;
      //     if(this.invNamecount==1){
           
      //       console.log("filepath2"+this.uintToString(result[i].file_path.data));
      //       this.invPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
      //       this.invName=this.uintToString(result[i].product_name.data);
      //       console.log("invName isl :"+this.invName);
      //       localStorage.setItem("invName"+this.comp_id,this.invName);
      //       localStorage.setItem("invPhoto"+this.comp_id,this.invPhoto);
      //     }
      //   }
      //   if(result[i].code==3){
      //     this.qualitycount++;
      //     if(this.qualitycount==1){
  
      //       console.log("filepath3"+this.uintToString(result[i].file_path.data));
      //       this.qPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
      //       this.qName=this.uintToString(result[i].product_name.data);
      //       localStorage.setItem("qName"+this.comp_id,this.qName);
      //       localStorage.setItem("qPhoto"+this.comp_id,this.qPhoto);
      //     }
      //   }
      //   if(result[i].code==4){
      //     this.modGcount++;
      //     if(this.modGcount==1){
      //       console.log("filepath4"+this.uintToString(result[i].file_path.data));
      //       this.modPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
      //       this.modName=this.uintToString(result[i].product_name.data);
      //       localStorage.setItem("modPhoto"+this.comp_id,this.modPhoto);
      //       localStorage.setItem("modName"+this.comp_id,this.modName);
      //     }
      //   }
      //   if(result[i].code==5){
      //     this.invGcount++;
      //     if(this.invGcount==1){
      //       console.log("filepath5"+this.uintToString(result[i].file_path.data));
      //       this.invGPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
      //       this.invGName=this.uintToString(result[i].product_name.data);
      //       localStorage.setItem("invGPhoto"+this.comp_id,this.invGPhoto);
      //       localStorage.setItem("invGName"+this.comp_id,this.invGName);
      //     }
      //   }
      //   if(result[i].code==6){
      //     this.etcCount++;
      //     if(this.etcCount==1){
      //       console.log("filepath6"+this.uintToString(result[i].file_path.data));
      //       this.etcPhoto="http://solarmy.co.kr"+this.uintToString(result[i].file_path.data)+""+this.uintToString(result[i].file_name.data)
      //       this.etcName=this.uintToString(result[i].product_name.data);
      //       console.log("etcphoto");
      //       console.log(this.etcPhoto)
      //       console.log(this.etcName);
      //       localStorage.setItem("etcPhoto"+this.comp_id,this.etcPhoto);
      //       localStorage.setItem("etcName"+this.comp_id,this.etcName);
      //     }
      //   }
      // }
      //     // this.contInfoData = {"id":result.id,"elec_licence":result.elec_licence,"inv_flag":result.inv_flag,"inv_gflag":result.inv_gflag,"module_flag":result.module_flag,"module_gflag":result.module_gflag,"quality_flag":result.quality_flag,"inv_guarent":this.uintToString(result.inv_guarent.data),"inv_name":this.uintToString(result.inv_name.data),
      //     // "module_guarent":this.uintToString(result.module_guarent.data),"module_name":this.uintToString(result.module_name.data),
      //     // "quality":this.uintToString(result.quality.data)};
  
      //     console.log(this.contInfoData);
      //   }
      // });
    
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
