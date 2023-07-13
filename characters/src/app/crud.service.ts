import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL : string ;
  comic:string;
  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/posts"
    this.comic = "http://localhost:3000/comments"
  }
  signup(task : Task) : Observable<any> { //add task
    console.warn("task in service",task);
    return this.http.post<Task>(this.serviceURL,task);
  }
  login() : Observable<any> { //add task
    return this.http.get<Task>(this.serviceURL)
  }
  update(val:Task) : Observable<any> { //add task
    let editid=localStorage.getItem("edit")
    return this.http.put<Task>(this.serviceURL + "/"+editid,val)
  }
  delete(val:Task) : Observable<any> { //add task
    return this.http.delete<Task>(this.serviceURL + "/"+val)
  }

  comiclist() : Observable<any> { //add task
    return this.http.get<Task>(this.comic)
  }


}
