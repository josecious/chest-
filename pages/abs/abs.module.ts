import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsPage } from './abs';

@NgModule({
  declarations: [
    AbsPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsPage),
  ],
})
export class AbsPageModule {}
