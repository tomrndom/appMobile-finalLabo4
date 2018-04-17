import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Rubro, RubroApi } from './lbsdk/index'

@Injectable()
export class RubroService {

    public rubroActual: Rubro;

    public listaRubros: Array<Rubro>;

    constructor(private rubroService: RubroApi) {
    }

    getAll(filtro: any = {}): Observable<Rubro[]> {
        return this.rubroService.find(filtro);
    }

    getbyId(id: number): Observable<Rubro> {
        return this.rubroService.findById(id);
    }

    getAllByRubro(rubro: Rubro): Observable<Rubro[]> {
        return this.rubroService.find({ where: { idRubro: rubro.idRubro } });
    }

}
