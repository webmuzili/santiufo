import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  MyHttpService } from '../../app/utility/service/myhttp.service'
import { LoginPage} from "../login/login"
import { OrderConfirmPage } from "../order-confirm/order-confirm"

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  myList=[]
  isAllSelected = false
  constructor(public navCtrl: NavController, public navParams: NavParams,private myServe: MyHttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  //  每进一次页面进行的声明周期钩子函数
  ionViewWillEnter(){
    var url="http://192.168.1.185:8080/cart/list"
    this.myServe.sendRequest(url,(res)=>{
      if(res.code==300){
        this.navCtrl.push(LoginPage)
      }else{
        this.myList=res.data
        this.isAllSelected = false
      }

     })
    }
  // 处理一个商品被选中与总的关系
   handeSeletorOne(){
      var result=true
      for(var i=0;i<this.myList.length;i++){
        result=result && this.myList[i].isSelected
      }
      this.isAllSelected=result
    }
    //处理总计与个别的关系
   handleSelectAll(){
      for(var i=0;i<this.myList.length;i++){
        this.myList[i].isSelected=this.isAllSelected
      }
    }

    //计算总价
    call(){
        var result=0
        for(var i=0;i<this.myList.length;i++){
          if(this.myList[i].isSelected==true){
            result+=(this.myList[i].price*this.myList[i].count)
          }
        }
        return result
    }

    //跳转到支付页面
    jump(){
        this.navCtrl.push(OrderConfirmPage)
    }
  }
