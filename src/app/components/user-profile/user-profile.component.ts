import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  taskList: Task[] = [];
  incompleteTasks: Task[] = [];
  completedTasks: Task[] = [];
  userId: number = 0;

  constructor(private taskService: TaskService, private userService: UserService, private router: Router){}
  

  ngOnInit(): void {
    this.loadUserTasks();
  }

  loadUserTasks(){
    this.userId = this.userService.getLoggedInUserId();

    this.taskService.getTasksForUser(this.userId).subscribe((response: {tasks:Task[]}) => {
      this.taskList = response.tasks
      this.incompleteTasks = this.taskList.filter(task => !task.completed);
      this.completedTasks = this.taskList.filter(task => task.completed);
    })
  }

  editTask(taskId: any){
    this.router.navigate(['/edit', taskId])
  }

  deleteTask(taskId: any){
    this.taskService.deleteTask(taskId).subscribe(deleteTask => {
      console.log('Task deleted succesfully');
      this.loadUserTasks();
    },error => {
        console.error('Error deleting task:', error);
    });
  }

  toggleComplete(taskId: number) {
    this.taskService.getTaskById(taskId).subscribe(task => {
      if (task) {
        task.completed = !task.completed;
        this.taskService.updateTaskById(taskId, task).subscribe(() => {
          console.log('Task status updated');
  
          const index = this.taskList.findIndex(t => t.taskId === taskId);
          if (index !== -1) {
            this.taskList[index] = task; 
          }

          this.incompleteTasks = this.taskList.filter(t => !t.completed);
          this.completedTasks = this.taskList.filter(t => t.completed);
        }, error => {
          console.error('Error updating task status:', error);
        });
      }
    }, error => {
      console.error('Error fetching task:', error);
    });
  }


}
