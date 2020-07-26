import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-item-info',
  templateUrl: './list-item-info.component.html',
})
export class ListItemInfoComponent {
    item: Item;
    constructor(private itemsService: ItemsService,
        private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe(prms => {
            const id = prms['id'];
            this.item = itemsService.getItemById(id);
        });
    }
}
