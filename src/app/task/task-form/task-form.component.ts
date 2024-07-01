import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TasksService } from '../../services';
import { ITask, Task } from '../index';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  private readonly initialTaskState: ITask = new Task('', '');
  // public newTask: ITask = new Task(0, '', '');
  public newTask: ITask = { ...this.initialTaskState };

  constructor(
    private tasksService: TasksService,
    private router: Router,
  ) {}

  @Output() private onTaskAdded: EventEmitter<ITask> =
    new EventEmitter<ITask>();

  public addTask(): void {
    // this.onTaskAdded.emit(this.newTask);
    this.tasksService.addTask(this.newTask);

    this.newTask = { ...this.initialTaskState };

    this.router.navigate(['']);
  }

  public navigateToBack(): void {
    this.router.navigate(['']);
  }
}
