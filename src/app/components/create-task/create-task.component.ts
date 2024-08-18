import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit{

  newTask: Task = new Task();
  userList: User[] = [];
  
  constructor (private userService: UserService, private taskService: TaskService, private router: Router) {}

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
    this.userService.getAllUsers().subscribe(users => {
      this.userList = users;
      console.log(users);
    })
  }

  createTask() {
    this.newTask.createdDate = new Date();
    this.newTask.completed = false;
    this.taskService.createTask(this.newTask).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/projects")
    })

  }

}
