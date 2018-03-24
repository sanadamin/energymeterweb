import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpdatetaskComponent } from './updatetask.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateTaskRoutingModule} from './updatetask-routing.module'
import { PageHeaderModule } from './../../shared';
import {CdkTableModule} from '@angular/cdk/table'
import { NgSelectModule } from '@ng-select/ng-select';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule,MatCommonModule
} from '@angular/material';
@NgModule({
  imports: [CommonModule, MatCommonModule,UpdateTaskRoutingModule, PageHeaderModule
  ,MatTableModule,MatPaginatorModule,MatFormFieldModule,MatInputModule,MatAutocompleteModule,MatButtonModule,MatSelectModule,MatAutocompleteModule,
  MatButtonModule,
  FormsModule,
  NgSelectModule,
  CdkTableModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule],

  declarations: [UpdatetaskComponent]
})
export class UpdateTaskModule {}
