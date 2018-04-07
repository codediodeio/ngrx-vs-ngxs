export class AddTopping {
    static readonly type = '[salad] add topping';
    constructor(public payload: any) {}
}

export class StartOver {
    static readonly type = '[salad] start over';
}

// export class UpdateDressing {
//     static readonly type = '[salad] update dressing';
//     constructor(public payload: string) {}
// }

