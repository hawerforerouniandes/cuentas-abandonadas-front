import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAtomComponent } from './card-atom.component';

describe('CardAtomComponent', () => {
  let component: CardAtomComponent;
  let fixture: ComponentFixture<CardAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
