import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private readonly _tasks$: BehaviorSubject<ITask[]> = new BehaviorSubject<
    ITask[]
  >([]);
  public readonly tasks$ = this._tasks$.asObservable();

  // constructor() {}

  get tasks(): ITask[] {
    return this._tasks$.getValue();
  }

  private set tasks(tasks: ITask[]) {
    this._tasks$.next(tasks);
  }

  public setTasks(tasks: ITask[]): void {
    this.tasks = tasks;
  }

  public addTask(newTask: ITask): void {
    this.tasks = [...this.tasks, newTask];
  }
}
