import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { DetailPage } from '../detail/detail'
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  myResult={}
  constructor(private myHttp:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var url="http://192.168.1.185:8080/index"
    this.myHttp.get(url).subscribe((res)=>{
        this.myResult=res
        console.log(this.myResult)
    })

  }

  ionViewWillEnter(){


  }

  jump(myId){
    this.navCtrl.push(DetailPage,{id:myId})
  }
}
