import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLocaisComponent } from './table-locais.component';

describe('TableLocaisComponent', () => {
  let component: TableLocaisComponent;
  let fixture: ComponentFixture<TableLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLocaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
