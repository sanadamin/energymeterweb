import { ServerService } from './dashboard/Server.Service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule,MatPaginator } from '@angular/material';
import { MatInputModule,MatAutocompleteModule } from '@angular/material';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
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
        NgbDropdownModule.forRoot(),

    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent ],
    providers: [ServerService]
})
export class LayoutModule {}
