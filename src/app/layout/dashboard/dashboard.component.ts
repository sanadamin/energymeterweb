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
    numbers: numbers = {
        powernumber: 0,
        twonumber: 0,
        threenumber: 0,
        fournumber: 0,
        microwavenumber: 0};
    days:daysinterface={
        today: '',
        today1:'',
        today2:'',
        today3:'',
        today4:'',
        today5:'',
        today6:''

    }
    alarmstat:alarmsbydays={
        today: 0,
        today1:0,
        today2:0,
        today3:0,
        today4:0,
        today5:0,
        today6:0

    }
    constructor(private serverService:ServerService,private manager:MarkerManager,private api:GoogleMapsAPIWrapper) {
    this.serverService.GetRecord().subscribe((res)=>{
            let resJSon = res.json();
            for(let cat of resJSon){
                if(cat['taskcat']=== 'Power'){
                    // console.log('power');
                     this.numbers.powernumber++;
                }else if(cat['taskcat']=== '2G'){
                    // console.log('2g');
                    this.numbers.twonumber++;
                }else if(cat['taskcat']=== '3G'){
                    // console.log('3g');
                    this.numbers.threenumber++;
                }else if(cat['taskcat']=== '4G'){
                    // console.log('4g');
                    this.numbers.fournumber++;
                }else if(cat['taskcat']=== 'MicroWave'){
                    // console.log('MW');
                    this.numbers.microwavenumber++;
                }
                let mydate = new Date(cat['taskdate']);
                let myDay = mydate.getDate();
                let mymonth = mydate.getMonth();
                let myyear = mydate.getFullYear();
                // console.log(mymonth+'/'+myDay+'/'+myyear);
                let today = new Date();
                
              
                
            //    console.log('123123'+this.alarmstat.today1);
              
                today.setDate(today.getDate() - 0).toString();
                this.days.today =  today.getDate().toString();
                today.setDate(today.getDate() - 1).toString();
                this.days.today1 = today.getDate().toString();
                 today.setDate(today.getDate() - 1).toString();
                this.days.today2 = today.getDate().toString();
                 today.setDate(today.getDate() - 1).toString();
                this.days.today3 = today.getDate().toString();
                 today.setDate(today.getDate() - 1).toString();
                this.days.today4 = today.getDate().toString();
                 today.setDate(today.getDate() - 1).toString();
                this.days.today5 = today.getDate().toString();
                 today.setDate(today.getDate() - 1).toString();
                this.days.today6 = today.getDate().toString();
                this.barChartLabels = [
                    this.days.today,
                    this.days.today1,
                    this.days.today2,
                    this.days.today3,
                    this.days.today4,
                    this.days.today5,
                    this.days.today6];
                    // console.log(this.days.today+
                    // this.days.today1+
                    // this.days.today2+
                    // this.days.today3+
                    // this.days.today4+
                    // this.days.today5+
                    // this.days.today6)
                today = new Date();
                let todayDay = today.getDate();
                let todaymonth = today.getMonth();
                let todayyear = today.getFullYear();
                // console.log('today'+today);
                //  console.log('myday'+mydate);
                if((todayDay === myDay)&&(mymonth === todaymonth)&&(todayyear ===myyear)){
                    this.alarmstat.today ++;
                } 
                today.setDate(today.getDate()-1);
                todayDay = today.getDate();
                todaymonth = today.getMonth();
                todayyear = today.getFullYear();
                if((todayDay === myDay)&&(mymonth  === todaymonth)&&(todayyear  ===myyear)){
                    this.alarmstat.today1 ++;
                }
                today.setDate(today.getDate()-1);
                todayDay = today.getDate();
                todaymonth = today.getMonth();
                todayyear = today.getFullYear();
                if((todayDay === myDay)&&(mymonth  === todaymonth)&&(todayyear  ===myyear)){
                    this.alarmstat.today2 ++;
                }
                today.setDate(today.getDate()-1);
                todayDay = today.getDate();
                todaymonth = today.getMonth();
                todayyear = today.getFullYear();
                if((todayDay === myDay)&&(mymonth  === todaymonth)&&(todayyear  ===myyear)){
                    this.alarmstat.today3 ++;
                }
                today.setDate(today.getDate()-1);
                todayDay = today.getDate();
                todaymonth = today.getMonth();
                todayyear = today.getFullYear();
                if((todayDay === myDay)&&(mymonth  === todaymonth)&&(todayyear  ===myyear)){
                    this.alarmstat.today4 ++;
                }
                today.setDate(today.getDate()-1);
                todayDay = today.getDate();
                todaymonth = today.getMonth();
                todayyear = today.getFullYear();
                if((todayDay === myDay)&&(mymonth  === todaymonth)&&(todayyear  ===myyear)){
                    this.alarmstat.today5 ++;
                }
                today.setDate(today.getDate()-1);
                todayDay = today.getDate();
                todaymonth = today.getMonth();
                todayyear = today.getFullYear();
                if((todayDay === myDay)&&(mymonth  === todaymonth)&&(todayyear  ===myyear)){
                    this.alarmstat.today6 ++;
                }
                
                // console.log(this.alarmstat.today1);
            }

        this.barChartData = [
        { data: [this.alarmstat.today, this.alarmstat.today1, this.alarmstat.today2,this.alarmstat.today3, this.alarmstat.today4, this.alarmstat.today5, this.alarmstat.today6], label: 'Alarms Number' }
    ];
            this.doughnutChartData = [this.numbers.powernumber, this.numbers.twonumber, this.numbers.threenumber,this.numbers.fournumber,this.numbers.microwavenumber]
        });
        
        // 
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
            // console.log(s);
            this.tasksInPipe = s.length;
            // console.log(s.length);
        },
        (error)=>{console.log(error)});
        this.serverService.readEmployee().subscribe((res)=>{
            let s = res.json();
            this.employees = s;
            this.employeeNumber = s.length;
            // console.log(s);
            for(let i of s){
            // console.log(i['emplat']);
             this.markers.push({latt:+(i.emplat),longg:+i.emplong,empname:i.empname});
        }
        },(err)=>{
            // console.log(err);
        });
        this.serverService.readTaskApproval().subscribe((res)=>{
            let s = res.json();
            this.taskApproval = s.length;

        })
        
        
    }
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
    public barChartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    public barChartLabels: string[] = [
        this.days.today,
        this.days.today1,
        this.days.today2,
        this.days.today3,
        this.days.today4,
        this.days.today5,
        this.days.today6
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [15, 10, 0,0, 0, 0, 0], label: 'Alarms Number' }
    ];
    public doughnutChartLabels: string[] = [
        'Power',
        '2G',
        '3G',
        '4G',
        'Microwave'
    ];
    public doughnutChartData: number[] = [400,500,300,100,500];
    public doughnutChartType: string = 'doughnut';
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
interface numbers{
    powernumber: number,
    twonumber: number,
    threenumber: number,
    fournumber: number,
    microwavenumber: number
}
interface daysinterface{
    today: string,
    today1:string,
    today2:string,
    today3:string,
    today4:string,
    today5:string,
    today6:string,
}
interface alarmsbydays{
    today: number,
    today1:number,
    today2:number,
    today3:number,
    today4:number,
    today5:number,
    today6:number,
}