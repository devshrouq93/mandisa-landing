import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandisaProductsComponent } from './mandisa-products.component';

describe('MandisaProductsComponent', () => {
  let component: MandisaProductsComponent;
  let fixture: ComponentFixture<MandisaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandisaProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MandisaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
