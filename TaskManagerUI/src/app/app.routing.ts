import { Routes, RouterModule } from '@angular/router';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentComponent } from './parent/parent.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component'; 
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
   // { path: '', redirectTo: '/parent-list', pathMatch: 'full' },
    { path: 'parenttasks', component: ParentListComponent },
    { path: 'subtasks', component: TaskListComponent },
    { path: "parent/add", component: ParentComponent },
    { path: "parent/edit/:id", component: ParentComponent },
    { path: "task/add", component: TaskComponent },
    { path: "task/edit/:id", component: TaskComponent }

   // { path: '**', component: PageNotFoundComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);