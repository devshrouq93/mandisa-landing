import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptDeliveryComponent } from './egypt-delivery.component';

describe('EgyptDeliveryComponent', () => {
  let component: EgyptDeliveryComponent;
  let fixture: ComponentFixture<EgyptDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgyptDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EgyptDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
