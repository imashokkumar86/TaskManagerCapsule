import { Component, OnInit } from '@angular/core';
import { ParentService } from '../services/parent.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {
parents:Array<any>=[];
// Add a variable to hold the value
currentId: number = 0;
errorMessage: any;
  constructor(private _parentTaskService:ParentService, private _router: Router,private _avRoute: ActivatedRoute)
   // private _router: Router,
    //private _activatedRoute: ActivatedRoute) 
    {
    
   }
   add(){
    this._router.navigate(['parent/add']);
}
edit(id){
    this._router.navigate(['parent/edit/'+ id])
}

  ngOnInit() {
    if(this._avRoute.snapshot.params["id"]){
           this.currentId = parseInt(this._avRoute.snapshot.params["id"]);
          }
    this.getParents();
  }
  getParents(){
    this._parentTaskService.getParentTask().subscribe(
        data => this.parents = data,
        error => this.errorMessage = error
    )
}
//delete parent task service
delete(id){
  var ans = confirm("Do you want to delete parent task with Id: " + id);
  if(ans){
    this._parentTaskService.deleteParentTask(id)
     .subscribe(  data=> {
       var index = this.parents.findIndex(x=>x.id == id);
       this.parents.splice(index, 1);
     }, error=> this.errorMessage = error )
  }
}
}
