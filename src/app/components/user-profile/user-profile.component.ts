import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  taskList: Task[] = [];
  userId: number = 0;

  constructor(private taskService: TaskService, private userService: UserService) {}
  

  ngOnInit(): void {
    this.userId = this.userService.getLoggedInUserId();

    this.taskService.getTasksForUser(this.userId).subscribe((response: {tasks:Task[]}) => {
      this.taskList = response.tasks
    })
  }

}
