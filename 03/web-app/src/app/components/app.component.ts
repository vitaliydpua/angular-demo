import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  tmpItem = '';

  constructor(public dataService: DataService) {
    console.log(dataService);
  }
  onSaveClick() {
    this.dataService.addItem(this.tmpItem);
    this.tmpItem = '';
  }
  onItemClick(item: string) {
    this.dataService.activeItem = item;
  }
}
