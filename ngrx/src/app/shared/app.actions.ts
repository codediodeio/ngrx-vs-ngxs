
import { Action } from '@ngrx/store';

export enum AppActionTypes {
    SetUsername = '[app] set username',
    ConfirmOrder = '[app] confirm order',
    OrderSuccess = '[app] order success',
    OrderFailed = '[app] order failed',
}

export class SetUsername implements Action {
    readonly type = AppActionTypes.SetUsername;
    constructor(public payload: string) {}
}

export class ConfirmOrder implements Action {
    readonly type = AppActionTypes.ConfirmOrder;
}

export class OrderSuccess implements Action {
    readonly type = AppActionTypes.OrderSuccess;
}

export class OrderFailed implements Action {
    readonly type = AppActionTypes.OrderFailed;
}

export type AppActionUnion =
| SetUsername
| ConfirmOrder
| OrderSuccess
| OrderFailed;
