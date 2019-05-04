import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageOneCardDrawComponent} from './page-one-card-draw/page-one-card-draw.component';


const routes: Routes = [
  { path: 'one-card-draw', component: PageOneCardDrawComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


