export class SetUsername {
  static readonly type = '[app] set username';
  constructor(public payload: string) {}
}

export class ConfirmOrder {
  static readonly type = '[app] confirm order';
}

export class OrderSuccess {
  static readonly type = '[app] order success';
}

export class OrderFailed {
  static readonly type = '[app] order failed';
}
