import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  value: string;
  constructor() { }

  ngOnInit(): void {
    this.value = 'Unknown';
  }

}
