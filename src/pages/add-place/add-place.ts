import { SetLocationPage } from './../set-location/set-location';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Location } from './../../models/location';


@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  location: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };

  constructor(private modalCtrl: ModalController){}

  save(form: NgForm){
    console.log(form.value);
    
  }

  openMap(){
    const modal = this.modalCtrl.create(SetLocationPage, { location: this.location });

    modal.present();

  }

}
