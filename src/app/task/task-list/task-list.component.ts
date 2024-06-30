import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { ITask, Task } from '../task.model';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TaskDetailComponent,
    TaskFormComponent,
    NgForOf,
    HighlightDirective,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  public tasks: ITask[] = [];
  public selectedTask: ITask | undefined;

  public ngOnInit(): void {
    this.tasks.push(
      new Task(1, 'Task 1', 'test ...'),
      new Task(2, 'Test 2', 'test ...'),
      new Task(3, 'Test 3', 'test ...'),
    );
  }

  public selectTask(task: ITask): void {
    this.selectedTask = task;
  }

  public addTask(task: ITask): void {
    this.tasks.push(task);
  }
}
