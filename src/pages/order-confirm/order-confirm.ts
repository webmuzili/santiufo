import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import {  MyHttpService } from '../../app/utility/service/myhttp.service'
import { PayPage } from "../pay/pay"
/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {
  myList=""
  constructor(public navCtrl: NavController, public navParams: NavParams,private myServe:MyHttpService,private myModalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    var url="http://192.168.1.185:8080/cart/list"
    this.myServe.sendRequest(url,((res)=>{
      this.myList=res.data
    }))
  }

  alipay(){
    // 把支付页面当做模态窗来渲染
    var myModal=this.myModalCtrl.create(PayPage)
    myModal.present()
    //模态窗消失
    myModal.onDidDismiss((data)=>{
        if(data){
          //跳转到首页
          // this.navCtrl.push(IndexPage)
          this.navCtrl.parent.select(0)
        }
    })

  }
}
