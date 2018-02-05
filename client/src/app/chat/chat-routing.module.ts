import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ChatComponent } from './chat.component';

import { AuthenticationGuard } from './../core/authentication/authentication.guard';

const routes: Routes = Route.withShell([
  { path: 'chat', component: ChatComponent, data: { title: extract('Start') }, canActivate: [AuthenticationGuard]}
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChatRoutingModule { }
