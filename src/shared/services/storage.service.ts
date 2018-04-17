import { Injectable } from '@angular/core';

import { Pedidoventa, Pedidoventadetalle } from './lbsdk/index'

import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {

    public pedidosEnMemoria: Array<Pedidoventa>;

    public detallesEnMemoria: Array<Pedidoventadetalle>;

    public datosTelefono;

    constructor(private storage: Storage) {

    }

    agregarPedido(pedido: Pedidoventa) {
        this.pedidosEnMemoria.push(pedido);
        this.guardarEnStorage();
    }

    agregarDetalles(detalles: Array<Pedidoventadetalle>){
        detalles.map(detalle => {
            this.detallesEnMemoria.push(detalle)
        })
        this.guardarEnStorage();        
    }

    modificarPedido(pedido: Pedidoventa) {
        //this.pedidosEnMemoria.filter()
    }

    guardarEnStorage() {
        this.storage.set('pedidos', JSON.stringify(this.pedidosEnMemoria));
        this.storage.set('detalles', JSON.stringify(this.detallesEnMemoria));
    }

    leerStorage() {
        this.storage.get('pedidos').then((val) => {
            console.log('lista pedidos', JSON.parse(val));
            this.pedidosEnMemoria = val;
        });

        this.storage.get('detalles').then((val) => {
            console.log('lista detalles', JSON.parse(val));
            this.detallesEnMemoria = val;
        });
    }


}
