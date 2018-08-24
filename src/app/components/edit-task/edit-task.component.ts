import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateTaskModel } from '../models/create.model';
import { ListTasks } from '../models/task-list.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  bindingModel : ListTasks
  id : string

  constructor(
    private taskService: TaskService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.taskService.viewDetails(this.id).subscribe(data => {
      this.bindingModel = data
    })
    
  }

  edit() {
    const body = {
      [this.id] : this.bindingModel
      
    }
    this.taskService.editTask(body).subscribe((data) => {
      this.toastr.success('Edited successfully!', 'Success')
      this.router.navigate(['/components/list-tasks'])
    })
  }

}
