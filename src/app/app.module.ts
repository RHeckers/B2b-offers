import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavBarComponent } from './components/pagesElements/nav-bar/nav-bar.component';
import { TabsComponent } from './components/pagesElements/tabs/tabs.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FormComponent } from './components/pagesElements/form/form.component';
import { InputComponent } from './components/pagesElements/form/questions/input/input.component';
import { HeaderBoxWithScrollComponent } from './components/pagesElements/header-box-with-scroll/header-box-with-scroll.component';
import { LoginComponent } from './components/pages/login/login.component';
import { OrDividerComponent } from './components/pagesElements/or-divider/or-divider.component';
import { RequestListCardComponent } from './components/pagesElements/request-list-card/request-list-card.component';
import { RequestsListComponent } from './components/pagesElements/request-list/request-list.component';
import { SelectComponent } from './components/pagesElements/form/questions/select/select.component';
import { DetailedRequestComponent } from './components/pages/detailed-request/detailed-request.component';
import { MakeOfferForRequestComponent } from './components/pages/make-offer-for-request/make-offer-for-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TabsComponent,
    RegisterComponent,
    FormComponent,
    InputComponent,
    HeaderBoxWithScrollComponent,
    LoginComponent,
    OrDividerComponent,
    RequestListCardComponent,
    RequestsListComponent,
    SelectComponent,
    DetailedRequestComponent,
    MakeOfferForRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
