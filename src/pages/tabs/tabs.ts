import { Component } from '@angular/core';
import { AddPlacePage } from '../add-place/add-place';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  addPlacePage = AddPlacePage;

}
