import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpErrorHandler } from './global-http-error-handler.interceptor';

export const interceptors: any[] = [
  { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpErrorHandler },
];
