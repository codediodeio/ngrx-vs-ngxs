import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './shared/app.reducer';
import { saladReducer } from './salad/salad.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
export class CustomSerializer implements RouterStateSerializer<string> {
  serialize(routerState: RouterStateSnapshot): string {
    return routerState.url;
  }
}
import { RouterEffects } from './shared/router.effects';
import { AppEffects } from './shared/app.effects';
import { SaladModule } from './salad/salad.module';
import { OrderService } from './order.service';

import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<any> = {
    salad: saladReducer,
    app: appReducer,
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SaladModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([RouterEffects, AppEffects]),

  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
