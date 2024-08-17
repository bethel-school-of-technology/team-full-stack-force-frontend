import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {

  id: any = 0;

  currentTask: Task = new Task();

  constructor (private taskService: TaskService, private actRoute: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    const currentId = this.actRoute.snapshot.paramMap.get("taskId") ?? "1";
    this.id = parseInt(currentId);
    console.log(currentId)
    this.taskService.getTaskById(this.id).subscribe(foundTask => {
      console.log(foundTask)
      this.currentTask = foundTask;
    })
    

  }

  editTask() {
    this.taskService.updateTaskById(this.id, this.currentTask).subscribe(edittedTask => {
      this.router.navigateByUrl("/profile")
    })
  }
}
