import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
emps: string = 'Please Select Division';
emps1: string = 'Please Select Authority Level';
autho = '';
currentemp:employee[] = [];
emps12:division[] = [];
emps123:division[] = [{id: 0,name:"Admin"},{id:1,name:"User"}];
empname = '';
empusername  = '';
emppassword = '';
empemail = '';
empauth = '';
 isloaded = false;
  constructor(private serverService:ServerService) { 
    this.serverService.getEmps().subscribe((res)=>{
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.currentemp.push({id: ind,name: emp['name']});
          ind++;
        }
         this.isloaded = true;
         this.currentemp = [...this.currentemp];
    })
    this.serverService.getDivs().subscribe((res)=>{
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.emps12.push({id: ind,name: emp['name']});
          ind++;
        }
         this.isloaded = true;
         this.emps12 = [...this.emps12];
    })


  }
AddEmp(){
 this.serverService.AddOwner(this.empname,this.empusername,this.emppassword,this.empemail,this.autho).subscribe(()=>{
   this.currentemp = [];
   this.serverService.getEmps().subscribe((res)=>{
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.currentemp.push({id: ind,name: emp['name']});
          ind++;
        }
         this.isloaded = true;
         this.currentemp = [...this.currentemp];
    })
    alert("Added");
 });
}
  ngOnInit() {
  }

}
 interface division {
   id:number,
   name:string
 }
 interface employee {
   id:number,
   name:string
 }