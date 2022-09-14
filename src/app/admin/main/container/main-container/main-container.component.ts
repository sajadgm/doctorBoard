import { FakeDataService } from './../../../../core/services/fake-data.service';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

export interface ITask {
  id: number;
  title: string;
}

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  tasks$!: Observable<ITask[]>;
  error: Error | null = null;

  constructor(private _fakeDataService: FakeDataService) {}

  ngOnInit(): void {
    this.tasks$ = this._fakeDataService.load().pipe(
      tap({
        error: (err) => (this.error = err),
      }),
      catchError((err) => of([]))
    );
  }

  onError() {
    try {
      this._fakeDataService.addTaskSync({ id: 0, title: 'New Task' });
    } catch (error) {
      if (error instanceof Error) {
        this.error = error;
        throw error;
      }
    }
  }
}
