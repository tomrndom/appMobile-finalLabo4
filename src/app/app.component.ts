import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';

import { TabsPage } from '../pages/tabs/tabs';

import { CacheService } from "ionic-cache";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    device: Device,
    cache: CacheService,
  ) {
    platform.ready().then(() => {      
      // TTL a 12 horas
      cache.setDefaultTTL(60 * 60 * 12); 
      // Keep our cached results when device is offline!
      cache.setOfflineInvalidate(false);
      statusBar.styleDefault();
      splashScreen.hide();
    });
    console.log("UUID: ", device.uuid);
    console.log("MODEL: ", device.model);
    console.log("MANUFACTURER: ", device.manufacturer);
    console.log("SERIAL: ", device.serial);    
  }
}
