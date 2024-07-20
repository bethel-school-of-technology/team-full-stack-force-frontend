import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit{

  newTask: Task = new Task();
  
  constructor (private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    
  }

  createTask() {

  }

}
