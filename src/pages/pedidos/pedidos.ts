import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Modelos
import { Pedidoventa } from '../../shared/services/lbsdk/index'
import { PedidoVentaService } from '../../shared/services';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  public pedidosGuardados: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  ionViewDidEnter(){
    this.checkPedidos();
  }

  checkPedidos() {
    /*if (this.pedidosService.pedidosEnMemoria.length > 0){
      this.pedidosGuardados = true;
    } else {
      this.pedidosGuardados = false;
    }*/
  }

}
