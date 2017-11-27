import { SetLocationPage } from './../set-location/set-location';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Location } from './../../models/location';
import { Modal } from 'ionic-angular/components/modal/modal';


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
  locationIsSet = false;

  private modal: Modal;

  constructor(private modalCtrl: ModalController){}

  save(form: NgForm){
    console.log(form.value);
    
  }

  openMap(){
    this.modal = this.modalCtrl.create(SetLocationPage, { location: this.location, isSet: this.locationIsSet });
    this.modal.onDidDismiss((data) => {
      if(data){
        this.location =  data['location'];
        this.locationIsSet = true;
      }
    });
    
    this.modal.present();
  }

}
