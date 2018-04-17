import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { StorageService } from '../../shared/services/storage.service';
import { Pedidoventa } from '../../shared/services/lbsdk';
import { PedidoVentaService, PedidoVentaDetalleService } from '../../shared/services';

@Component({
  selector: 'page-sincronizar',
  templateUrl: 'sincronizar.html',
})
export class SincronizarPage {

  private internetAccess: boolean;

  private pedidos: Array<Pedidoventa>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,    
    public loadingCtrl: LoadingController,
    private storage: StorageService,
    private pedidoService: PedidoVentaService,
    private detalleService: PedidoVentaDetalleService
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SincronizarPage');
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

    this.storage.leerStorage();

    this.storage.pedidosEnMemoria.map(pedido => {

      this.pedidoService.postPedido(pedido).flatMap(pedido => {
        console.log("pedido guardado", pedido);
        let tempDetalle: any = this.storage.detallesEnMemoria.map(x => { x.idPedidoventa = pedido.idPedidoventa })
        return this.detalleService.postDetalles(tempDetalle)
      }).subscribe(detalles => {
        console.log("detalles guardados", detalles);
      })
    })


  }

}
