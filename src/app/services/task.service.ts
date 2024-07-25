import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/task" //update to actual backend address

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl)
  }

  getTaskById(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${taskId}`);
  }

  createTask(newTask: Task): Observable<Task> {
    if (typeof newTask.taskId !== 'string') {
      newTask.taskId = newTask.taskId?.toString();
    }
    return this.http.post<Task>(this.baseUrl, newTask);
  }

  updateTask(updatedTask: Task): Observable<Task>  {
    return this.http.put<Task>(`${this.baseUrl}/${updatedTask.taskId}`, updatedTask);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${taskId}`);
  }
}
