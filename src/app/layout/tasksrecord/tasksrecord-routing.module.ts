import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksrecordComponent } from './tasksrecord.component';

const routes: Routes = [
    {
        path: '', component: TasksrecordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRecordRoutingModule {
}
