import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list.component';
import { ListItemComponent } from './item/list-item.component';
import { RouterModule } from '@angular/router';
import { ListItemInfoComponent } from './item/info/list-item-info.component';
import { ItemsService } from 'src/app/services/items.service';


@NgModule({
    imports: [ BrowserModule, RouterModule ],
    declarations: [ListComponent, ListItemComponent, ListItemInfoComponent],
    providers: [ItemsService],
    exports: [ListComponent]
})
export class ListModule {}