import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Pedidoventa, PedidoventaApi, Cliente, Domicilio } from './lbsdk/index'

@Injectable()
export class PedidoVentaService {

    public pedidoVentaActual: Pedidoventa;    

    constructor(private pedidoVentaService: PedidoventaApi) {
    }

    getAll(filtro: any = {}): Observable<Pedidoventa[]> {
        return this.pedidoVentaService.find(filtro);
    }

    getbyId(id: number): Observable<Pedidoventa> {
        return this.pedidoVentaService.findById(id);
    }

    getAllByCliente(cliente: Cliente): Observable<Pedidoventa[]> {
        return this.pedidoVentaService.find({ where: { idCliente: cliente.idCliente } })
    }

    getAllByDomicilio(domicilio: Domicilio): Observable<Pedidoventa[]> {
        return this.pedidoVentaService.find({ where: { idDomicilio: domicilio.idDomicilio } })
    }

}
