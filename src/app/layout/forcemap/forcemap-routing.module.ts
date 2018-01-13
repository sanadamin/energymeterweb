import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForcemapComponent } from './forcemap.component';

const routes: Routes = [
    {
        path: '', component: ForcemapComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewtaskRoutingModule {
}
