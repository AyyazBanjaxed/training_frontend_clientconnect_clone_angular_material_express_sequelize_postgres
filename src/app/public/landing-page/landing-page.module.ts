import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModule } from '../shared/modules/login/login.module';

@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  imports: [CommonModule, MatDialogModule],
})
export class LandingPageModule {}
