import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { HeroComponent } from './Components/hero/hero.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HostelDetailsComponent } from './Pages/hostel-details/hostel-details.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { TeamComponent } from './Components/hero/team/team.component';
import { AccomodationComponent } from './Components/hero/accomodation/accomodation.component';
import { AboutComponent } from './Components/hero/about/about.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { DashboardComponent } from './Pages/admin/dashboard/dashboard.component';
import { AddRoomsComponent } from './Pages/admin/add-rooms/add-rooms.component';
import { ViewRoomsComponent } from './Pages/admin/view-rooms/view-rooms.component';
import { FoodMenuComponent } from './Pages/admin/food-menu/food-menu.component';
import { PricingComponent } from './Pages/admin/pricing/pricing.component';
import { UsersComponent } from './Pages/admin/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeroComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HostelDetailsComponent,
    ContactComponent,
    TeamComponent,
    AccomodationComponent,
    AboutComponent,
    AdminComponent,
    DashboardComponent,
    AddRoomsComponent,
    ViewRoomsComponent,
    FoodMenuComponent,
    PricingComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
