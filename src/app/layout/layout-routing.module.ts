import { NewtaskComponent } from './newtask/newtask.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
            { path: 'tasksapproval', loadChildren: './tasksapproval/tasksapproval.module#TasksApprovalModule' },
            { path: 'newtask', loadChildren: './newtask/newtask.module#NewTaskModule' },
            {path:'record',loadChildren:
            './record/record.module#RecordModule'},
            {path: 'map',loadChildren:
            './forcemap/forcemap.module#ForceMapModule'},
            {path: 'config',loadChildren:
            './appconfig/appconfig.module#AppconfigModule'},
            {path: 'template',loadChildren:
            './template/template.module#TemplateModule'},
            {path: 'owner',loadChildren:
            './owner/owner.module#OwnerModule'},
            {path: 'divisions',loadChildren:
            './divisions/divisions.module#DivisionModule'},
            {path: 'taskconfig',loadChildren:
            './taskconfig/taskconfig.module#TaskConfigModule'},
            {path: 'updatetask',loadChildren:
            './updatetask/updatetask.module#UpdateTaskModule'}

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
