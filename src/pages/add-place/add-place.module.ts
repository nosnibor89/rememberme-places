import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacePage } from './add-place';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AddPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlacePage),
    AgmCoreModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDn8QeO5qpPcsV4XWTwj29MCzjrawyyaDQ'
    // }),
  ],
  entryComponents: [
    AddPlacePage
  ]
})
export class AddPlacePageModule {}
