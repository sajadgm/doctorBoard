import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromInterceptors from './interceptors';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [...fromInterceptors.interceptors],
})
export class CoreModule {}
