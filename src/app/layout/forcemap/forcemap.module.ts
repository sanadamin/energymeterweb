import { MapsComponent } from './../components/maps/maps.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForcemapComponent } from './forcemap.component';
import {NewtaskRoutingModule} from './forcemap-routing.module'
import { PageHeaderModule } from './../../shared';
import {CdkTableModule} from '@angular/cdk/table'
import {MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule} from '@angular/material'
import {AgmCoreModule,MarkerManager,GoogleMapsAPIWrapper} from '@agm/core'


@NgModule({
  imports: [CommonModule,NewtaskRoutingModule, PageHeaderModule,MatFormFieldModule,MatInputModule,FormsModule,MatOptionModule, MatSelectModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOb7r8dpHxoxvGFmzZKvIsbP4wPhhb-ro'
    })],
  declarations: [ForcemapComponent,MapsComponent],
  providers: [GoogleMapsAPIWrapper,MarkerManager]
})
export class ForceMapModule {}
