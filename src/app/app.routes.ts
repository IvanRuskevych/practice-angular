import { Routes } from '@angular/router';
import { TaskListComponent } from './task';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'task-create', component: TaskFormComponent },
  { path: 'task-edit/:id', component: TaskFormComponent },
  { path: 'task/:id', component: TaskDetailComponent },
];
