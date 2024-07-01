import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  private readonly initialTaskState: ITask = new Task(0, '', '');
  // public newTask: ITask = new Task(0, '', '');
  public newTask: ITask = { ...this.initialTaskState };

  constructor(private tasksService: TasksService) {}

  @Output() private onTaskAdded: EventEmitter<ITask> =
    new EventEmitter<ITask>();

  public addTask(): void {
    // this.onTaskAdded.emit(this.newTask);
    this.tasksService.addTask(this.newTask);

    this.newTask = { ...this.initialTaskState };
  }
}
