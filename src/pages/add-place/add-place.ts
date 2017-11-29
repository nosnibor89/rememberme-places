import { SetLocationPage } from './../set-location/set-location';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { Location } from './../../models/location';
import { Modal } from 'ionic-angular/components/modal/modal';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Camera } from '@ionic-native/camera';
import { File, Entry, FileError } from '@ionic-native/file';
import { PlacesService } from '../../services/places.service';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  initialLocation: Location = {
    lat: 40.7624324,
    lng: -73.9759827
  };
  location: Location = this.initialLocation;
  locationIsSet = false;
  imageUrl = '';

  private modal: Modal;

  constructor(
    private modalCtrl: ModalController, 
    private geolocation: Geolocation,
    private camera: Camera,
    private file: File,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController, 
    private placesService: PlacesService){}

  save(form: NgForm){
    this.placesService.addPlace(form.value.title, form.value.description, this.location, this.imageUrl);
    form.reset();
    this.location = this.initialLocation;
    this.imageUrl = '';
    this.locationIsSet = false;
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

  locate(){
    const loading = this.loadingCtrl.create({
      content: 'Locating...'
    });

    loading.present();

    this.geolocation.getCurrentPosition().then((pos: Geoposition) => {
      console.log(pos);
      this.location = new Location(pos.coords.latitude, pos.coords.longitude);
      this.locationIsSet = true;
      loading.dismiss();
    })
    .catch((reason) => {
      console.log(reason);
      loading.dismiss();
      const toast = this.toastCtrl.create({
        duration: 2500,
        message: 'Could not locate your position'
      });
      toast.present();
    })
  }

  takePhoto(){
    this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
    })
    .then((pic) => {
      const name = pic.replace(/^.*[\\\/]/, '');
      console.log(name);
      const path = pic.replace(/[^\/]*$/, '');
      console.log(path);
      console.log(cordova.file.dataDirectory);
      // this.imageUrl = pic;
      this.file.moveFile(path, name, cordova.file.dataDirectory, name)
      .then((data: Entry) => {
        this.imageUrl = data.nativeURL;
        console.log(this.imageUrl);
        this.camera.cleanup();
        // this.file.removeFile(path, name); // Camara does the same
      })
      .catch((err: FileError) => {
        this.imageUrl = '';
        
        const toast = this.toastCtrl.create({
          message: err.message,
          duration: 2500
        });
        toast.present();

        this.camera.cleanup();
      });
    })
    .catch((err) => {
      const toast = this.toastCtrl.create({
        duration: 2500,
        message: 'Could not take picture'
      });
      toast.present();
      this.camera.cleanup();
    })
  }

}
