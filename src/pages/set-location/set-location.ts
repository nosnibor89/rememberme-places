import { Location } from './../../models/location';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { MouseEvent } from '@agm/core';


/**
 * Generated class for the SetLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {

  location: Location;
  marker: Location;


  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.location = this.navParams.get('location');
    const isSet = this.navParams.get('isSet');
    console.log(isSet);
    if(this.navParams.get('isSet')){
      this.marker = this.location;
    }
  }

  setMarker($event: MouseEvent){
    console.log($event);
    this.marker = new Location($event.coords.lat, $event.coords.lng);
  
  }

  confirm(){
    this.viewCtrl.dismiss({location : this.marker});
  }

  abort(){
    this.viewCtrl.dismiss();
  }

}
