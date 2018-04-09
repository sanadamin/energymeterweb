import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskconfig',
  templateUrl: './taskconfig.component.html',
  styleUrls: ['./taskconfig.component.scss']
})
export class TaskconfigComponent implements OnInit {
  TaskName = '';
  Taskdescription = '';
  isloaded = false;
  entityduedate = '';
  Tasktype = '';
  duedate = '';
  project = '';
   isShown = false;
  entitiesvalues = '';
  entities='';
  enityarray:entity[] = [];
  emps: string = 'Please Select Employee';
  emps1:employee[] = [];
  constructor(private serverService:ServerService) {
       this.serverService.getDivs().subscribe((res)=>{
      console.log(res.json());
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.emps1.push({id: ind,name: emp['name']});
          ind++;
        }
       
         this.isloaded = true;
         this.emps1 = [...this.emps1];
    })

   }
AddEntity(){
  this.enityarray.push({entityname:this.entities,entityupdate:"",entityduedate:this.entityduedate});
  alert('Entity ' + this.entities + ' Added Successfully' );
  this.entitiesvalues = '';
  for ( let i of this.enityarray){
    this.isShown = true;
    this.entitiesvalues = this.entitiesvalues + i['entityname'] + ', ';
  }
}
  ngOnInit() {
  }
  addTask(){
   
   if(this.TaskName&&this.Tasktype&&this.Taskdescription&&this.duedate&&this.project&&this.emps){
    this.serverService.AddTaskTracker(this.TaskName,this.Taskdescription,this.emps,this.Tasktype,this.project,this.duedate,this.enityarray).subscribe((res)=>{
      alert('Task Created Successfully');
    });
   }else{
     alert("Please fill all Fields");
   }
  }
}
interface employee {
   id:number,
   name:string
 }
 interface entity {
   entityname:string,
   entityupdate:string,
   entityduedate:string
 }
