import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TaskListComponent } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'practice-angular';
}
