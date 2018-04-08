import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingListComponent } from './topping-list.component';

describe('ToppingListComponent', () => {
  let component: ToppingListComponent;
  let fixture: ComponentFixture<ToppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
