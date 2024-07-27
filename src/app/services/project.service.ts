import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // constructor(private http: HttpClient) { }

  // baseUrl: string = "http://localhost:3000/project"; // Update to actual backend address

  // getAllProjects(): Observable<Project[]> {
  //   const headers = { 'Authorization': `Bearer ${localStorage.getItem('tokenKey')}` };
  //   return this.http.get<Project[]>(this.baseUrl, { headers });
  // }

  // getProjectById(projectId: number): Observable<Project> {
  //   const headers = { 'Authorization': `Bearer ${localStorage.getItem('tokenKey')}` };
  //   return this.http.get<Project>(`${this.baseUrl}/${projectId}`, { headers });
  // }

  // createProject(newProject: Project): Observable<Project> {
  //   const headers = { 'Authorization': `Bearer ${localStorage.getItem('tokenKey')}` };
  //   return this.http.post<Project>(this.baseUrl, newProject, { headers });
  // }

  // updateProjectById(id: number, editedProject: Project): Observable<Project> {
  //   const headers = { 'Authorization': `Bearer ${localStorage.getItem('tokenKey')}` };
  //   return this.http.put<Project>(`${this.baseUrl}/${id}`, editedProject, { headers });
  // }

  // deleteProject(projectId: number): Observable<void> {
  //   const headers = { 'Authorization': `Bearer ${localStorage.getItem('tokenKey')}` };
  //   return this.http.delete<void>(`${this.baseUrl}/${projectId}`, { headers });
  // }

}
