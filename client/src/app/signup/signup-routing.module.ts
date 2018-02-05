import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { SignupComponent } from './signup.component';

const routes: Routes = Route.withShell([
  { path: 'signup', component: SignupComponent, data: { title: extract('Sign-up') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SignupRoutingModule { }
