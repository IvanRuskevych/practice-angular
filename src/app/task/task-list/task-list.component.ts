import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { ITask, Task } from '../task.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { KebabCasePipe } from '../../pipes/kebab-case.pipe';
import { Observable } from 'rxjs';
import { TasksService } from '../../services/tasks.service';

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
    new Task(1, 'Task 1', 'test ...'),
    new Task(2, 'Test 2', 'test ...'),
    new Task(3, 'Test 3', 'test ...'),
  ];
  // public tasks: ITask[] = [];
  public tasks$: Observable<ITask[]> = this.tasksService.tasks$;
  public selectedTask: ITask | undefined;

  constructor(private tasksService: TasksService) {}

  public ngOnInit(): void {
    // this.tasks.push(
    //   new Task(1, 'Task 1', 'test ...'),
    //   new Task(2, 'Test 2', 'test ...'),
    //   new Task(3, 'Test 3', 'test ...'),
    // );
    this.tasksService.setTasks(this.initialTasks);
  }

  public selectTask(task: ITask): void {
    this.selectedTask = task;
  }

  // public addTask(task: ITask): void {
  //   // this.tasks.push(task);
  //   this.tasksService.addTask(task);
  // }
}
