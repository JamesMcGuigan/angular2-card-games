import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageOneCardDrawComponent } from './page-one-card-draw/page-one-card-draw.component';
import { HashLocationComponent } from './hash-location/hash-location.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageOneCardDrawComponent,
    HashLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
