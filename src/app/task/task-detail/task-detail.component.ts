import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { ITask } from '../index';
import { TasksService, TasksApiService } from '../../services';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent implements OnInit {
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

    this.tasksApiService
      .getTaskById(taskId!)
      .subscribe((task) => (this.task = task));
  }

  public navigateToBack(): void {
    this.router.navigate(['']);
  }
}
