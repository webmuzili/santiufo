import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController} from 'ionic-angular';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private myViewCtrl:ViewController,private myLoadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  closeModel(){
    this.myViewCtrl.dismiss(false)
  }
  //显示3S钟的Loading,3s后关闭
  showLoading(){
    var myLoading=this.myLoadingCtrl.create({content:"正在支付中..."})

    myLoading.present()
    setTimeout(()=>{
      myLoading.dismiss()
      this.myViewCtrl.dismiss(false)
    },3000)
  }

}
