import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomePage } from './components/home-page/home-page';
import { PricingPage } from './components/pricing-page/pricing-page';
import { GetPage } from './components/get-page/get-page';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    HomePage,
    PricingPage,
    GetPage,
    Header,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
