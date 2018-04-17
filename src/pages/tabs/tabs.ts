import { Component } from '@angular/core';

import { PedidosPage } from '../pedidos/pedidos';
import { NuevoPage } from '../nuevo/nuevo';
import { SincronizarPage } from '../sincronizar/sincronizar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PedidosPage;
  tab2Root = NuevoPage;
  tab3Root = SincronizarPage;

  constructor() {

  }
}
