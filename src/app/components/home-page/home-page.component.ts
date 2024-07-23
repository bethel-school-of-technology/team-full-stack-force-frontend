import { Component,OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  taskList: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.loadTasks();
  }


  loadTasks() {
    this.taskService.getAllTasks().subscribe((task) => {
      this.taskList = task;
    }, error => {
      console.error('Error fetching tasks:', error);
    });
  }

  createTask(task: Task) {
    this.taskService.createTask(task).subscribe((newTask) => {
      this.taskList.push(newTask);
      console.log('Task created:', newTask);
    }, error => {
      console.error('Error creating task:', error);
    });
  }


  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe(updatedTask => {
      console.log('Task updated:', updatedTask);
      this.loadTasks();
    }, error => {
      console.error('Error updating task:', error);
    });
  }

  deleteTask(taskId: number){
    this.taskService.deleteTask(taskId).subscribe(deleteTask => {
      console.log('Task deleted:', taskId);
      this.loadTasks();
    },error => {
        console.error('Error deleting task:', error);
    });
  }

}
