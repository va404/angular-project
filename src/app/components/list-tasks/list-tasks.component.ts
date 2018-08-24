import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListTasks } from '../models/task-list.model';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  tasks: Observable<ListTasks[]>
  id: string


  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit() {

    this.tasks = this.taskService.listTasks()


  }




}


