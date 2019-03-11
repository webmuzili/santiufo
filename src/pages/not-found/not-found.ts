import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-found',
  templateUrl: 'not-found.html',
})
export class NotFoundPage {

  isShow=true
  count=5
  myTimer=null

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotFoundPage');


  }

  ionViewWillEnter(){
    this.myTimer=setInterval(()=>{
      this.count--
      console.log(this.count)
      if(this.count==0){
        if(this.navCtrl.canGoBack()){
          this.navCtrl.pop()
        }else{
          this.isShow=false
        }
      }
    },1000)

  }

  ionViewWillLeave(){
    clearInterval(this.myTimer)
  }

}
