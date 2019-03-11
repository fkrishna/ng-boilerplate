import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  
  declarations: [
  	HomeComponent
  ]
})
export class HomeModule { }
