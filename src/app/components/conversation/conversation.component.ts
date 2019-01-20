import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  senderMessage: string;
  show = false;

  constructor() { }

  ngOnInit() {
  }

  receiveMessage(event) {
    this.senderMessage = event;
    setTimeout( () => {
      this.check()
    }
    ,2000);
  }

  check() {
    if (this.senderMessage !== '') {
      this.show = true;
    }
  }
}
