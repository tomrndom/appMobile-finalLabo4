import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Domicilio, DomicilioApi } from './lbsdk/index'

@Injectable()
export class DomicilioService {

    public domicilioActual: Domicilio;

    constructor(private domicilioService: DomicilioApi) {
    }

    getAll(filtro: any = {}): Observable<Domicilio[]> {
        return this.domicilioService.find(filtro);
    }

    getbyId(id: number): Observable<Domicilio> {
        return this.domicilioService.findById(id);
    }       

}
