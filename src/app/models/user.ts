export class User {
    
firstName: string;
lastName: string;
email: string;
password: string;
userId: number;


constructor(firstName?: string, lastName?: string, email?: string, password?:string, userId?: number){

    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.email = email || '';
    this.password = password || '';
    this.userId = userId || 0;

}
}
