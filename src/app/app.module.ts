import { SetLocationPageModule } from './../pages/set-location/set-location.module';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';

import { AddPlacePageModule } from '../pages/add-place/add-place.module';
import { PlacePageModule } from '../pages/place/place.module';
import { PlacesService } from '../services/places.service';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // AddPlacePage,
    // PlacePage,
    // SetLocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDn8QeO5qpPcsV4XWTwj29MCzjrawyyaDQ'
    }),
    AddPlacePageModule,
    PlacePageModule,
    SetLocationPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    // AddPlacePage,
    // PlacePage,
    // SetLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    File,
    PlacesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
