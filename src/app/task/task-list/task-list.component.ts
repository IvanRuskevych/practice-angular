import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

import { HighlightDirective } from '../../directives';
import { KebabCasePipe } from '../../pipes';
import { TasksService, TasksApiService } from '../../services';
import { ITask } from '../index';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskFormComponent } from '../task-form/task-form.component';

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
    private router: Router,
    private tasksApiService: TasksApiService,
  ) {}

  public ngOnInit(): void {
    this.tasksApiService.getTasks().subscribe((tasks) => {
      this.tasksService.setTasks(tasks);
    });
  }

  public navigateToCreate(): void {
    this.router.navigate(['task-create']);
  }

  public navigateToTask(id: string): void {
    this.router.navigate(['task', id]);
  }

  public navigateToEdit(id: string): void {
    this.router.navigate(['task-edit', id]);
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
