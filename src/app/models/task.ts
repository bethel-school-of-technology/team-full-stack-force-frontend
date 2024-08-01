import { User } from "./user";

export class Task {
    taskId?: any; 
    priority?: string;
    title?: string;
    description?: string;
    assigned?: User;
    dueDate?: Date;
    createdDate?: Date;
    whoCreated?: User;
    completed?: boolean;


    constructor(taskId?: any, priority?: string, title?: string, description?: string, assigned?: User, dueDate?: Date, createdDate?: Date, whoCreated?: User, completed?: boolean){

        this.taskId = taskId;
        this.priority = priority;
        this.title = title;
        this.description = description;
        this.assigned = assigned;
        this.dueDate = dueDate;
        this.createdDate = createdDate;
        this.whoCreated = whoCreated;
        this.completed = completed;

    }
}
