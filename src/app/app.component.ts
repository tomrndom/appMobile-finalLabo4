import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { Pedidoventa, Articulo, Cliente, Domicilio, Rubro, Pedidoventadetalle } from '../shared/services/lbsdk/index';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  pedidosAEnviar: Pedidoventa[];
  
  // data required
  articulos: Articulo[];
  clientes: Cliente[];
  domicilios: Domicilio[];
  rubros: Rubro[];
  pedidos: Pedidoventa[];
  pedidosDetalle: Pedidoventadetalle[];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
