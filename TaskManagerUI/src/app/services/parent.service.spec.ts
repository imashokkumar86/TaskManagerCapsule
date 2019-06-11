import { TestBed } from '@angular/core/testing';
import {Http, Response} from '@angular/http';
import { ParentService } from './parent.service';

describe('Parent Service Tests', () => {
    let _http=Http;
    let _parentTaskService=ParentService;
    //let parentService = new ParentService(_http);
   var parents=[]= [
        {
            "parent_ID": 1,
            "parent_Task":"Test Parent1"
        },
        {
            "parent_ID": 1,
            "parent_Task":"Test Parent2"
        },
        {
            "parent_ID": 1,
            "parent_Task":"Test Parent3"
        }];

        _parentTaskService.data = parents;
    it('returns a list of employees', () => {
        _parentTaskService.getParentTask()
            .then(employees => {
                expect(employees.length).toBeDefined();
                expect(employees.length).toBe(3);
            });
    });
});