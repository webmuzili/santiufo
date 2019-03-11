import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { MyHttpService } from './utility/service/myhttp.service'
import { MoneyPipe } from '../pipes/money/money'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IndexPage } from '../pages/index/index'
import { CartPage } from '../pages/cart/cart'
import { UserCenterPage } from '../pages/user-center/user-center'
import { NotFoundPage } from '../pages/not-found/not-found'
import { DetailPage } from '../pages/detail/detail'
import { LoginPage} from '../pages/login/login'
import { OrderConfirmPage }  from '../pages/order-confirm/order-confirm'
import { PayPage} from "../pages/pay/pay"

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IndexPage,
    CartPage,
    UserCenterPage,
    NotFoundPage,
    DetailPage,
    LoginPage,
    MoneyPipe,
    OrderConfirmPage,
    PayPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IndexPage,
    CartPage,
    UserCenterPage,
    NotFoundPage,
    DetailPage,
    LoginPage,
    OrderConfirmPage,
    PayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyHttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
