import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { ITask } from '../index';
import { TasksService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksApiService } from '../../services/tasks-api.service';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent implements OnInit {
  // @Input() public selectedTask: ITask | undefined;

  public task?: ITask;

  constructor(
    private tasksService: TasksService,
    private tasksApiService: TasksApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    const taskId: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');

    this.task = this.tasksService.getTaskById(taskId as string);

    // // using getTasks()
    // this.tasksApiService.getTasks().subscribe((tasks) => {
    //   this.task = tasks.find((t) => t.id === taskId);
    // });

    // using getTasks()
    this.tasksApiService
      .getTaskById(taskId!)
      .subscribe((task) => (this.task = task));
  }

  public navigateToBack(): void {
    this.router.navigate(['']);
  }
}
