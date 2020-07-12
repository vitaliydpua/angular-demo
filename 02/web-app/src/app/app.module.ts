import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { PersonComponent } from './components/person/person.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ListComponent,
    ItemComponent,
    ItemInfoComponent,
    DirectiveDemoComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
