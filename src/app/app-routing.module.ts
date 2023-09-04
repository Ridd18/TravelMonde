import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaymentsComponent } from './payments/payments.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutUs',component:AboutUsComponent},
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
      canActivate:[AuthGuard]
  },

  {
    path: 'feedback',
    loadChildren: () =>
      import('./feedback/feedback.module').then(
        (m) => m.FeedbackModule
      ),
  },
  {
    path: 'payment/:id',
    component: PaymentsComponent,
  },
  // {
  //   path: 'payment',
  //   component: PaymentsComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
