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
    this.taskService.getAllTasks().subscribe(
      tasks => {
        if (Array.isArray(tasks)) {
          const highestId = Math.max(...tasks.map(task => task.taskId));
          this.newTask.taskId = highestId + 1;
        } else {
          console.error('Expected tasks to be an array, got:', tasks);
          this.newTask.taskId = 1; 
        }
      },
      error => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  createTask() {
    this.newTask.createdDate = new Date();
    // this.newTask.whoCreated = current signed in user logic goes here 
    // this.newTask.assignedTo = assigning logic goes here
    this.newTask.completed = false;
    this.taskService.createTask(this.newTask).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/project")
    })

  }

}
