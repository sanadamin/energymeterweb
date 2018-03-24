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
  Tasktype = '';
  duedate = '';
  project = '';
  emps: string = 'Please Select Employee';
  emps1:employee[] = [];
  constructor(private serverService:ServerService) {
       this.serverService.getEmps().subscribe((res)=>{
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

  ngOnInit() {
  }
  addTask(){
    console.log(this.TaskName+this.Tasktype+this.Taskdescription+this.duedate+this.project+this.emps)
   if(this.TaskName&&this.Tasktype&&this.Taskdescription&&this.duedate&&this.project&&this.emps){
    this.serverService.AddTaskTracker(this.TaskName,this.Taskdescription,this.emps,this.Tasktype,this.project,this.duedate).subscribe((res)=>{
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
