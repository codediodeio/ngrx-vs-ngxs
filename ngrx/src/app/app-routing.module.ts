import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaladPageComponent } from './salad/salad-page/salad-page.component';

const routes: Routes = [
  // { path: 'salad', loadChildren: './salad/salad.module#SaladModule'}
  { path: 'salad/order', component: SaladPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
