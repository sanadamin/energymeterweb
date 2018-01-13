import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewtaskComponent } from './newtask.component';
import {NewtaskRoutingModule} from './newtask-routing.module'
import { PageHeaderModule } from './../../shared';
import {CdkTableModule} from '@angular/cdk/table'
import {MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatProgressBarModule} from '@angular/material'
@NgModule({
  imports: [CommonModule,NewtaskRoutingModule, PageHeaderModule,MatFormFieldModule,MatInputModule,FormsModule,MatOptionModule, MatSelectModule,MatProgressBarModule],
  declarations: [NewtaskComponent]
})
export class NewTaskModule {}
