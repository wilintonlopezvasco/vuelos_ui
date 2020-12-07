import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajeroFormComponent } from './pasajero-form.component';

describe('PasajeroFormComponent', () => {
  let component: PasajeroFormComponent;
  let fixture: ComponentFixture<PasajeroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajeroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
