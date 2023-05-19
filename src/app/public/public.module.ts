import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule, LandingPageModule],
})
export class PublicModule {}
