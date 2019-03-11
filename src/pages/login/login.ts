import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  MyHttpService } from '../../app/utility/service/myhttp.service'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myName=""
  myPwd=""

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private myServe:MyHttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    var url="http://192.168.1.185:8080/user/login"

    this.myServe.sendPostRequest(url,(res)=>{

      console.log(res)
      if(res.code==200){
        // 返回上一页
        this.myServe.showToast("登陆成功!")
        this.navCtrl.pop()
      }else{
        //显示登陆失败的通知
        this.myServe.showToast("用户名和密码错误")
      }
    },{uname:this.myName,upwd:this.myPwd})

  }

}
