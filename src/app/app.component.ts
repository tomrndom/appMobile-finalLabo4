import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    device: Device
  ) {
    platform.ready().then(() => {      
      statusBar.styleDefault();
      splashScreen.hide();
    });
    console.log("UUID: ", device.uuid);
    console.log("MODEL: ", device.model);
    console.log("MANUFACTURER: ", device.manufacturer);
    console.log("SERIAL: ", device.serial);    
  }
}
