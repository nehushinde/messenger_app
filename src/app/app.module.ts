import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { InfobarComponent } from './components/infobar/infobar.component';
import { TextMsgComponent } from './components/text-msg/text-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    InfobarComponent,
    TextMsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
