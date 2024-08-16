import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/tasks" //update to actual backend address
  tokenKey: string = "myDevToken"; 


  
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl)
  }

  getTaskById(taskId: any): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${taskId}`);
  }

  getTasksForUser(userId: number): Observable<{tasks:Task[]}> {
    return this.http.get<{tasks:Task[]}>(`${this.baseUrl}/user/${userId}`);
  }

  createTask(newTask: Task): Observable<Task> {
    let reqHeaders = 
    {
      Authorization: `${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post<Task>(this.baseUrl, newTask, { headers: reqHeaders });
  }

  updateTaskById(id: number, edittedTask: Task): Observable<Task>  {
    let reqHeaders = 
    {
      Authorization: `${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put<Task>(`${this.baseUrl}/${id}`, edittedTask, { headers: reqHeaders });
  }

  deleteTask(taskId: number): Observable<void> {
    let reqHeaders = 
    {
      Authorization: `${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.delete<void>(`${this.baseUrl}/${taskId}`, { headers: reqHeaders });
  }
}
