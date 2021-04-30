import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIndicatorComponent } from './list-indicator.component';

describe('ListIndicatorComponent', () => {
  let component: ListIndicatorComponent;
  let fixture: ComponentFixture<ListIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
