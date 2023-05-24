import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMenuContentComponent } from './notification-menu-content.component';

describe('NotificationMenuContentComponent', () => {
  let component: NotificationMenuContentComponent;
  let fixture: ComponentFixture<NotificationMenuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationMenuContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
