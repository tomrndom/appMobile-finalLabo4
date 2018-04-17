import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
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

// 
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    PedidosPage,
    NuevoPage,
    SincronizarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PedidosPage,
    NuevoPage,
    SincronizarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ArticuloService,
    ClienteService,
    DomicilioService,
    PedidoVentaService,
    PedidoVentaDetalleService,
    RubroService
  ]
})
export class AppModule { }
