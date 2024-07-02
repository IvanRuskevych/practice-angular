import { Routes } from '@angular/router';

import {
  TaskListComponent,
  TaskFormComponent,
  TaskDetailComponent,
} from './task';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task-create', component: TaskFormComponent },
  { path: 'task-edit/:id', component: TaskFormComponent },
  { path: 'task/:id', component: TaskDetailComponent },
];
