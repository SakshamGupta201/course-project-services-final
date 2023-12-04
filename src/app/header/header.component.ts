import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService) {}

  saveData() {
    this.dataStorage.storeRecipes();
  }

  fetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
