import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppconfigComponent } from './appconfig.component';

const routes: Routes = [
    {
        path: '', component: AppconfigComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppconfigRoutingModule {
}
