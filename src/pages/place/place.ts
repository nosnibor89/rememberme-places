import { PlacesService } from './../../services/places.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Place } from '../../models/place';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  place: Place;
  
  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController, 
    private placesService: PlacesService,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad PlacePage');
    console.log(this.navParams.get('place'));
    this.place = this.navParams.get('place');
  }

  leave(deleted = false){
    this.viewCtrl.dismiss({deleted: deleted});
  }

  delete(){
    this.placesService.deletePlace(this.place);
    this.leave(true);
  }

}
