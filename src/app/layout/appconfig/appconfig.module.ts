import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppconfigComponent } from './appconfig.component';
import {AppconfigRoutingModule} from './appconfig-routing.module'
import { PageHeaderModule } from './../../shared';
import {CdkTableModule} from '@angular/cdk/table'
import {MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatProgressBarModule} from '@angular/material'
@NgModule({
  imports: [CommonModule,AppconfigRoutingModule,NgSelectModule, PageHeaderModule,MatFormFieldModule,MatInputModule,FormsModule,MatOptionModule, MatSelectModule,MatProgressBarModule],
  declarations: [AppconfigComponent]
})
export class AppconfigModule {}
