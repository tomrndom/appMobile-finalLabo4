import { Injectable } from '@angular/core';

import { Pedidoventa } from './lbsdk/index'

import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {

    public pedidosEnMemoria: Array<Pedidoventa>;

    constructor(private storage: Storage) {

    }

    agregarPedido(pedido: Pedidoventa) {
        this.pedidosEnMemoria.push(pedido);
        this.guardarEnStorage();
    }

    modificarPedido(pedido: Pedidoventa) {
        //this.pedidosEnMemoria.filter()
    }

    guardarEnStorage() {
        this.storage.set('pedidos', JSON.stringify(this.pedidosEnMemoria));
    }

    leerStorage() {
        this.storage.get('pedidos').then((val) => {
            console.log('lista pedidos', JSON.parse(val));
            this.pedidosEnMemoria = val;
        });
    }


}
  

}
