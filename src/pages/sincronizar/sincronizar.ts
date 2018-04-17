import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-sincronizar',
  templateUrl: 'sincronizar.html',
})
export class SincronizarPage {

  private internetAccess: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private network: Network,
    public loadingCtrl: LoadingController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SincronizarPage');
  }

  checkInternet() {

    // loading 

    let loading = this.loadingCtrl.create({
      content: 'Revisando conexión...'
    });

    loading.present();


    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      setTimeout(() => {
        if (this.network.type === 'wifi' || 'ethernet' || '2g' || '3g' || '4g' || 'cellular') {
          console.log('we got a wifi connection, woohoo!');
          this.internetAccess = true;
          loading.dismiss();
          this.sincronizarCheck();
        } else if (this.network.type === 'none' || 'unknown') {
          this.internetAccess = false
          loading.dismiss();
        } else {
          console.log('Error verificando red');
          this.internetAccess = false;
          loading.dismiss();
        }
      }, 4000);
    });
  }

  sincronizarCheck() {
    let alert = this.alertCtrl.create({
      title: 'Confirme sincronización',
      message: 'Una vez que los datos sean sincronizados no podran modificarse',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sincronizar',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  sincronizar(){
    
    // loading 
    let loading = this.loadingCtrl.create({
      content: 'Sincronizando datos...'
    });

    loading.present();


  }

}
