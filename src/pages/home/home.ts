import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MostrarImgPage } from '../mostrar-img/mostrar-img';
import { InAppBrowser } from '../../../node_modules/@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public inab:InAppBrowser) {

  }
  goMostrar(){
    this.navCtrl.push(MostrarImgPage);
  }
  goLink(){
    this.inab.create("https://www.ion-book.com/","_blank");
  }
}
