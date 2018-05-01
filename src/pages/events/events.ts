import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  eventos$;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.eventos$ = db.collection('eventos').valueChanges();
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  goToNewEvent(){
    this.navCtrl.push('RegisterPage');
  }

  goToEventInfo(dato: Event){

    this.navCtrl.push('EventInfoPage', {dato: dato})

  }

}
