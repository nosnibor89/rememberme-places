import { Place } from './../models/place';
import { Location } from './../models/location';


export class PlacesService {
    private places: Place[] = [];


    addPlace(title: string, description: string, location: Location, imageUrl: string){
        const place = new Place(title,description,imageUrl, location);
        this.places.push(place);
    }

    loadPlaces(): Place[] {
        return this.places.slice();
    }

    deletePlace(place: Place){
        const index = this.places.indexOf(place);
        this.places.splice(index, 1);
    }

}