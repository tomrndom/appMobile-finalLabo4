import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Cliente, ClienteApi } from './lbsdk/index'

@Injectable()
export class ClienteService {

    public clienteActual: Cliente;

    constructor(private clienteService: ClienteApi) {
    }

    getAll(filtro: any = {}): Observable<Cliente[]> {
        return this.clienteService.find(filtro);
    }

    getbyId(id: number): Observable<Cliente> {
        return this.clienteService.findById(id);
    }    

}
