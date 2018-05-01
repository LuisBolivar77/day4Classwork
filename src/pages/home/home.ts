import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user= { email : '', password : ''};
  

  constructor(public navCtrl: NavController, public auth : AuthProvider,
    public alertCtrl : AlertController) {

  }

  goToRegisterPage(){

    this.navCtrl.push('RegisterPage');

  }

  singIn(){

    this.auth.registrarUsuario(this.user.email,this.user.password)
    .then((user) => {
      this.navCtrl.push('EventsPage');
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

}
