import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { SaladActionTypes, SaladActionUnion } from './salad.actions';
import { AppState } from '../shared/app.reducer';

export interface SaladState {
  dressing: string;
  price: number;
  toppings: string[];
}

const initialState: SaladState = {
  dressing: 'ranch',
  price: 9.99,
  toppings: []
};

export function saladReducer(state: SaladState = initialState, action: SaladActionUnion) {
  switch (action.type) {
    case SaladActionTypes.AddTopping:
      const toppings = [...state.toppings, action.payload];
      // console.log(toppings)
      return {
        ...state,
        toppings,
        price: state.price + 0.5
      };

    case SaladActionTypes.StartOver:
      return { ...initialState };

    default:
      return state;
  }
}

export const selectFeature = createFeatureSelector<any>('salad');
export const selectDressing = createSelector(selectFeature, (state: SaladState) => state.dressing);
