import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Pedidoventadetalle, PedidoventadetalleApi } from './lbsdk/index'

@Injectable()
export class PedidoVentaDetalleService {    

    constructor(private pedidoVentaDetalleService: PedidoventadetalleApi) {
    }    

    postDetalles(pedido: Array<Pedidoventadetalle>): Observable<Pedidoventadetalle[]>{
        return this.pedidoVentaDetalleService.createMany(pedido);
    }

}
