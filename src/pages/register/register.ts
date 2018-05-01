import { Event } from './../../app/event';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  eventName: any;
  eventLocation: any;
  activity: any;
  dateTime: any;
  email:string;
  id;

  events: Event = new Event();
  event: Event[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registrarEvento(){

    this.id = '_' + Math.random().toString(36).substr(2, 9);

    this.events.eventName = this.eventName;
    this.events.eventLocatio = this.eventLocation;
    this.events.activity = this.activity;
    this.events.dateTime = this.dateTime;

    this.db.collection('eventos').doc(this.id).set({ eventName: this.events.eventName, 
      eventLocatio: this.events.eventLocatio, activity: this.events.activity, DateTime: this.events.dateTime});
    this.event.push(this.events);
    this.events = new Event();

    this.navCtrl.push('EventsPage')

    //this.db.collection('eventos').add({ eventName: this.eventName, eventLocatio: this.eventLocation, activity: this.activity,
                                      //dateTime: this.dateTime});
    
  }

}
