import { Component,Renderer2,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';

/**
 * Generated class for the QuotationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotation',
  templateUrl: 'quotation.html',
})
export class QuotationPage {

  element:any;
  @ViewChild("content") content: Content;
  array=[];
  constructor(private renderer: Renderer2,public navCtrl: NavController, public navParams: NavParams) {
   
    // this.content.ionScrollEnd.subscribe((data)=>{

    //   console.log(data);
    // });

  }

  logScrollStart(){
    console.log("start");
  }
  logScrollEnd(){
    console.log("end");
    // window.alert("come to end");
  }
  onScroll(data){
    console.log(data);
  }
  onPageScroll(d){
    console.log(d);
  }
  detectBottom(){
    console.log("detect come")
  }
  ngAfterViewInit() {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotationPage');
    this.array=this.navParams.get("array");

  //   this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fffffffff","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"111111","reg_date":"regdate"});
  //  this.array.push({"name":"abcde","address":"fff22222ffffff","reg_date":"regdate"});
    console.log(this.array);
    console.log(this.content);
   
 
   
    setTimeout(()=>{
    //   setInterval(()=>{
      
    //     this.c.nativeElement.scrollTop +=1;

    //     console.log(this.c.nativeElement.scrollTop);
    //     if(this.c.nativeElement.scrollTop==this.c.nativeElement.scrollHeight-100){
    //       this.c.nativeElement.scrollTop=0;
    //     }
    // },100)
   
  // window.alert(this.content.nativeElement.offsetHeight);
  // // this.c.addScrollEventListener((e) => {
  // //   console.log(e)
  // // })
  
  // this.c.nativeElement.scrollTop=100;
  // console.log(this.c);
  // console.log(this.c.scrollTop);
  
  // window.alert(this.c.ionScrollEnd);
  // console.log(this.c.onScroll);
    // this.c.onscroll.subscribe((data)=>{
    //   console.log(data);
    // });
    // // // window.alert(height);
    console.log(this.content);
    this.content.ionScrollEnd.subscribe((data)=>{
      //... do things
      let dimensions = this.content.getContentDimensions();

      console.log("Dimensions");
      console.log(dimensions);
      console.log("Scroll ");
      console.log(data);
      console.log("come to end!")
      console.log(dimensions.contentTop);
      console.log(data.scrollTop);
      if(data.scrollTop==210){
        console.log("Looks like I'm in the bottom of the scroll element!");
      }

    });

    },500)


    // this.content.onscroll.subscribe((data)=>{
    //   console.log(data);
    //   // this.keyboard.close();
    // });
    // if(this.scroll.nativeElement.scrollTop==this.scroll.nativeElement.scrollHeight-100){
    //   this.scroll.nativeElement.scrollTop=0;
    // }
  }

}
