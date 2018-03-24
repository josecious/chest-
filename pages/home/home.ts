import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChestPage } from '../chest/chest';
import {BicepsPage} from '../biceps/biceps';
import {BackPage} from '../back/back';
import {TricepsPage} from '../triceps/triceps';
import {LegPage} from '../leg/leg';
import {DeltPage} from '../delt/delt';
import {AbsPage} from '../abs/abs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

     chestPage(){
       this.navCtrl.push(ChestPage);
     } 

     bicepsPage(){
      this.navCtrl.push(BicepsPage);
    } 

    backPage(){
      this.navCtrl.push(BackPage);
    }     

    tricepsPage(){
      this.navCtrl.push(TricepsPage);
    } 

    legPage(){
      this.navCtrl.push(LegPage);
    } 

    deltPage(){
      this.navCtrl.push(DeltPage);
    }    

    absPage(){
      this.navCtrl.push(AbsPage);
    }  

}
