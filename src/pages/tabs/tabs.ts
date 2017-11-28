import { PlacePage } from './../place/place';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Component, OnInit } from '@angular/core';
import { AddPlacePage } from '../add-place/add-place';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../models/place';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {
  addPlacePage = AddPlacePage;
  places: Place[] = [];

  constructor(
    private modalCtrl: ModalController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    // this.places = this.placesService.loadPlaces();
  }

  ionViewWillEnter(){
    this.loadPlaces();
  }

  openPlace(place: Place) { 
    const modal = this.modalCtrl.create(PlacePage, {place: place});
    modal.onDidDismiss((data) => {
      if(data['deleted']){
        this.loadPlaces();
      }
    })

    modal.present();
  }

  private loadPlaces(){
    this.places = this.placesService.loadPlaces();
  }

}
