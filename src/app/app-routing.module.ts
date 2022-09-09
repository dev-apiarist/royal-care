import { FoodMenuComponent } from './Pages/admin/food-menu/food-menu.component';
import { PricingComponent } from './Pages/admin/pricing/pricing.component';
import { UsersComponent } from './Pages/admin/users/users.component';
import { DashboardComponent } from './Pages/admin/dashboard/dashboard.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { HostelDetailsComponent } from './Pages/hostel-details/hostel-details.component';
import { AccomodationComponent } from './Components/hero/accomodation/accomodation.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomsComponent } from './Pages/admin/add-rooms/add-rooms.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hostel-details', component: HostelDetailsComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admin-home',
        component: DashboardComponent,
      },
      {
        path: 'food-menu',
        component: FoodMenuComponent,
      },

      {
        path: 'add-rooms', // child route path
        component: AddRoomsComponent, // child route component that the router renders
      },
      {
        path: 'price-details',
        component: PricingComponent, // another child route component that the router renders
      },
      {
        path: 'users',
        component: UsersComponent, // another child route component that the router renders
      },
    ],
  },

  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
