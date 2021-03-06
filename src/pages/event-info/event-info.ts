import { Event } from './../../app/event';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-info',
  templateUrl: 'event-info.html',
})
export class EventInfoPage {

  eventObtenido: Event;

  eventName: string;
  eventLocation: string;
  activity: string;
  datTime: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.eventObtenido = this.navParams.get('dato');
    this.eventName = this.eventObtenido.eventName;
    console.log(this.eventObtenido);
    this.eventLocation = this.eventObtenido.eventLocatio;
    this.activity = this.eventObtenido.activity;
    this.datTime = this.eventObtenido.activity;
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventInfoPage');
  }

}
