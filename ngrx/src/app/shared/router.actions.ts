import { Action } from '@ngrx/store';

export enum RouterActionTypes {
    Navigate = '[app] navigate',
}


export class Navigate implements Action {
    readonly type = RouterActionTypes.Navigate;
    constructor(public payload: string) {}
}
