import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayContainerComponent } from './container/display-container/display-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayHeaderContainerComponent } from './container/display-header-container/display-header-container.component';

@NgModule({
  declarations: [DisplayContainerComponent, DisplayHeaderContainerComponent],
  imports: [CommonModule, DisplayRoutingModule, SharedModule],
})
export class DisplayModule {}
