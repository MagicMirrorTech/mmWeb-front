import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// User Components
import { HomeComponent } from "./home/home.component";
import { PlansComponent } from "./plans/plans.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
