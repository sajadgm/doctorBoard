import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandler implements ErrorHandler {
  constructor(private _snackbar: MatSnackBar, private _ngZone: NgZone) {}

  handleError(error: unknown): void {
    this._ngZone.run(() => {
      this._snackbar.open('مشکلی رخ داده', 'بستن', {
        duration: 2000,
      });
    });
    console.warn('caught by Custom Error Handler : ', error);
  }
}
