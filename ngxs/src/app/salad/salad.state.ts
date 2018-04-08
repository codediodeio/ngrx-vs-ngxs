
import { State, Action, StateContext, Select, Selector, Store } from '@ngxs/store';
import { AppState, AppStateModel } from '../shared/app.state';
import { AddTopping, StartOver } from './salad.actions';


export interface SaladStateModel {
    dressing: string;
    price: number;
    toppings: string[];
}

const defaults: SaladStateModel = {
    dressing: 'ranch',
    price: 9.99,
    toppings: [],
};

@State<SaladStateModel>({
    name: 'salad',
    defaults
})
export class SaladState {

    @Selector()
    static getDressing(state: SaladStateModel) {
        return state.dressing;
    }

    @Action(AddTopping)
    // addTopping({ getState, patchState }: StateContext<SaladStateModel>, { payload }: AddTopping) {
    //     const current = getState();
    //     const toppings = [...current.toppings, payload ];
    //     patchState({ toppings, price: current.price + 0.5 });
    // }

    addTopping(context: StateContext<SaladStateModel>, action: AddTopping) {
        const current = context.getState();

        const toppings = [...current.toppings, action.payload ];
        context.patchState({
            toppings,
            price: current.price + 0.5
        });
    }

    @Action(StartOver)
    reset({ setState }: StateContext<SaladStateModel>) {
        setState( { ...defaults });
    }

}
