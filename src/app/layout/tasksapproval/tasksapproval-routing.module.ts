import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksapprovalComponent } from './tasksapproval.component';

const routes: Routes = [
    {
        path: '', component: TasksapprovalComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksApprovalRoutingModule {
}
