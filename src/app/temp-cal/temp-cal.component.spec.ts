import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCalComponent } from './temp-cal.component';

describe('TempCalComponent', () => {
  let component: TempCalComponent;
  let fixture: ComponentFixture<TempCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempCalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
