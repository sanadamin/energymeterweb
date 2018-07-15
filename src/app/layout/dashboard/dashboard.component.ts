import { Router } from '@angular/router';
import { element } from 'protractor';
import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ServerService} from './Server.Service';
import {BaseChartDirective} from 'ng4-charts';
import { AgmCoreModule ,MarkerManager,GoogleMapsAPIWrapper} from '@agm/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

@ViewChild(BaseChartDirective)
public chart: BaseChartDirective;


isDataLoaded=false;
    public alerts: Array<any> = [];
    isLoaded = false;
    public sliders: Array<any> = [];
    public doughnutChartLabels: any[] = [];
    divs:mydata[] = [];
    
    public doughnutChartData: any[] = [];
    public doughnutChartType: string = 'doughnut';
   
    public tempdata: any[] = [];
    public templabel: any[] = [];
     rowind = 0;
    colind = 0;
    
    
    public colorarray: any[] = [{backgroundColor:["#f2c539","#CD6155","#61676c","#D2B4DE","#c5d8b2","#52BE80","#CD6155","#FAD7A0","#D2B4DE","#B7950B","#B2BABB"]}]

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
 openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog1, {
      width: '500px',
      data: { name: 'sanad' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
    constructor(private serverService:ServerService,public dialog: MatDialog,private manager:MarkerManager,private api:GoogleMapsAPIWrapper, private router:Router) {
             this.openDialog();
         this.serverService.getDivs().subscribe((res)=>{
            let s = res.json();
            this.employees = s;
            this.employeeNumber = s.length;
            
            this.doughnutChartType = 'doughnut';
            this.isLoaded = true;   
            // console.log(s);
            for(let i of s){
               
              if(i.name){
                 
                 this.serverService.GetTaskNumByDiv(i.name).subscribe((res)=>{
                 
                
                     let x = res.json();
                     
               //     this.doughnutChartLabels.push(i.name);
                 //    this.doughnutChartData.push(x.length);
			 this.templabel.push(i.name);
                     this.tempdata.push(x.length);
                     if(s.length === this.tempdata.length){
	this.doughnutChartLabels = this.templabel;
          this.doughnutChartData = this.tempdata;
        
         this.isDataLoaded = true; 
          this.chart.chart.update(); 
                 }
                     this.serverService.GetTaskNumByType("Task",i.name).subscribe((res)=>{
                         let typetask = res.json();
                         this.serverService.GetTaskDelayByDiv(i.name).subscribe((res)=>{
                            let delres = res.json();
                            
                            this.serverService.GetTaskRecordByDiv(i.name).subscribe((res)=>{
                                let recordres = res.json();
                                this.serverService.GetTaskNumByType("Incident",i.name).subscribe((res)=>{
                                    let incres = res.json();
                                    this.serverService.GetTaskNumByType("Challenge",i.name).subscribe((res)=>{
                                        let chares = res.json();
                                        this.serverService.GetTaskNumByType("Audit Risk",i.name).subscribe((res)=>{
                                            let auditres = res.json();
this.divs.push({    
                                        data:i.name,
                                        count:typetask.length,
                                        countdel:delres.length,countrecord:recordres.length,countinc:incres.length,countchal:chares.length,
                                    countaudit:auditres.length});
                                        })
                                    })
                                    

                                })
                                
                            })
                            
                         })
                         ;
                     })
                      
                       
                 })
              }
             
              // this.doughnutChartData = [...this.doughnutChartData];
              // this.doughnutChartLabels = [...this.doughnutChartLabels];
             
            // console.log(i['emplat']);
             this.markers.push({latt:+(i.emplat),longg:+i.emplong,empname:i.empname});
        }

//this.doughnutChartLabels = this.templabel;
        //  this.doughnutChartData = this.tempdata;

//	this.chart.chart.update();
// this.doughnutChartData = [...this.doughnutChartData];
// this.doughnutChartLabels = [...this.doughnutChartLabels];



        },(err)=>{
            // console.log(err);
        });
 			this.dialog.closeAll();


                     
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
onclick(event){
   
    this.rowind = event;
    let variab = '';
     
     switch(this.colind){
         case 1:{
         variab = 'data';
         
         break;}
         case 2:{
             variab = 'count';
             this.serverService.GetTaskNumByType("Task",this.divs[this.rowind]['data']).subscribe((res)=>{
             
             let tasknum = res.json();
             
             this.serverService.teststring(tasknum);
             this.router.navigate(['/detail']);
          
         });
             break;
         }
         case 3:{
         variab = 'countdel';
          this.serverService.GetTaskDelayByDiv(this.divs[this.rowind]['data']).subscribe((res)=>{
             let tasknum = res.json();
             
             this.serverService.teststring(tasknum);
             this.router.navigate(['/detail']);

          });
         break;}
         case 4:{
             variab = 'countrecord';
             this.serverService.GetTaskRecordByDiv(this.divs[this.rowind]['data']).subscribe((res)=>{
                                let tasknum = res.json();
                                this.serverService.teststring(tasknum);
             this.router.navigate(['/detail']);
             });
             break;
         }
        case 5:{
             variab = 'countinc';
              this.serverService.GetTaskNumByType("Incident",this.divs[this.rowind]['data']).subscribe((res)=>{
                 let tasknum = res.json();
                                this.serverService.teststring(tasknum);
             this.router.navigate(['/detail']);
              });
             break;
         }
         case 6:{
         variab = 'countchal';
         this.serverService.GetTaskNumByType("Challenge",this.divs[this.rowind]['data']).subscribe((res)=>{
                let tasknum = res.json();
                                this.serverService.teststring(tasknum);
             this.router.navigate(['/detail']);
         });
         break;}
         case 7:{
             variab = 'countaudit';
              this.serverService.GetTaskNumByType("Audit Risk",this.divs[this.rowind]['data']).subscribe((res)=>{
                let tasknum = res.json();
                                this.serverService.teststring(tasknum);
             this.router.navigate(['/detail']);
              });
             break;
         }

     }
      
}
columnindex(ind){
    
    this.colind = ind;
   
}
    ngOnInit() {
        
            this.serverService.GetAlltasks().subscribe((res)=>{
            let s = res.json();
            // console.log(s);
            this.tasksInPipe = s.length;
            // console.log(s.length);
        },
        (error)=>{console.log(error)});
       
        this.serverService.GetAlltasksRecord().subscribe((res)=>{
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
        'Today',
        'Yesterday',
        '-3',
        '-4',
        '-5',
        '-6',
        '-7'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [15, 10, 0,0, 0, 0, 0], label: 'Alarms Number' }
    ];
    
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

interface mydata{
    data: string,
    count: string,
    countdel: string,
    countrecord: string,
    countinc: string,
    countchal: string,
    countaudit: string
}
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
  })
  export class DialogOverviewExampleDialog1 {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog1>,
      @Inject(MAT_DIALOG_DATA) public data: userdate) { 
        
  
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  closeDialog(){
      this.dialogRef.close();
    }
  }
  export interface userdate{
    name: string
  }
