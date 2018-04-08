import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Action, State, StateContext } from '@ngxs/store';
import { Actions, ofAction } from '@ngxs/store';

export class Navigate {
  static readonly type = '[router] navigate';
  constructor(public payload: string) {}
}

@State<string>({
  name: 'router',
  defaults: ''
})
export class RouterState {
  constructor(private router: Router) {}

  @Action(Navigate)
  async changeRoute(context: StateContext<string>, action: Navigate) {
    const path = action.payload;
    // context.setState(path);
    await this.router.navigate([path]);
    context.setState( path );
  }
}

// or listen to an event stream ala NgRX Effects

// @Injectable()
// export class RouteHandler {
//   constructor(private router: Router, private actions$: Actions) {
//     this.actions$
//       .pipe(ofAction(Navigate))
//       .subscribe(({ payload }) => this.router.navigate([payload]));
//   }
// }
