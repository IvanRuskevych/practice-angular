import { Component, Input } from '@angular/core';
import { ITask } from '../task.model';
import { NgIf } from '@angular/common';

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
