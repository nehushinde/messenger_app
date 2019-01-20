import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-msg',
  templateUrl: './text-msg.component.html',
  styleUrls: ['./text-msg.component.css']
})
export class TextMsgComponent implements OnInit {
  messageText: any;
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSend(msg) {
    this.messageEvent.emit(msg);
    this.messageText = '';
  }
  
}
