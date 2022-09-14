import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ITask } from 'src/app/admin/main/container/main-container/main-container.component';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http
      .get<ITask[]>(
        `https://jsonplaceholder.typicode.com/todoss?_start=0&_limit=3`
      )
      .pipe(
        catchError(() => {
          return throwError(() => {
            return new Error('Error');
          });
        })
      );
  }

  addTaskSync(task: ITask): ITask | never {
    if (task.id === 0) {
      throw Error(`Value zero (0) is not allowed as a task id`);
    }
    return task;
  }
}
