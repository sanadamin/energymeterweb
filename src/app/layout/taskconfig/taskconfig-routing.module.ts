import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskconfigComponent } from './taskconfig.component';

const routes: Routes = [
    {
        path: '', component: TaskconfigComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskConfigRoutingModule {
}
