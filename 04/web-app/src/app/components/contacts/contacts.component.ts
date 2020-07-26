import { Component } from '@angular/core';
import { ExitCanDeactivate } from 'src/app/guards/exit.guard';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements ExitCanDeactivate {
    canDeactivate(): boolean | import("rxjs").Observable<boolean> {
        return confirm("Уйти?");
    }
}
