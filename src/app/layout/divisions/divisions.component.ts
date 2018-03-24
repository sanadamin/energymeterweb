import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './../dashboard/Server.Service';
import { routerTransition } from '../../router.animations';
import {NgSelectModule} from '@ng-select/ng-select'


@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.scss'],
   animations: [routerTransition()],
})
export class DivisionsComponent implements OnInit {
  divisionName = "";
  emps: string = 'Please Select Employee';
  divs: string = 'Please Select Division';
  isLoading = true;
  emps1:employee[] = [];
  emps12:division[] = [];
  isloaded = false;
  isloaded1 = false;
  constructor(private serverService:ServerService) {
    
    this.serverService.getDivs().subscribe((res)=>{
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.emps1.push({id: ind,name: emp['name']});
          ind++;
        }
         this.isLoading = false;
         this.isloaded = true;
         this.emps1 = [...this.emps1];
    })
    this.serverService.getEmps().subscribe((res)=>{
      console.log(res.json());
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.emps12.push({id: ind,name: emp['name']});
          ind++;
        }
         this.isLoading = false;
         this.isloaded1 = true;
         this.emps12 = [...this.emps12];
    })
   }
  ngOnInit() {
 
  }
  addEmployee(){
    this.serverService.updatedivisionEmp(this.divs,this.emps).subscribe(()=>alert('added'),onerror=>alert(onerror));
  }
  addDivision(){
      this.serverService.AddDivision(this.divisionName).subscribe((res)=>{
      alert(res);
    })
  }
}
 interface employee {
   id:number,
   name:string
 }
 interface division {
   id:number,
   name:string
 }
