import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderContainerComponent } from './container/header-container/header-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainContainerComponent } from './container/main-container/main-container.component';

@NgModule({
  declarations: [HeaderContainerComponent, MainContainerComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
