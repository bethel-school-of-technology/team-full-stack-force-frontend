import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  taskList: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) { }



  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAllTasks().subscribe((tasks) => {
      const incompleteTasks = tasks.filter(t => !t.completed);

      // Define the priority order
      const priorityOrder = ['High', 'Medium', 'Low'];

      // Sort tasks based on priority
      this.taskList = incompleteTasks.sort((a, b) => {
        if (a.priority === undefined) return 1;
        if (b.priority === undefined) return -1;
        return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
      });
    }, error => {
      console.error('Error fetching tasks:', error);
    });
  }

  editTask(taskId: any) {
    this.router.navigate(['/edit', taskId])
  }

  deleteTask(taskId: any) {
    this.taskService.deleteTask(taskId).subscribe(deleteTask => {
      console.log('Task deleted succesfully');
      this.loadTasks();
    }, error => {
      console.error('Error deleting task:', error);
    });
  }

}

