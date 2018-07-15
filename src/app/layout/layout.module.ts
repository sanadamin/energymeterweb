import { NgSelectModule } from '@ng-select/ng-select';
import {SelectModule} from 'ng2-select'
import { TasksComponent } from './tasks/tasks.component';
import { ServerService } from './dashboard/Server.Service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatPaginatorModule, MatOptionModule } from '@angular/material';
import { MatInputModule,MatAutocompleteModule,MatSelectModule,
MatDialogModule } from '@angular/material';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksapprovalComponent, DialogOverviewExampleDialog } from './tasksapproval/tasksapproval.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { RecordComponent } from './record/record.component';
import { ForcemapComponent } from './forcemap/forcemap.component';
import { AppconfigComponent } from './appconfig/appconfig.component';
import { TemplateComponent } from './template/template.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { TaskcontrolComponent } from './taskcontrol/taskcontrol.component';
import { TaskconfigComponent } from './taskconfig/taskconfig.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { TaskeditComponent } from './taskedit/taskedit.component';
import { TasksrecordComponent } from './tasksrecord/tasksrecord.component';
import { PendingtasksComponent } from './pendingtasks/pendingtasks.component';
import { DetailComponent } from './detail/detail.component';
import { DelayedComponent } from './delayed/delayed.component';

@NgModule({
    imports: [
        NgSelectModule,
        CommonModule,
        LayoutRoutingModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        TranslateModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatOptionModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatPaginatorModule,
        
        NgbDropdownModule.forRoot(),

    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, TaskcontrolComponent ],
    providers: []
})
export class LayoutModule {}
