import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { ITask } from '../index';
import { TasksService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    const taskId: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');

    this.task = this.tasksService.getTaskById(taskId as string);
  }

  public navigateToBack(): void {
    this.router.navigate(['']);
  }
}
