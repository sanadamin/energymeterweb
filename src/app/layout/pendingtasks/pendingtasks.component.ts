import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-pendingtasks',
  templateUrl: './pendingtasks.component.html',
  styleUrls: ['./pendingtasks.component.scss']
})
export class PendingtasksComponent implements OnInit {
  isClicked = false;
  Taskid='';
  pendingchoices:any[] = [];
  pendingchoice:string = '';
  pendingid = '';
  pendingArray:any [] = [];
  enitiesmodel:entity[] = [];
  entitieshistory:entity1[] = [];
  budgetline = '';
  parenttask = '';
  assignedby = '';
  isPending = false;
  budgetreserved = '';
  actualbudget = '';
  TaskName = '';
  progress = '';
  RelatedPR = '';
  PRnumber = '';
  PRStatus = '';
  PendingFeedback = '';
  RelatedPO = '';
  PONumber = '';
  POStatus = '';
  duedate = '';
  taskdelegate = '';
  prstatus = '';
  PendingTaskId = '';
  project = '';
  myentitiesarray=[];
  ispendingloaded = false;
  mystringarray = [];
  emps: string = 'Please Select Employee';
  emps1:employee[] = [];
  employeename = '';
  Updatedescription = '123';
  myres: tasks[] = [];
  lastupdate = '';
  isloaded = false;
  displayedColumns = ['id', 'name', 'progress','status'];
  dataSource: MatTableDataSource<UserData>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serverService:ServerService) {

    this.serverService.getDivs().subscribe((res)=>{
      
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.pendingchoices.push({id: ind,name: emp['name']});
          ind++;
        }
       
         this.ispendingloaded = true;
         this.emps1 = [...this.emps1];
    })
     const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { ; }

    // Assign the data to the data source for the table to render
    this.serverService.getempdata(localStorage.getItem('userName')).subscribe((res)=>{
            
          let newres = res.json();
          this.employeename = newres['name'];  
          this.serverService.GetAlltasks1(this.employeename).subscribe((res)=>{
          let myres22 = res.json();
          let myind = 0;
          for(let j of myres22){
             this.serverService.GetAlltasksPending(j['name']).subscribe((res)=>{
      let myres1 = res.json();
      console.log(myres1);
      for (let s of myres1){
        
        this.myres.push({id:s['_id'],taskname:s['taskdescription'],description:s['taskdescription'],progress:s['progress'],pendingid:s['pendingid'],taskid:s['taskid']});
        users.push(createNewUser(myind,s['taskdescription'],s['startdate'],s['progress'],s['taskid'],s['status']));
       
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        myind++;
      }
    })
          }
        });
      
        });
        
    
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
LoadTask(row){
    this.pendingid = this.myres[row.id]['pendingid'];
    this.Taskid = this.myres[row.id]['taskid'];  
    this.PendingTaskId = this.myres[row.id]['id'];
    this.serverService.GetPendingByID(this.myres[row.id]['id']).subscribe((res)=>{
    let thisres = res.json();
    this.TaskName = thisres['taskdescription'];
    this.progress = thisres['startdate'];
    this.serverService.GetTaskByID(this.Taskid).subscribe((res)=>{
    let taskres = res.json();
    this.parenttask = taskres['taskname'];
    this.assignedby = taskres['taskownmer'];
    })
    this.isClicked = true;
  })
}
  ngOnInit() {
  }
DelegateTo(){
  this.serverService.UpdatePedning(this.Taskid,this.pendingchoice,this.taskdelegate).subscribe((res)=>{
    
    this.serverService.AddPending(this.Taskid,this.pendingchoice,this.taskdelegate,'').subscribe((res)=>{
   alert('Task ' + this.taskdelegate + ' Delgated');
    this.serverService.getEmps().subscribe((res)=>{
      console.log(res.json());
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.emps1.push({id: ind,name: emp['name']});
          ind++;
        }
         this.isClicked = false;
         this.isloaded = true;
         this.emps1 = [...this.emps1];
    })
   
  })
  })
  console.log(this.Taskid);
  
}
  UpdateTask(){
    
    let username = localStorage.getItem('userName');
    this.serverService.UpdatePendingTask(this.Taskid,this.pendingid,this.PendingFeedback,this.PendingTaskId).subscribe((res)=>{
    alert('Delegated Task Done');
     this.serverService.getDivs().subscribe((res)=>{
      
        let empJson = res.json();
        let ind = 0;
        for (let emp of empJson){
          this.pendingchoices.push({id: ind,name: emp['name']});
          ind++;
        }
       
         this.ispendingloaded = true;
         this.emps1 = [...this.emps1];
    })
     const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { ; }

    // Assign the data to the data source for the table to render
    this.serverService.getempdata(localStorage.getItem('userName')).subscribe((res)=>{
            
          let newres = res.json();
          this.employeename = newres['name'];  
          this.serverService.GetAlltasks1(this.employeename).subscribe((res)=>{
          let myres22 = res.json();
          let myind = 0;
          for(let j of myres22){
             this.serverService.GetAlltasksPending(j['name']).subscribe((res)=>{
      let myres1 = res.json();
      console.log(myres1);
      for (let s of myres1){
        
        this.myres.push({id:s['_id'],taskname:s['taskdescription'],description:s['taskdescription'],progress:s['progress'],pendingid:s['pendingid'],taskid:s['taskid']});
        users.push(createNewUser(myind,s['taskdescription'],s['startdate'],s['progress'],s['taskid'],s['status']));
       
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        myind++;
      }
    })
          }
        });
      
        });
        
    
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
  })
  this.isClicked = false;
  this.PendingFeedback = '';
  }
// ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
interface tasks{
  id: string,
  taskname:string,
  description:string,
  progress: string,
  pendingid : string,
  taskid: string

}
function createNewUser(id: number,taskname: string,taskdescription:string,progress:string, taskid:string, status:string): UserData {
  

  return {
    id: id.toString(),
    name: taskname,
    progress: taskdescription,
    color: progress,
    pendingid: taskid,
    status: status
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  pendingid: string;
  status: string;
}
interface employee {
   id:number,
   name:string
 }
 interface entity{
   entityname:string,
   entityupdate:string,
   updater:string,
   entityduedate:any
 }
 interface entity1{
   entityname:string,
   entityupdate:string,entityduedate:any

 
 }

