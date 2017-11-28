import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetLocationPage } from './set-location';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    SetLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SetLocationPage),
    AgmCoreModule
  ],
  entryComponents: [
    SetLocationPage
  ]

})
export class SetLocationPageModule {}
