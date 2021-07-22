import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatnershipComponent } from './patnership/patnership.component';
import { PatnershipformComponent } from './patnershipform/patnershipform.component';
import { CoursedetailsComponent } from './course/coursedetails.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'partnership',
    component: PatnershipComponent
  },
  {
    path: 'partnershipform',
    component: PatnershipformComponent
  },
  {
    path: 'courses',
    component: CoursedetailsComponent
  },
  {
    path:'demo',
    component:DemoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
