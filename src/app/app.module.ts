import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatnershipComponent } from './patnership/patnership.component';
import { PatnershipformComponent } from './patnershipform/patnershipform.component';
import { CoursedetailsComponent } from './course/coursedetails.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatnershipComponent,
    PatnershipformComponent,
    CoursedetailsComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
