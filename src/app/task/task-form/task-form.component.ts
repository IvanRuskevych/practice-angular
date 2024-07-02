import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ITask, Task } from '../index';
import { TasksApiService } from '../../services';
import { UtilService } from '../../shared';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  private readonly initialTaskState: ITask = new Task('', '');
  private taskId: string | null = null;
  public newTask: ITask = { ...this.initialTaskState };

  isTaskEdit = signal<boolean>(false);

  constructor(
    private tasksApiService: TasksApiService,
    private utilService: UtilService,
  ) {}

  public ngOnInit(): void {
    this.taskId = this.utilService.getTaskIdInParams();
    console.log('this.taskId', this.taskId);

    if (this.taskId) {
      this.isTaskEdit.set(true);

      this.tasksApiService
        .getTaskById(this.taskId)
        .subscribe((task) => (this.newTask = task));
    }
  }

  public handleFormSubmit(): void {
    if (this.isTaskEdit()) {
      this.editTask();
    } else {
      this.addTask();
    }
  }

  public addTask(): void {
    this.tasksApiService.addNewTask(this.newTask).subscribe({
      next: () => {
        this.newTask = { ...this.initialTaskState };
        this.utilService.navigateTo(['']);
      },
    });
  }

  public editTask(): void {
    this.tasksApiService.editTask(this.taskId!, this.newTask).subscribe({
      next: () => {
        this.newTask = { ...this.initialTaskState };
        this.utilService.navigateTo(['']);
        this.isTaskEdit.set(false);
      },
    });
  }

  public navigateToBack(): void {
    this.utilService.navigateTo(['']);
  }
}
