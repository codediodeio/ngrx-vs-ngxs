import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';



@Injectable()
export class OrderService {

  constructor() { }

  post() {
    return of(Math.random() >= 0.5).pipe(delay(2000));
  }


}
