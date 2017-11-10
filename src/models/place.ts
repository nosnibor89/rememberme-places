import { Location } from './location';
export class Place {
    constructor(
        public tittle: string, 
        public description: string,
        public imagePathOrUrl: string,
        public location: Location) {
        
    }
}