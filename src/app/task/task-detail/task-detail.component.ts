import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { ITask } from '../index';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent {
  @Input() public selectedTask: ITask | undefined;
}
