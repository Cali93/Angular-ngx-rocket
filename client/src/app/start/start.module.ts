import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { PlatformComponent } from './platform/platform.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    StartRoutingModule
  ],
  declarations: [StartComponent, PlatformComponent]
})
export class StartModule { }
