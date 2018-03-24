import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.scss'],
    animations: [routerTransition()]

})
export class UpdatetaskComponent implements OnInit {
  isClicked = false;
  Taskid='';
  TaskName = '';
  progress = '';
  RelatedPR = '';
  RelatedPO = '';
  duedate = '';
  project = '';
  mystringarray = [];
  emps: string = 'Please Select Employee';
  emps1:employee[] = [];
  Updatedescription = '123';
  myres: tasks[] = [];
  lastupdate = '';
  isloaded = false;
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serverService:ServerService) {
     const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { ; }

    // Assign the data to the data source for the table to render
    
    this.serverService.GetAlltasks().subscribe((res)=>{
      let myres1 = res.json();
      let myind = 0;
      for (let s of myres1){
        this.myres.push({id:s['_id'],taskname:s['taskname'],description:s['description'],progress:s['progress'],taskid:s['_id']});
        users.push(createNewUser(myind,s['taskname'],s['description'],s['progress'],s['taskid']));
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        myind++;
      }
    })
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
  
 
  this.serverService.GetTaskByID(this.myres[row.id]['taskid']).subscribe((res)=>{
    let thisres = res.json();
    this.Taskid= thisres['_id'];
    this.TaskName = thisres['taskname'];
    this.progress = thisres['progress'];
    this.duedate = thisres['duedate'];
    this.RelatedPR = thisres['relatedpr'];
    this.RelatedPO = thisres['relatedpo'];
    for(let s of thisres['updates']){
      this.lastupdate = s['value'];
     
    }
  this.Updatedescription = this.lastupdate;
  this.isClicked = true;
  })
}
  ngOnInit() {
  }

  UpdateTask(){
    alert('here');
    let username = localStorage.getItem('userName');
    this.serverService.UpdateTaskTracker(this.Taskid,this.progress,this.duedate,this.RelatedPR,this.RelatedPO,this.Updatedescription,username).subscribe((res)=>{
      alert('Task Updated');
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

