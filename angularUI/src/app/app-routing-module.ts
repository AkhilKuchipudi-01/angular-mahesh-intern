import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { PricingPage } from './components/pricing-page/pricing-page';

const routes: Routes = [
  {
    path : '', pathMatch : 'full', redirectTo : 'pricing'
  },
  {
    path: 'home', component: HomePage
  },
  {
    path:'pricing', component: PricingPage
  },
  {
    path : '**', component : HomePage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
