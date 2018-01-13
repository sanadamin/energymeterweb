import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forcemap',
  templateUrl: './forcemap.component.html',
  styleUrls: ['./forcemap.component.scss']
})
export class ForcemapComponent implements OnInit {

  constructor(private serverService:ServerService) { }
employeeNumber : number;
employees = '';
  ngOnInit() {
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
