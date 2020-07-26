import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable()
export class ItemsService {
    items: Item[];
    constructor() {
        this.items = [
            {
                id: 1,
                value: 'Item 1'
            },
            {
                id: 2,
                value: 'Item 2'
            },
            {
                id: 3,
                value: 'Item 3'
            },
            {
                id: 4,
                value: 'Item 4'
            }
        ];
    }

    getItemById(id: number): Item {
        return this.items.filter(item => item.id == id)[0];
    }
}