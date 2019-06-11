import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ParentService } from '../services/parent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dynamic-form',
  //selector: 'app-parent',
  //templateUrl: './parent.component.html',
  template: '',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
parentForm:FormGroup;
// Some variable which we will need
title: string = "Add";
parent_ID: number = 0;

errorMessage: any;
  constructor(private _fb:FormBuilder,private _avRoute: ActivatedRoute, private _router: Router,
    private _parentTaskService:ParentService) {
    this.parentForm=this._fb.group({
      parent_ID:0,
      parent_Task:['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]]  
    })

    if(this._avRoute.snapshot.params["id"]){
      this.parent_ID = parseInt( this._avRoute.snapshot.params["id"]);
         }
   }
   //Save parent 
   save(){ 
    //this.submitted = true;
    if(!this.parentForm.valid){
        return;
    }

    this._parentTaskService.saveParent(this.parentForm.value)
    .subscribe(parentId => {
        //alert('Saved Successfully!')
        this._router.navigate(['parenttasks', {id: parentId}]);
     }, error => this.errorMessage = error )
}
//Cancel
cancel(){
  this._router.navigate(["parenttasks", {id: this.parent_ID}]);
}

   get name() { return this.parentForm.get('parent_Task'); }
  ngOnInit() {
    if(this.parent_ID > 0){
      this.title = 'Edit';
            this._parentTaskService.getParentTaskById(this.parent_ID)
        .subscribe(data => this.parentForm.setValue(data), error => this.errorMessage = error);
                
    }
  }
   
}
 

