import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../models/task';


@Component({
  selector: 'app-project-dash',
  templateUrl: './project-dash.component.html',
  styleUrl: './project-dash.component.css'
})
export class ProjectDashComponent implements OnInit{

  taskList: Task[] = [];

  constructor(private taskService: TaskService, private router: Router){}



  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAllTasks().subscribe((task) => {
      this.taskList = task.filter(t => !t.completed);
    }, error => {
      console.error('Error fetching tasks:', error);
    });
  }
  

  navigate(){
    this.router.navigate(['/tasklist'])
  }

  deleteTask(taskId: any){
    this.taskService.deleteTask(taskId).subscribe(deleteTask => {
      console.log('Task deleted succesfully');
      this.loadTasks();
    },error => {
        console.error('Error deleting task:', error);
    });
  }

}
