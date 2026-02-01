import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMandisaComponent } from './why-mandisa.component';

describe('WhyMandisaComponent', () => {
  let component: WhyMandisaComponent;
  let fixture: ComponentFixture<WhyMandisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMandisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyMandisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
