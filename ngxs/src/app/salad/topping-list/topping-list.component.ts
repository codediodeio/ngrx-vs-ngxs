import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddTopping } from '../salad.actions';
import { SaladState } from '../salad.state';

@Component({
  selector: 'topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss']
})
export class ToppingListComponent implements OnInit {

  choices = [
    'Olives',
    'Tomatoes',
    'Croutons',
    'Pickles',
    'Shrimp',
    'Pepitas',
    'Carrots'
  ];

  @Select(state => state.salad.toppings) toppings$;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  add(name) {
    this.store.dispatch(new AddTopping(name));
  }


}
