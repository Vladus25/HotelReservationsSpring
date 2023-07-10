import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationOperatorComponent } from './components/reservation-operator/reservation-operator.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent },
  {path:'Login', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Reservation', component:ReservationComponent},
  {path:'Reservation-Operation', component:ReservationOperatorComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
