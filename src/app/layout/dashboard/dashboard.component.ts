import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ServerService} from './Server.Service'
import { AgmCoreModule ,MarkerManager,GoogleMapsAPIWrapper} from '@agm/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    

    constructor(private serverService:ServerService,private manager:MarkerManager,private api:GoogleMapsAPIWrapper) {
    

        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
        
    }
tasksInPipe : number;
employeeNumber : number;
employees = '';
taskApproval : number;
    ngOnInit() {
            this.serverService.readTasks().subscribe((res)=>{
            
            let s = res.json();
            s
            console.log(s);
            this.tasksInPipe = s.length;
            console.log(s.length);
        },
        (error)=>{console.log(error)});
        this.serverService.readEmployee().subscribe((res)=>{
            let s = res.json();
            this.employees = s;
            this.employeeNumber = s.length;
            console.log(s);
            for(let i of s){
            console.log(i['emplat']);
             this.markers.push({latt:+(i.emplat),longg:+i.emplong,empname:i.empname});
        }
        },(err)=>{
            console.log(err);
        });
        this.serverService.readTaskApproval().subscribe((res)=>{
            let s = res.json();
            this.taskApproval = s.length;

        })
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }


markers: marker[] =
 [
  
  
   ];
 lat: number = 31.678418;
 lng: number = 35.809007;

 

}

interface marker {
	latt: number;
	longg: number;
    empname: string
}
interface employee{
    empname: number,
    empusername: number,
    emplat:number
}
