import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app-routing.module';
import { AppComponent } from './components/app.component';
import { ListModule } from './components/list/list.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginGuard } from './guards/login.guard';
import { ExitGuard } from './guards/exit.guard';
import { HttpClientModule } from '@angular/common/http';
import { JsonPlaceholderService } from './services/jsonplaceholder.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [LoginGuard, ExitGuard, JsonPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
