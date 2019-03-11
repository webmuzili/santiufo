import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  MyHttpService } from '../../app/utility/service/myhttp.service'
import { LoginPage } from '../login/login'
/**
 * Generated class for the UserCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {

  userName=""
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private myServe:MyHttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');

  }
  //生命周期钩子函数，每进一次页面,重新加载一次
  ionViewWillEnter(){

    var url="http://192.168.1.185:8080/user/sessiondata"
    this.myServe.sendRequest(url,(res)=>{
        console.log(res)
        if(res.uid){
          this.userName=res.uname
        }else{
          this.navCtrl.push(LoginPage)
        }
    })

  }

  //退出登录业务逻辑
  loginOut(){

    var url="http://192.168.1.185:8080/user/logout"
    this.myServe.sendRequest(url,(res)=>{
        console.log(res)
        if(res.code==200){
          this.myServe.showToast("退出登录成功!")
          this.navCtrl.push(LoginPage)
        }else{
          this.myServe.showToast("退出登录失败!")
        }
    })

  }

}
