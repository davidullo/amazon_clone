import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiles2Component } from './tiles2.component';

describe('Tiles2Component', () => {
  let component: Tiles2Component;
  let fixture: ComponentFixture<Tiles2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tiles2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiles2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
