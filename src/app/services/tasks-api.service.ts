import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TasksApiService {
  private readonly apiUrl: string =
    'https://6682af804102471fa4c7d413.mockapi.io/tasks/';

  constructor(private http: HttpClient) {}

  public getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  public getTaskById(id: string): Observable<ITask> {
    return this.http.get<ITask>(`${this.apiUrl}${id}`);
  }

  public addNewTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task);
  }

  public deleteTask(id: string): Observable<void> {
    // @ts-ignore
    return this.http.delete(`${this.apiUrl}${id}`);
  }

  public editTask(id: string, payload: ITask): Observable<void> {
    // @ts-ignore
    return this.http.put(`${this.apiUrl}${id}`, payload);
  }
}
