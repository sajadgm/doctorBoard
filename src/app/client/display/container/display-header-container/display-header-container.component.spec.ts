import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHeaderContainerComponent } from './display-header-container.component';

describe('DisplayHeaderContainerComponent', () => {
  let component: DisplayHeaderContainerComponent;
  let fixture: ComponentFixture<DisplayHeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHeaderContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
