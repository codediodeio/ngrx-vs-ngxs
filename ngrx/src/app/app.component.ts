import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';
import { AppState } from './shared/app.reducer';

import { SetUsername, ConfirmOrder } from './shared/app.actions';
import { Navigate } from './shared/router.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  state$: Observable<AppState>;

  constructor(private store: Store<AppState>) {
    this.state$ = store.select(state => state);
  }

  clickHandler(username) {
    this.store.dispatch(new SetUsername(username) );
    this.store.dispatch(new Navigate('salad/order') );
  }

  confirm() {
    this.store.dispatch(new ConfirmOrder());
  }

}

