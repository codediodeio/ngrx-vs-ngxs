import { State, Action, StateContext } from '@ngxs/store';
import { SetUsername, ConfirmOrder, OrderFailed, OrderSuccess } from './app.actions';
import { of } from 'rxjs/observable/of';
import { delay, tap, first, map } from 'rxjs/operators';

export interface AppStateModel {
    username: string;
    orderId: number;
    status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        username: '',
        orderId: Math.floor(Math.random() * 23000),
    }
})
export class AppState {
    @Action(SetUsername)
    setUsername({ patchState }: StateContext<AppStateModel>, { payload }: SetUsername) {
        console.log('foo')
      patchState({ username: payload });
    }

    @Action(ConfirmOrder, { cancelUncompleted: true })
    confirmOrder({ dispatch, patchState }: StateContext<AppStateModel>) {
        patchState( { status: 'pending' } );
        return orderDecision$()
            .pipe(
                map(success => {
                    if (success) {
                        return dispatch(OrderSuccess);
                    } else {
                        return dispatch(OrderFailed);
                    }
                })
            );

    }

    @Action(OrderSuccess)
    orderSuccess({ patchState }: StateContext<AppStateModel>) {
        patchState( { status: 'confirmed' } );
    }

    @Action(OrderFailed)
    orderFailed({ patchState }: StateContext<AppStateModel>) {
        patchState( { status: 'declined' } );
    }
}

async function orderDecision() {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            resolve( true );
        }, 2000);
    });
}

function orderDecision$() {
    return of(Math.random() >= 0.5).pipe(delay(2000));
}

