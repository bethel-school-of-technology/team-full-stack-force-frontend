import { Task } from "./task";
import { User } from "./user";

export class Project {
    id: any = 0;
    name: string = '';
    members: User[] = [];
    tasks: Task[] = [];
    dueDate?: Date;
    createdDate?: Date;
}
