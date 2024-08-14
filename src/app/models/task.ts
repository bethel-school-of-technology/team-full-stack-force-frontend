import { User } from "./user";

export class Task {
    taskId?: any; 
    priority?: string;
    title?: string;
    description?: string;
    assignedTo?: number;
    dueDate?: Date;
    createdDate?: Date;
    userId?: number;
    completed?: boolean;
    owner?: User;
    assignee?: User;


    constructor(taskId?: any, priority?: string, title?: string, description?: string, assignedTo?: number, dueDate?: Date, createdDate?: Date, userId?: number, completed?: boolean){

        this.taskId = taskId;
        this.priority = priority;
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.createdDate = createdDate;
        this.userId = userId;
        this.completed = completed;

    }
}
