import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/pages/home/home.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DetailedRequestComponent } from './components/pages/detailed-request/detailed-request.component';
import { MakeOfferForRequestComponent } from './components/pages/make-offer-for-request/make-offer-for-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'request-details/:id', component: DetailedRequestComponent},
  { path: 'make-offer/:id', component: MakeOfferForRequestComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
