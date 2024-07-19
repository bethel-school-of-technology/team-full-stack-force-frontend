import { User } from "./user";

export class Task {

    taskId: number;
    priority: number;
    title: string;
    assigned: User;
    dueDate: Date;
    completed: boolean;


    constructor(taskId: number, priority: number, title: string, assigned: User, dueDate: Date, completed: boolean){

        this.taskId = taskId;
        this.priority = priority;
        this.title = title;
        this.assigned = assigned;
        this.dueDate = dueDate;
        this.completed = completed;

    }
}
