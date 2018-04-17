import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PedidosPage } from '../pages/pedidos/pedidos';
import { NuevoPage } from '../pages/nuevo/nuevo';
import { SincronizarPage } from '../pages/sincronizar/sincronizar';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device'

// Services
import { ArticuloService } from '../shared/services/articulo.service';
import { ClienteService } from '../shared/services/cliente.service';
import { DomicilioService } from '../shared/services/domicilio.service';
import { PedidoVentaService } from '../shared/services/pedidoVenta.service';
import { PedidoVentaDetalleService } from '../shared/services/pedidoVentaDetalle.service';
import { RubroService } from '../shared/services/rubro.service';
import { CacheServicio } from '../shared/services/cache.service';

// Storage Module
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { CacheModule } from 'ionic-cache';
import { HttpClientModule } from '@angular/common/http';
import { PedidoventaApi, PedidoventadetalleApi } from '../shared/services/lbsdk';

@NgModule({
  declarations: [
    MyApp,    
    TabsPage,
    PedidosPage,
    NuevoPage,
    SincronizarPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),    
    IonicStorageModule.forRoot(),
    CacheModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    TabsPage,
    PedidosPage,
    NuevoPage,
    SincronizarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    Network,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CacheServicio,
    PedidoventaApi,
    PedidoventadetalleApi,
    PedidoVentaService,
    PedidoVentaDetalleService,
    ArticuloService,
    ClienteService,
    DomicilioService,
    RubroService
  ]
})
export class AppModule {}
