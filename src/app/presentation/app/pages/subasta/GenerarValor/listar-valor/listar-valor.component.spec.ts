import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarValorComponent } from './listar-valor.component';

describe('ListarValorComponent', () => {
  let component: ListarValorComponent;
  let fixture: ComponentFixture<ListarValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarValorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
