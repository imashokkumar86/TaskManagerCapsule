import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import {Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:Array<any>=[];
  // Add a variable to hold the value
  currentId: number = 0;
  errorMessage: any;
  constructor(private _taskService:TaskService, private _router: Router,private _avRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this._avRoute.snapshot.params["id"]){
      this.currentId = parseInt(this._avRoute.snapshot.params["id"]);
     }
this.getTasks();
  }
  getTasks(){
    this._taskService.getTask().subscribe(
        data => this.tasks = data,
        error => this.errorMessage = error
    )
  }
  add(){
    this._router.navigate(['task/add']);
}
edit(id){
    this._router.navigate(['task/edit/'+ id])
}
}
