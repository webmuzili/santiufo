import {LoadingController,ToastController} from 'ionic-angular'
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()

export class MyHttpService{
    constructor(
        private toastCtrl:ToastController,
        private myhttp:HttpClient,
        private loadingCtrl:LoadingController,
     ){}

     sendRequest(url,callback){
        var myLoading=this.loadingCtrl.create({content:"正在加载数据..."})
        myLoading.present()

        this.myhttp.get(url,{withCredentials:true}).subscribe((res)=>{
            myLoading.dismiss();
            console.log(res)
            callback(res)
        })
     }

     sendPostRequest(url,callback,data){
        var myLoading=this.loadingCtrl.create({content:"正在处理..."})
        myLoading.present()

        this.myhttp.post(url,data,{withCredentials:true}).subscribe((res)=>{
            myLoading.dismiss();
            console.log(res)
            callback(res)
        })
     }

     showToast(msg){
        this.toastCtrl.create({message:msg,duration:1500}).present()
     }
}