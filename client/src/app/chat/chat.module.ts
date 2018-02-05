import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { SideinfosComponent } from './sideinfos/sideinfos.component';
import { MessageinputComponent } from './messageinput/messageinput.component';
import { MessagefeedComponent } from './messagefeed/messagefeed.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    ChatRoutingModule
  ],
  declarations: [ChatComponent, SideinfosComponent, MessageinputComponent, MessagefeedComponent]
})
export class ChatModule { }
