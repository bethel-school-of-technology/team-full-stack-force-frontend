import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks() {

  }

  getTaskById(TaskId: number) {

  }

  createTask(newTask: Task) {

  }

  updateTask(updatedTask: Task) {

  }

  deleteTask(taskId: number) {

  }
}
