import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { StartComponent } from './start.component';

const routes: Routes = Route.withShell([
  { path: 'start', component: StartComponent, data: { title: extract('Start') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StartRoutingModule { }
