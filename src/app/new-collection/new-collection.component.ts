import { Component, OnInit } from '@angular/core';
import { SaveDataTemporaryService } from '../shared/save-data-temporary.service';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.scss'],
})
export class NewCollectionComponent implements OnInit {
  constructor(public dataService: SaveDataTemporaryService) {}

  ngOnInit(): void {}

  addCollection() {
    let collection = { ...this.dataService.sampleCollection };
    collection.id = this.dataService.getID();
    this.dataService.addCollection(collection);
  }

  copyCollections() {
    navigator.clipboard.writeText(this.dataService.getCollectionsJSON());
  }

  saveToLocaleStorage() {
    localStorage.setItem('collections', this.dataService.getCollectionsJSON());
  }

  loadFromLocaleStorage() {
    this.dataService.loadFromLocaleStorage();
  }
}
