import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { Routes, RouterModule } from '@angular/router';
import { saladReducer } from './salad.reducer';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  // { path: 'order', component: SaladPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('salad', saladReducer)
  ],
  declarations: [ToppingListComponent, SaladPageComponent]
})
export class SaladModule { }
