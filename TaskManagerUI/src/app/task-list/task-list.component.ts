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
//delete parent task service
delete(id){
  var ans = confirm("Do you want to delete task with Id: " + id);
  if(ans){
    this._taskService.deleteTask(id)
     .subscribe(  data=> {
       var index = this.tasks.findIndex(x=>x.id == id);
       this.tasks.splice(index, 1);
     }, error=> this.errorMessage = error )
  }
}
}
