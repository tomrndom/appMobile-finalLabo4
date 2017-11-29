import { Component } from '@angular/core';

import { PedidosPage } from '../pedidos/pedidos';
import { NuevoPage } from '../nuevo/nuevo';
import { SincronizarPage } from '../sincronizar/sincronizar';

import { Storage } from '@ionic/storage';

import { ArticuloService, ClienteService, DomicilioService, RubroService, PedidoVentaDetalleService, PedidoVentaService } from '../../shared/services/index';

import { Pedidoventa, Articulo, Cliente, Domicilio, Rubro, Pedidoventadetalle } from '../../shared/services/lbsdk/index';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PedidosPage;
  tab2Root = NuevoPage;
  tab3Root = SincronizarPage;

  // 
  pedidosAEnviar: Pedidoventa[];

  // data required
  articulosApp: Articulo[];
  clientesApp: Cliente[];
  domiciliosApp: Domicilio[];
  rubrosApp: Rubro[];
  pedidosApp: Pedidoventa[];
  pedidosDetalleApp: Pedidoventadetalle[];


  constructor(
    private storage: Storage,
    private articuloService: ArticuloService,
    private clienteService: ClienteService,
    private domicilioService: DomicilioService,
    private rubroService: RubroService,
    private pedidoVentaService: PedidoVentaService,
    private pedidoVentaDetalleService: PedidoVentaDetalleService
  ) {
    this.checkLocalStorage() ? console.log("true") : console.log("false");
    this.checkExistingData() ? console.log("true") : console.log("false");
  }

  checkLocalStorage(): Boolean {
    let result: boolean;
    this.storage.length().then((largo) => {
      if (largo == 0) {
        result = true
      } else {
        result = false;
      }
    })
    return result;
  }

  checkExistingData(): Boolean {
    if (
      (this.articulosApp.length == 0) ||
      (this.clientesApp.length == 0) ||
      (this.domiciliosApp.length == 0) ||
      (this.rubrosApp.length == 0) ||
      (this.pedidosApp.length == 0) ||
      (this.pedidosDetalleApp.length == 0)
    ) {
      return false;
    } else {
      return true
    }
  }

  getAppData() {
    this.articuloService.getAll()
      .subscribe((articulos: Articulo[]) => {
        this.articulosApp = articulos;
      });
  }
}
