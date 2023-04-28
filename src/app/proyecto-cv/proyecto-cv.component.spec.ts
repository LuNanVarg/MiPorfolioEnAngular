import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoCVComponent } from './proyecto-cv.component';

describe('ProyectoCVComponent', () => {
  let component: ProyectoCVComponent;
  let fixture: ComponentFixture<ProyectoCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
