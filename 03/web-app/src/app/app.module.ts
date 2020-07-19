import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
