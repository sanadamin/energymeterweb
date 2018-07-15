import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelayedComponent } from './delayed.component';

const routes: Routes = [
    {
        path: '', component: DelayedComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DelayedRoutingModule {
}

