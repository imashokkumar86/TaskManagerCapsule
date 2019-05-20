import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import {ParentService} from './services/parent.service';
import {TaskService} from './services/task.service';
import { MenuComponent } from './menu.component';
import { CONST_ROUTING } from './app.routing';
import { ParentComponent } from './parent/parent.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';


//const MAINMENU_ROUTES: Routes = [
  //full : makes sure the path is absolute path
 // { path: '', redirectTo: '/parent-list', pathMatch: 'full' },
  //{ path: 'parent-list', component: ParentListComponent }
//];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ParentListComponent,
    ParentComponent,
    TaskListComponent,
    TaskComponent
     ],

  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [ParentService,TaskService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
