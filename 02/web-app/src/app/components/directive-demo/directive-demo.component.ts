import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
  isVisible = true;
  items = ['First', 'Second', 'Third', 'Fourth'];
  color = 'Green';

  constructor() { }

  ngOnInit(): void {
  }

}
