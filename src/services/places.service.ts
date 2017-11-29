import { Place } from './../models/place';
import { Location } from './../models/location';

import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


@Injectable()
export class PlacesService {
    private places: Place[] = [];

    constructor(private storage: Storage) { }

    addPlace(title: string, description: string, location: Location, imageUrl: string){
        const place = new Place(title,description,imageUrl, location);
        this.places.push(place);

        this.storage.set('places', this.places)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                const lastAddedPlaceIndex = this.places.indexOf(place);
                this.places.splice(lastAddedPlaceIndex, 1);
            })
    }

    loadPlaces(): Place[] {
        return this.places.slice();
    }

    fetchPlaces() {
        this.storage.get('place')
        .then((places: Place[]) => {
            this.places = places != null ? places : [];
        })
        .catch((err) => {
            console.log(err);
        });
    }

    deletePlace(place: Place){
        const index = this.places.indexOf(place);
        this.places.splice(index, 1);
    }

}