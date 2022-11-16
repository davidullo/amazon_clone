import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavDirectionComponent } from './side-nav-direction.component';

describe('SideNavDirectionComponent', () => {
  let component: SideNavDirectionComponent;
  let fixture: ComponentFixture<SideNavDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
