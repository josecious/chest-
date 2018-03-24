import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChestPage } from './chest';

@NgModule({
  declarations: [
    ChestPage,
  ],
  imports: [
    IonicPageModule.forChild(ChestPage),
  ],
})
export class ChestPageModule {}
