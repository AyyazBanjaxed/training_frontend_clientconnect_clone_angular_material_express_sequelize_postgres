import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { GroupsService } from '../../services/groups.service';
import {
  DialogRole,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-editor-dialog',
  templateUrl: './contact-editor-dialog.component.html',
  styleUrls: ['./contact-editor-dialog.component.scss'],
})
export class ContactEditorDialogComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('groupInput') groupInput?: ElementRef<HTMLInputElement>;
  groups: any = [];
  groupInputCtrl = new FormControl();
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.email],
    groups: this.fb.array([]),
    id: [''],
  });
  filteredGroups: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private groupsService: GroupsService,
    private contactsService: ContactsService,
    private dialog: MatDialog,
    // receive data
    @Inject(MAT_DIALOG_DATA) public contactToEdit: any
  ) {
    if (this.contactToEdit) {
      this.form.patchValue(this.contactToEdit);
      this.contactToEdit.groups.forEach((group: any) => {
        (this.form.get('groups') as FormArray).push(this.fb.control(group));
      });
    }

    this.loadGroups();
    this.filteredGroups = this.groupInputCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.groups.slice()
      )
    );
  }

  loadGroups() {
    this.groupsService.getGroups().subscribe((groups: any) => {
      this.groups = groups;
    });
  }

  ngOnInit(): void {}

  private _filter(value: any): string[] {
    let filterValue = '';
    if (typeof value !== 'string') filterValue = value.title.toLowerCase();
    else filterValue = value.toLowerCase();

    return this.groups.filter((group: any) =>
      group.title.toLowerCase().includes(filterValue)
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      (this.form.get('groups') as FormArray).push(
        this.fb.control({ title: value })
      );
    }

    // Clear the input value
    event.chipInput!.clear();

    this.groupInputCtrl.setValue(null);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    (this.form.get('groups') as FormArray).push(
      this.fb.control(event.option.value)
    );
    this.groupInputCtrl.setValue(null);
    if (this.groupInput) this.groupInput.nativeElement.value = '';
  }

  remove(index: number): void {
    if (index >= 0) {
      (this.form.get('groups') as FormArray).removeAt(index);
    }
  }

  submit() {
    this.contactsService
      .createContacts(this.form.value)
      .subscribe((res: any) => {
        this.dialog.closeAll();
      });
  }
}
