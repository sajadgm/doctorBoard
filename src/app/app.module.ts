import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomErrorHandler } from './core/services/custom-error-handler.service';
import { GlobalHttpErrorHandler } from './core/interceptors/global-http-error-handler.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorHandler,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
