
import { Action } from '@ngrx/store';

export enum SaladActionTypes {
    AddTopping = '[salad] add topping',
    StartOver = '[salad] start over',
}

export class AddTopping implements Action {
    readonly type = SaladActionTypes.AddTopping;
    constructor(public payload: any) {}
}

export class StartOver implements Action {
    readonly type = SaladActionTypes.StartOver;
}

export type SaladActionUnion =
| AddTopping
| StartOver;
