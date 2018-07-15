import { MatDialog } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ServerService} from './Server.Service'
import { ChartsModule as Ng4Charts } from 'ng4-charts';
import { DialogOverviewExampleDialog1 } from './dashboard.component';

import { ChartsRoutingModule } from '../charts/charts-routing.module';
import { ChartsComponent } from '../charts/charts.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent,
} from './components';
import {MapsComponent} from '../components/maps/maps.component'
import { StatModule } from '../../shared';
import {AgmCoreModule,MarkerManager,GoogleMapsAPIWrapper} from '@agm/core'
import {MatDialogModule, MatProgressSpinnerModule,MatAutocompleteModule,

  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  } from '@angular/material'
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        
        StatModule,
        MatAutocompleteModule,
  
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
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
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  
        MatDialogModule,
        MatProgressSpinnerModule,
        Ng4Charts, 
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOb7r8dpHxoxvGFmzZKvIsbP4wPhhb-ro'
    })
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        DialogOverviewExampleDialog1    
        
    ],
    entryComponents: [ DialogOverviewExampleDialog1],
    providers: [MarkerManager,GoogleMapsAPIWrapper]
})
export class DashboardModule {}

