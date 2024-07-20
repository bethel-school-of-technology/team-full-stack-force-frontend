import { User } from "./user";

export class Task {
    taskId?: number; //This may need to be changed to string
    priority?: number;
    title?: string;
    description?: string;
    assigned?: User;
    dueDate?: Date;
    completed?: boolean;


    constructor(taskId?: number, priority?: number, title?: string, description?: string, assigned?: User, dueDate?: Date, completed?: boolean){

        this.taskId = taskId;
        this.priority = priority;
        this.title = title;
        this.description = description;
        this.assigned = assigned;
        this.dueDate = dueDate;
        this.completed = completed;

    }
}
