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

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    // this.places = this.placesService.loadPlaces();
  }

  ionViewWillEnter(){
    this.places = this.placesService.loadPlaces();
  }

}
