import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatetaskComponent } from './updatetask.component';

const routes: Routes = [
    {
        path: '', component: UpdatetaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdateTaskRoutingModule {
}
