import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, mergeMap } from 'rxjs/operators';
import { AppActionTypes, OrderFailed, OrderSuccess } from './app.actions';
import { OrderService } from '../order.service';

@Injectable()
export class AppEffects {
  @Effect()
  confirmOrder$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.ConfirmOrder),
    mergeMap(action =>
      this.orderService.post().pipe(
        map(success => success ? new OrderSuccess() : new OrderFailed())
      )
    )
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
