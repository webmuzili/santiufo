import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { HttpClient } from '@angular/common/http'
import { CartPage } from '../cart/cart'
import { NotFoundPage } from '../not-found/not-found'
import { LoginPage } from '../login/login'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

    Cart=CartPage;
    notFound=NotFoundPage;
    login=LoginPage;
    
     details={}

    // lapList=[{pid: 4, laptop_id: 2, sm: "img/product/sm/57b12a31N8f4f75a3.jpg", md: "img/product/md/57b12a31N8f4f75a3.jpg", lg: "img/product/lg/57b12a31N8f4f75a3.jpg"},
    // {pid: 5, laptop_id: 2, sm: "img/product/sm/57ad359dNd4a6f130.jpg", md: "img/product/md/57ad359dNd4a6f130.jpg", lg: "img/product/lg/57ad359dNd4a6f130.jpg"},
    // {pid: 6, laptop_id: 2, sm: "img/product/sm/57ad8846N64ac3c79.jpg", md: "img/product/md/57ad8846N64ac3c79.jpg", lg: "img/product/lg/57ad8846N64ac3c79.jpg"}
    // ]
    // title="Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i7 处理器/8GB内存/256GB SSD闪存 Z0TA0002L)"
    // subtitle="5月焕新季，领券买新机！神券满6000减600！一体成型金属机身，纤薄轻巧，长达12小时续航"
    // price=7488
  constructor(public navCtrl: NavController, public navParams: NavParams,private myServe:MyHttpService,private loadingCtrl:LoadingController,private myHttp:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');

    var myId=this.navParams.get('id');
      
    var url="http://192.168.1.185:8080/product/detail?lid="+myId

    this.myServe.sendRequest(url,(res)=>{
        this.details=res
    })

  }

  addToCart(){
//显示一个loading
  var myLoading=this.loadingCtrl.create({
    content:"正在加载中..."
  })
  myLoading.present()

  var myId=this.navParams.get('id')
  var url="http://192.168.1.185:8080/cart/add?buyCount=1&lid="+myId
  this.myHttp.get(url,{withCredentials:true}).subscribe((res:any)=>{
    myLoading.dismiss()
    console.log(res)
    if(res.code==300){
          //跳转到登陆页面
          this.navCtrl.push(LoginPage)
        }else if(res.code==200){
          this.myServe.showToast("添加购物车成功!")
        }else{
          this.myServe.showToast("添加购物车失败!")
        }
    })

  }

}
