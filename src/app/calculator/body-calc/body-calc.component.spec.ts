import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCalcComponent } from './body-calc.component';

describe('BodyCalcComponent', () => {
  let component: BodyCalcComponent;
  let fixture: ComponentFixture<BodyCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
