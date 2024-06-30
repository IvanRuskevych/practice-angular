import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { ITask, Task } from '../task.model';

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

  @Output() private onTaskAdded: EventEmitter<ITask> =
    new EventEmitter<ITask>();

  public addTask(): void {
    this.onTaskAdded.emit(this.newTask);

    this.newTask = { ...this.initialTaskState };
  }
}
