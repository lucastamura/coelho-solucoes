import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomePageRouting } from './home-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [CommonModule, HomePageRouting, ComponentsModule],
  declarations: [HomeComponent],
  exports: [],
})
export class HomeModule {}
