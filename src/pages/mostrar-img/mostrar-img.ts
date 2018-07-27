import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostrarImgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-img',
  templateUrl: 'mostrar-img.html',
})
export class MostrarImgPage {
  images=[{
    url:"./assets/slide1.jpg"
  },
  {
    url:"./assets/2.gif"
  }
]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarImgPage');
  }
  goBack(){
    this.navCtrl.popToRoot();
  }
}
