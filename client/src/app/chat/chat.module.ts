import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    ChatRoutingModule
  ],
  declarations: [ChatComponent, FeedComponent, MessageComponent, UserItemComponent, UserListComponent]
})
export class ChatModule { }
