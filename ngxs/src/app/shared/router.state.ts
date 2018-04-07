import { Router } from '@angular/router';
import { Action, State, StateContext } from '@ngxs/store';

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
  changeRoute(context: StateContext<string>, action: Navigate) {
    const path = action.payload;
    context.setState(path);
    this.router.navigate([path]);
  }

}
