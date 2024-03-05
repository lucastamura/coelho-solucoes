import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CardHomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HomeComponent, CardHomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
