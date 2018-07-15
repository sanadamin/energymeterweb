import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.scss']
})
export class TaskeditComponent implements OnInit{
 isClicked = false;
  Taskid='';
  newowner = '';
  enitiesmodel:entity[] = [];
  entitieshistory:entity1[] = [];
  selected = 'Update';
  selected1 = ''; 
justification = '';
newduedate = '';
 isUpdate = false;
  isClose = false;
  TaskName = '';
  dateofupdate = '';
  progress = '';
  RelatedPR = '';
  PRnumber = '';
  budgetline = '';
  budgetreserved = '';
  actualbudget = '';
  PRStatus = '';
  RelatedPO = '';
  PONumber = '';
  POStatus = '';
  duedate = '';
  prstatus = '';
  entityname = ''
  taskdescription = '';
  taskdescription1 = '';
  project = '';
  myentitiesarray=[];
  mystringarray = [];
  emps: string = 'Please Select Employee';
  emps1:employee[] = [];
  employeename = '';
  Updatedescription = '123';
  myres: tasks[] = [];
  lastupdate = '';
  isloaded = false;
  closingStatus = '';
  displayedColumns = ['id', 'name', 'color'];
  dataSource: MatTableDataSource<UserData>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serverService:ServerService) {
     const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { ; }

    // Assign the data to the data source for the table to render
    this.serverService.getempdata(localStorage.getItem('userName')).subscribe((res)=>{
            
          let newres = res.json();
          this.employeename = newres['name'];  
          this.serverService.GetAlltasks().subscribe((res)=>{
          let myres22 = res.json();
          let myind = 0;
          
             this.serverService.GetAlltasks().subscribe((res)=>{
      let myres1 = res.json();
      
      for (let s of myres22){
        this.myres.push({id:s['_id'],taskname:s['taskname'],description:s['description'],progress:s['progress'],taskid:s['_id']});
        users.push(createNewUser(myind,s['taskname'],s['description'],s['progress'],s['taskid']));
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        myind++;
      }
    })
          
        });
      
        });
        
    
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

   onChange(deviceValue) {
  
    if(this.selected === "Update"){
   
      this.isUpdate = true;
      this.isClose = false;
    }else if(this.selected === "Close"){
    
      this.isClose = true;
      this.isUpdate = false;
    }
}
onClose(){
  this.serverService.CloseTask(this.Taskid,this.closingStatus,localStorage.getItem('userName')).subscribe((res)=>{
    alert('Task Closed');
  },onerror=>{
    alert("Error" + onerror);
  })
}


UpdateDueDate(){
this.serverService.UpdateDueDate(this.Taskid,this.newduedate,this.justification).subscribe((res)=>{
alert('Due Date Updated');
this.justification = '';
this.newduedate = '';
});
}



LoadTask(row){
  console.log(row.id);
 
  this.serverService.GetTaskByID(this.myres[row.id]['taskid']).subscribe((res)=>{
    let thisres = res.json();
    this.Taskid= thisres['_id'];
    this.taskdescription1 = thisres['description'];
    this.TaskName = thisres['taskname'];
    this.progress = thisres['progress'];
    this.duedate = thisres['duedate'];
    this.PRnumber = thisres['relatedpr']['prnumber'];
    this.PRStatus = thisres['relatedpr']['prstatus'];
    this.selected1 = thisres['flag'];
    this.PONumber = thisres['relatedpo']['ponumber'];
    this.POStatus = thisres['relatedpo']['postatus'];
    this.budgetline = thisres['budgetline'];
    this.actualbudget = thisres['actualbudget'];
    this.budgetreserved = thisres['budgetamount'];
    this.taskdescription = thisres['taskdescription'];
    this.newowner = thisres['taskownmer']; 

   for(let s of thisres['updates']){
      this.lastupdate = s['value'];
     
    }
    this.myentitiesarray =[];
    this.enitiesmodel = [];
    this.entitieshistory = [];
    for(let i of thisres['effectedentities']){
      this.myentitiesarray.push({entityname:i['entityname'],entityupdate:i['entityupdate'],entitydueduate:i['entityduedate'],dateofupdate:i['dateofupdate']});
      this.enitiesmodel.push({entityname:i['entityname'],entityupdate:i['entityupdate'], entityduedate:i['entityduedate'],updater:localStorage.getItem('userName'),dateofupdate:i['dateofupdate']});
      this.entitieshistory.push({entityname:i['entityname'],entityupdate:i['entityupdate']});
    //  alert(this.enitiesmodel[0].entityname);
    }
  this.Updatedescription = this.lastupdate;
  this.isClicked = true;
  })
}
  ngOnInit() {
  }

UpdateOwner(){
  this.serverService.UpdateOwner(this.Taskid,this.newowner).subscribe((res)=>{
    alert('Owner Updated');
  })
}

AddEntity(){
 alert(this.Taskid);
 this.serverService.AddEntity(this.Taskid,this.entityname,localStorage.getItem('userName')).subscribe((res)=>{
   alert(res);
 });
}


UpdateDescription(){
  this.serverService.UpdateDescription(this.Taskid,this.taskdescription1).subscribe((res)=>{
    alert('Task Description Updated');
  })
}
  UpdateTask(){
  
    let username = localStorage.getItem('userName');
     this.serverService.UpdateTaskHistory(this.Taskid,this.entitieshistory).subscribe((res)=>{
       alert(this.PONumber);
      this.serverService.UpdateTaskTracker(this.Taskid,this.progress,this.duedate,this.PRnumber,this.RelatedPO,this.Updatedescription,username,this.enitiesmodel,this.PRStatus,this.PONumber,this.POStatus,this.actualbudget,this.budgetreserved,this.budgetline,this.dateofupdate,this.selected1).subscribe((res)=>{
alert('Task Updated');
this.isClicked = false;
this.entitieshistory = [];
      })
      
    });
  
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
  taskid : string
}
function createNewUser(id: number,taskname: string,taskdescription:string,progress:string, taskid:string): UserData {
  

  return {
    id: id.toString(),
    name: taskname,
    progress: taskdescription,
    color: progress,
    taskid: taskid
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
  taskid: string;
}
interface employee {
   id:number,
   name:string
 }
 interface entity{
   entityname:string,
   entityupdate:string,
   updater:string,
   dateofupdate:string,
   entityduedate:string
 }
 interface entity1{
   entityname:string,
   entityupdate:string,

 
 }



