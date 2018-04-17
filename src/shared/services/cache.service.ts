import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CacheService } from 'ionic-cache';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CacheServicio {                        

    constructor(
        private cache: CacheService,
        private http: HttpClient,
    ) { }

    cargarTodo(){
        //this.cargarClientes();
        //this.cargarDomicilios();
        //this.cargarRubros();
        //this.cargarArticulos();
        //this.cargarPedidos();
        //this.cargarDetalles();
    }

    cargarClientes(refresher?) {
        let url = 'https://api-laboratorio-4.herokuapp.com/api/Clientes/';
        let req = this.http.get(url);                

        if (refresher) {            
            let delayType = 'all';
            return this.cache.loadFromDelayedObservable(url, req, 'clientes', null, delayType);

        } else {            
            //this.listaClientes = this.cache.loadFromObservable(url, req, this.clientesKey, null);
            return this.cache.loadFromObservable('clientes', req);
        }
    }

    cargarDomicilios(refresher?) {
        let url = 'https://api-laboratorio-4.herokuapp.com/api/Domicilios/';
        let req = this.http.get(url);        

        if (refresher) {            
            let delayType = 'all';
            return this.cache.loadFromDelayedObservable(url, req, 'domicilios', null, delayType);                        
        } else {            
            //this.listaDomicilios = this.cache.loadFromObservable(url, req, this.domiciliosKey, ttl);            
            return this.cache.loadFromObservable('domicilios', req);
        }
    }

    cargarRubros(refresher?) {
        let url = 'https://api-laboratorio-4.herokuapp.com/api/Rubros/';
        let req = this.http.get(url);
                
        if (refresher) {            
            let delayType = 'all';
            return this.cache.loadFromDelayedObservable(url, req, 'rubros', null, delayType);                        
        } else {            
            //this.listaRubros = this.cache.loadFromObservable(url, req, 'rubros', null);
            return this.cache.loadFromObservable(url, req);            
        }
    }

    cargarArticulos(refresher?) {
        let url = 'https://api-laboratorio-4.herokuapp.com/api/Articulos/';
        let req = this.http.get(url);
                
        if (refresher) {            
            let delayType = 'all';
            return this.cache.loadFromDelayedObservable(url, req, 'articulos', null, delayType);                        
        } else {        
            return this.cache.loadFromObservable(url, req, 'articulos', null);
            //this.listaArticulos = this.cache.loadFromObservable(url, req);            
        }
    }

    cargarPedidos(refresher?) {
        let url = 'https://api-laboratorio-4.herokuapp.com/api/Pedidoventa/';
        let req = this.http.get(url);
                
        if (refresher) {            
            let delayType = 'all';
            return this.cache.loadFromDelayedObservable(url, req, 'pedidos', null, delayType);                        
        } else {            
            return this.cache.loadFromObservable(url, req, 'pedidos', null);
            //this.listaPedidos = this.cache.loadFromObservable(url, req);            
        }
    }

    cargarDetalles(refresher?) {
        let url = 'https://api-laboratorio-4.herokuapp.com/api/Pedidoventadetalles/';
        let req = this.http.get(url);
                
        if (refresher) {            
            let delayType = 'all';
            return this.cache.loadFromDelayedObservable(url, req, 'detallePedidos', null, delayType);                        
        } else {            
            return this.cache.loadFromObservable(url, req, 'detallePedidos', null);
            //this.listaDetallePedidos = this.cache.loadFromObservable(url, req);            
        }
    }

    // Invalidate for a specific group key
    invalidateCache() {
        this.cache.clearAll();
    }

    // Pull to refresh and force reload
    forceReload(refresher) {
        this.cargarClientes(refresher);
    }
}