import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {
    path: 'destinations',
    loadChildren: () =>
      import('./destinations/destinations.module').then(
        (m) => m.DestinationsModule
      ),
  },

  {
    path: 'administration',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
