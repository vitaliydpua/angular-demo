import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private items: string[];
    public activeItem;
    constructor() {
        this.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
        this.activeItem = null;
    }

    addItem(item: string) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}