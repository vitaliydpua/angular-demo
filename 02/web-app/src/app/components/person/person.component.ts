import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person: Person;
  @Output() removeEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();
  constructor() { }

  onClickRemove() {
    this.removeEvent.emit(this.person.id);
  }
  onClickEdit() {
    this.editEvent.emit(this.person.id);
  }
}
