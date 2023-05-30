import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss'],
})
export class MessageBubbleComponent implements OnInit {
  @Input() message: any;
  @Input() contact: any;
  @Input() number: any;
  constructor() {}

  ngOnInit(): void {}
}
