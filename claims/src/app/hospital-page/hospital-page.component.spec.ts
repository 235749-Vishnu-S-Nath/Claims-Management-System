import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPageComponent } from './hospital-page.component';

describe('HospitalPageComponent', () => {
  let component: HospitalPageComponent;
  let fixture: ComponentFixture<HospitalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
