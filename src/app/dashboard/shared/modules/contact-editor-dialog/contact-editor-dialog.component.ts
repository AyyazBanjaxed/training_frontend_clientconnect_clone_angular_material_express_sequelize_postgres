import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-editor-dialog',
  templateUrl: './contact-editor-dialog.component.html',
  styleUrls: ['./contact-editor-dialog.component.scss'],
})
export class ContactEditorDialogComponent implements OnInit {
  groups: any = [
    { id: 1, title: 'Family' },
    { id: 2, title: 'Friends' },
  ];
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.email],
    groupIds: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  displayFn(group: any): string {
    console.log('group', group);
    return group && group.title ? group.title : 'Select a group';
  }
}
