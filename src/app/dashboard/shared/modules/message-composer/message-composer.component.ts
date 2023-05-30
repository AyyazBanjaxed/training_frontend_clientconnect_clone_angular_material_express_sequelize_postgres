import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message-composer',
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.scss'],
})
export class MessageComposerComponent implements OnInit {
  @Output() onSubmit: any = new EventEmitter();
  form = this.fb.group({
    message: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
