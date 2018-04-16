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
import { IonicStorageModule } from '@ionic/storage';

// Servicios
import { PedidoVentaService, ClienteService, ArticuloService, DomicilioService, PedidoVentaDetalleService, RubroService } from '../shared/services/index';

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
    IonicModule.forRoot(MyApp),    
    IonicStorageModule.forRoot()
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PedidoVentaService, 
    ClienteService, 
    ArticuloService, 
    DomicilioService, 
    PedidoVentaDetalleService, 
    RubroService
  ]
})
export class AppModule {}
