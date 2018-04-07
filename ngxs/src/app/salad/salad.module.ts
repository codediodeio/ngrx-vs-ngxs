import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { Routes, RouterModule } from '@angular/router';

import { NgxsModule } from '@ngxs/store';
import { SaladState } from './salad.state';

const routes: Routes = [
  { path: 'order', component: SaladPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SaladState])
  ],
  declarations: [ToppingListComponent, SaladPageComponent]
})
export class SaladModule { }
