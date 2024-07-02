import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ITask, Task } from '../index';
import { TasksApiService } from '../../services';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  private readonly initialTaskState: ITask = new Task('', '');
  public newTask: ITask = { ...this.initialTaskState };

  isTaskEdit = signal<boolean>(false);

  constructor(
    private tasksApiService: TasksApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    const taskId: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');

    if (taskId) {
      this.isTaskEdit.set(true);

      this.tasksApiService
        .getTaskById(taskId)
        .subscribe((task) => (this.newTask = task));
    }
  }

  public addTask(): void {
    if (this.isTaskEdit()) {
      const taskId: string | null =
        this.activatedRoute.snapshot.paramMap.get('id');

      this.tasksApiService.editTask(taskId as string, this.newTask).subscribe({
        next: () => {
          this.newTask = { ...this.initialTaskState };
          this.router.navigate(['']);
          this.isTaskEdit.set(false);
        },
      });
    } else {
      this.tasksApiService.addNewTask(this.newTask).subscribe({
        next: () => {
          this.newTask = { ...this.initialTaskState };
          this.router.navigate(['']);
        },
      });
    }
  }

  public navigateToBack(): void {
    this.router.navigate(['']);
  }
}
