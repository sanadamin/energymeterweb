import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewtaskComponent } from './newtask.component';

const routes: Routes = [
    {
        path: '', component: NewtaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewtaskRoutingModule {
}
