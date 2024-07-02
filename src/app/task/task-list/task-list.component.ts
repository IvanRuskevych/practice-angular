import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

import { HighlightDirective } from '../../directives';
import { KebabCasePipe } from '../../pipes';
import { TasksService, TasksApiService } from '../../services';
import { ITask } from '../index';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { UtilService } from '../../shared';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TaskDetailComponent,
    TaskFormComponent,
    NgForOf,
    HighlightDirective,
    KebabCasePipe,
    AsyncPipe,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  public tasks$: Observable<ITask[]> = this.tasksService.tasks$;

  constructor(
    private tasksService: TasksService,
    private tasksApiService: TasksApiService,
    private utilService: UtilService,
  ) {}

  public ngOnInit(): void {
    this.tasksApiService.getTasks().subscribe((tasks) => {
      this.tasksService.setTasks(tasks);
    });
  }

  public navigateToCreate(): void {
    this.utilService.navigateTo(['task-create']);
  }

  public navigateToTask(id: string): void {
    this.utilService.navigateTo(['task', id]);
  }

  public navigateToEdit(id: string): void {
    this.utilService.navigateTo(['task-edit', id]);
  }

  public deleteTask(id: string, event: Event): void {
    event.stopPropagation();

    this.tasksApiService.deleteTask(id).subscribe({
      next: () => {
        this.tasksApiService
          .getTasks()
          .subscribe((tasks) => this.tasksService.setTasks(tasks));
      },
      error: (err) => {
        console.error('Error deleting task', err);
      },
    });
  }
}
