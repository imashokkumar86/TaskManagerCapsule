import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';

import {
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

describe('component:ParentComponent',()=>{
  let component:ParentComponent;
  beforeEach(()=>{
TestBed.configureTestingModule({
declarations:[ParentComponent],
imports:[ReactiveFormsModule]
});
const fixture=TestBed.createComponent(ParentComponent);
component=fixture.componentInstance;

  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
});
it('should create a FormGroup comprised of FormControls', () => {
  component.ngOnInit();
  expect(component.parentForm instanceof FormGroup).toBe(true);
});
})
