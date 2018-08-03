import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MostrarImgPage } from '../mostrar-img/mostrar-img';
import { InAppBrowser } from '../../../node_modules/@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  muteSound:boolean = true;
  constructor(public navCtrl: NavController,public inab:InAppBrowser) {

  }
  goMostrar(){
    this.navCtrl.push(MostrarImgPage);
  }
  /**
   * @api {get} /tasks List all tasks
   * @apiGroup Tasks
   * @apiSuccess {Object[]} tasks Task's list
   * @apiSuccess {Number} tasks.id Task id
   * @apiSuccess {String} tasks.title Task title
   * @apiSuccess {Boolean} tasks.done Task is done?
   * @apiSuccess {Date} tasks.updated_at Update's date
   * @apiSuccess {Date} tasks.created_at Register's date
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    [{
   *      "id": 1,
   *      "title": "Study",
   *      "done": false
   *      "updated_at": "2016-02-10T15:46:51.778Z",
   *      "created_at": "2016-02-10T15:46:51.778Z"
   *    }]
   * @apiErrorExample {json} List error
   *    HTTP/1.1 500 Internal Server Error
   */
  goLinkApidoc(){
    this.inab.create("https://juanmurciautn.000webhostapp.com/TestApiDoc/");
  }
  goLinkCompoDoc(){
    this.inab.create("https://juanmurciautn.000webhostapp.com/TestCompodoc/");
  }
  muteAudio(){
    this.muteSound = !this.muteSound;
  }
  doLogin(){

  }
  registrarse(){
    
  }
}
