import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowStockComponent } from './low-stock.component';

describe('LowStockComponent', () => {
  let component: LowStockComponent;
  let fixture: ComponentFixture<LowStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
