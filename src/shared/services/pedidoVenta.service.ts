import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Pedidoventa, PedidoventaApi } from './lbsdk/index'

@Injectable()
export class PedidoVentaService {    

    constructor(private pedidoVentaService: PedidoventaApi) {
    }    

    postPedido(pedido: Pedidoventa): Observable<Pedidoventa>{
        return this.pedidoVentaService.create(pedido);
    }

}
