import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ServerService} from './Server.Service'
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent,
} from './components';
import {MapsComponent} from '../components/maps/maps.component'
import { StatModule } from '../../shared';
import {AgmCoreModule,MarkerManager,GoogleMapsAPIWrapper} from '@agm/core'
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOb7r8dpHxoxvGFmzZKvIsbP4wPhhb-ro'
    })
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        MapsComponent
    ],
    providers: [MarkerManager,GoogleMapsAPIWrapper]
})
export class DashboardModule {}
