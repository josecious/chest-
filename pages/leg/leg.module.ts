import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LegPage } from './leg';

@NgModule({
  declarations: [
    LegPage,
  ],
  imports: [
    IonicPageModule.forChild(LegPage),
  ],
})
export class LegPageModule {}
