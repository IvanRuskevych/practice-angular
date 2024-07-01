import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';

import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { ITask, Task } from '../index';
import { HighlightDirective } from '../../directives';
import { KebabCasePipe } from '../../pipes';
import { Observable } from 'rxjs';
import { TasksService } from '../../services';
import { Router } from '@angular/router';

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
  private initialTasks: ITask[] = [
    new Task('Task 1', 'test ...'),
    new Task('Test 2', 'test ...'),
    new Task('Test 3', 'test ...'),
  ];
  // public tasks: ITask[] = [];
  public tasks$: Observable<ITask[]> = this.tasksService.tasks$;
  // public selectedTask: ITask | undefined;

  constructor(
    private tasksService: TasksService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    // this.tasks.push(
    //   new Task(1, 'Task 1', 'test ...'),
    //   new Task(2, 'Test 2', 'test ...'),
    //   new Task(3, 'Test 3', 'test ...'),
    // );

    this.tasksService.setTasks(this.initialTasks); // comment will show created Tasks
  }

  // public selectTask(task: ITask): void {
  //   this.selectedTask = task;
  // }

  // public addTask(task: ITask): void {
  //   // this.tasks.push(task);
  //   this.tasksService.addTask(task);
  // }

  public navigateToCreate(): void {
    this.router.navigate(['task-create']);
  }

  public navigateToTask(id: string): void {
    this.router.navigate(['task', id]);
  }
}
