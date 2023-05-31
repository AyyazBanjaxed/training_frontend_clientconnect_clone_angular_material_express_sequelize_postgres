import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditorDialogComponent } from './contact-editor-dialog.component';

describe('ContactEditorDialogComponent', () => {
  let component: ContactEditorDialogComponent;
  let fixture: ComponentFixture<ContactEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
