import { Action } from '@ngrx/store';
import { AppActionTypes, AppActionUnion } from './app.actions';

export interface AppState {
  username: string;
  orderId: number;
  status?: 'pending' | 'confirmed' | 'declined';
  salad?: any;
}

export const initialState = {
  username: '',
  orderId: Math.floor(Math.random() * 23000)
};

export function appReducer(state: AppState = initialState, action: AppActionUnion) {
  switch (action.type) {
    case AppActionTypes.SetUsername:
      return { ...state, username: action.payload };

    case AppActionTypes.ConfirmOrder:
      return { ...state, status: 'pending' };

    case AppActionTypes.OrderSuccess:
      return { ...state, status: 'confirmed' };

    case AppActionTypes.OrderFailed:
      return { ...state, status: 'declined' };

    default:
      return state;
  }
}
