import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComposerDialogComponent } from './message-composer-dialog.component';

describe('MessageComposerDialogComponent', () => {
  let component: MessageComposerDialogComponent;
  let fixture: ComponentFixture<MessageComposerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageComposerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComposerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
