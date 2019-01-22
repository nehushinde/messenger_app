import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'messenger-app';

  senderMessage: string;
  show = false;
  
  isModalShown = true;
  @ViewChild('modal') modal: ModalDirective

  closeModal() {
    this.isModalShown = false;
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
