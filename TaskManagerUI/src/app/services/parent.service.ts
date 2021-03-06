import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class ParentService {
  baseUrl:string='http://localhost:60270/api/Parent/'
  constructor(private _http:Http) { }
  getParentTask(){
    return this._http.get(this.baseUrl+'')
    .map((response:Response)=>response.json())
    .catch(this._errorHandler);
  }
  _errorHandler(error:Response){
    debugger;
    console.log(error);
    return Observable.throw(error || "Internal server error");
  }
  // add a method in customer.service.ts file like this:  
getParentTaskById(id){
  return this._http.get(this.baseUrl + id)
          .map((response: Response) => response.json())
          .catch(this._errorHandler);
}
saveParent(parent){
  return this._http.post(this.baseUrl, parent)
          .map((response: Response) => response.json())
          .catch(this._errorHandler)
}
//delete parent task
deleteParentTask(id){
  return this._http.delete(this.baseUrl+ id)
            .map((response:Response) =>  response.json())
            .catch(this._errorHandler)
}

}
