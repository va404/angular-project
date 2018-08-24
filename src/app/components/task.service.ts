import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { ListTasks } from './models/task-list.model';
import { CreateTaskModel } from './models/create.model';


const baseUrl = 'https://diginote-12d76.firebaseio.com/tasks/'


@Injectable({
    providedIn: 'root'
})
export class TaskService {

   
    

    constructor( private http : HttpClient ) { }

    listTasks() {
        return this.http.get(`${baseUrl}.json`)
      .pipe(map((res : Response) => {
        const ids = Object.keys(res);
        const tasks : ListTasks[] = [];
        for (const id of ids) {
          tasks.push(new ListTasks(id, res[id].name, 
            res[id].description, res[id].deadline));
        }

        return tasks;
      }));
    }

    createTask (body : CreateTaskModel) {
        return this.http.post(`${baseUrl}/.json`, body)
    }
    viewDetails(id : string) {
        return this.http.get<ListTasks>(`${baseUrl}${id}/.json`)
    }
    editTask(body) {
        return this.http.patch(`${baseUrl}/.json`, body)

    }

    deleteTask(id : string) {
       return this.http.delete(`${baseUrl}${id}/.json`)
    }

   
}
