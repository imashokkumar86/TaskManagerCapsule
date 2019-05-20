import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentService } from '../services/parent.service';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskForm:FormGroup;
  // Some variable which we will need
  title: string = "Add";
  task_ID: number = 0;
  parentList:Array<any>=[];
   dp:DatePipe = new DatePipe(navigator.language);
   p:string = 'y-MM-dd'; // YYYY-MM-DD
   dtr:any = this.dp.transform(new Date(),this.p);
  errorMessage: any;
  constructor(private _fb:FormBuilder,private _avRoute: ActivatedRoute, private _router: Router,
    private _taskService:TaskService,private _parentTaskService:ParentService) {
      this.taskForm=this._fb.group({
        task_ID:0,
        parent_ID:0,
        parentTask:'',
        taskDesc:['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
        start_Date:this.dtr,
        end_Date:this.dtr,
        priority:0})
        if(this._avRoute.snapshot.params["id"]){
          this.task_ID = parseInt( this._avRoute.snapshot.params["id"]);
             }
     }
//Save parent 
save(){ 
  //this.submitted = true;
  if(!this.taskForm.valid){
      return;
  }

  this._taskService.saveTask(this.taskForm.value)
  .subscribe(taskId => {
      //alert('Saved Successfully!')
      this._router.navigate(['subtasks', {id: taskId}]);
   }, error => this.errorMessage = error )
}
getParents(){
  this._parentTaskService.getParentTask().subscribe(
      data => this.parentList = data,
      error => this.errorMessage = error
  )
  
}
//Cancel
cancel(){
  this._router.navigate(["subtasks", {id: this.task_ID}]);
}
compareFn(c1: any, c2:any): boolean {     
  return c1 && c2 ? c1.parent_ID === c2.parent_ID : c1 === c2; 
}
  ngOnInit() {
    this.getParents();
    if(this.task_ID > 0){
      this.title = 'Edit';
            this._taskService.getTaskById(this.task_ID)
        .subscribe(data => this.taskForm.setValue(data), error => this.errorMessage = error);
                
    }
   // this.taskForm.setValue(parents=this.parentList);
  }

}
