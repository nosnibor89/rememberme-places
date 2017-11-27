import { Location } from './../models/location';
import { Place } from '../models/place';


export class PlacesService {
    private places: Place[] = [];


    addPlace(title: string, description: string, location: Location, imageUrl: string){
        const place = new Place(title,description,imageUrl, location);
        this.places.push(place);
    }

    loadPlaces(): Place[] {
        return this.places.slice();
    }

}