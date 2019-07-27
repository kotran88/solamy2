import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurrentInstallDetailPage } from '../current-install-detail/current-install-detail';

/**
 * Generated class for the CurrentInstallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-current-install',
  templateUrl: 'current-install.html',
})
export class CurrentInstallPage {
  installArray=[];
  array_detail=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ionViewDidLoad CurrentInstallPage');
    this.installArray=this.navParams.get("array");
    console.log(this.installArray);

    var tag="i_date";
    this.installArray.sort(function(a, b) {
      console.log(a[tag]);
      // convert date object into number to resolve issue in typescript
      var dateA = new Date(a[tag]).getTime();
  var dateB = new Date(b[tag]).getTime();
  return dateB > dateA ? 1 : -1;  
    })

    this.array_detail=this.navParams.get("array_detail");
  }
  back() {
    this.navCtrl.pop({animate:false});
  }
  gotodetail(a){
    console.log(a);
    console.log(this.array_detail)
    var abc= []

    for(var i=0; i<this.array_detail.length; i++){
      console.log(a.id+"////"+this.array_detail[i].p_id);
      if(a.id==this.array_detail[i].p_id){
        console.log("id matche d:"+a.id);
        console.log(this.array_detail[i]);
        abc=this.array_detail[i];
      }
    }
 
    this.navCtrl.push(CurrentInstallDetailPage,{"array":a,"array_detail":this.array_detail})
  }
  ionViewDidLoad() {
   
  }

}
