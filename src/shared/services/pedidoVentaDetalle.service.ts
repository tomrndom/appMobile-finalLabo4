import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Pedidoventadetalle, PedidoventadetalleApi, Pedidoventa } from './lbsdk/index'

@Injectable()
export class PedidoVentaDetalleService {

    public pedidoVentaDetalleActual: Pedidoventadetalle;

    constructor(private pedidoVentaDetalleService: PedidoventadetalleApi) {
    }

    getAllByPedido(pedido: Pedidoventa): Observable<Pedidoventadetalle[]> {
        return this.pedidoVentaDetalleService.find({ where: { idPedidoVenta: pedido.idPedidoventa } });
    }

}
