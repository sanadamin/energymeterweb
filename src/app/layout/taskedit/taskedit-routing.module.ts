import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskeditComponent } from './taskedit.component';

const routes: Routes = [
    {
        path: '', component: TaskeditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskEditRoutingModule {
}
