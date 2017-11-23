import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { BASE_URL, API_VERSION } from './lb.base.url'
import { LoopBackConfig, LoopBackFilter, Articulo, ArticuloApi, Rubro } from './lbsdk/index'

@Injectable()
export class ArticuloService {

    public articuloActual: Articulo;

    constructor(private articuloService: ArticuloApi) {
    }

    getAll(filtro: any = {}): Observable<Articulo[]> {
        return this.articuloService.find(filtro);
    }

    getbyId(id: number): Observable<Articulo> {
        return this.articuloService.findById(id);
    }

    getAllByRubro(rubro: Rubro): Observable<Articulo[]> {
        return this.articuloService.find({ where: { idRubro: rubro.idRubro } });
    }

}
