import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Cliente, ClienteApi } from './lbsdk/index'

import { CacheService } from "ionic-cache";    

@Injectable()
export class ClienteService {

    public clienteActual: Cliente;

    public listaClientes: Array<Cliente>;

    constructor(private clienteService: ClienteApi, private cache: CacheService) {
        this.cargarClientes();
    }

    loadList() {        
        let cacheKey = 'clientes';
        let request = this.getAll();

        return this.cache.loadFromObservable(cacheKey, request);
    }

    cargarClientes(){
        this.loadList();
        this.cache.getItem('clientes').then(cli => {
            console.log("clientes?", cli);
            this.listaClientes = cli;
        })
    }

    getAll(filtro: any = {}): Observable<Cliente[]> {
        return this.clienteService.find(filtro);
    }

    getbyId(id: number): Observable<Cliente> {
        return this.clienteService.findById(id);
    }    

}
