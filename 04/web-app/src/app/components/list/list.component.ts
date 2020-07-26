import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
})
export class ListComponent {
    constructor(public itemsService: ItemsService) {
        
    }
}
