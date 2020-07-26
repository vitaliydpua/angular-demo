import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListComponent } from './list/list.component';
import { ListItemInfoComponent } from './list/item/info/list-item-info.component';
import { LoginGuard } from '../guards/login.guard';
import { ExitGuard } from '../guards/exit.guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contacts', component: ContactsComponent, canDeactivate: [ExitGuard]
  },
  {
    path: 'list', component: ListComponent, canActivate: [LoginGuard], children: [
      {
        path: 'info/:id', component: ListItemInfoComponent
      }
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
