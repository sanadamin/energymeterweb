import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { Component, OnInit,ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ServerService } from './../dashboard/Server.Service';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
  animations: [routerTransition()]
})
export class RecordComponent implements OnInit {
 
 isClicked =false;
 displayedColumns = ['id',  'progress','test','name', 'color','date','myprogress'];
 dataSource: MatTableDataSource<UserData>;
 tasks: task[] = [];
 ss = [];
 rows= [];
 updatesarray:updates[] = [];
 recordTemplate: recordTemp[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serverService:ServerService) {
    // Create 100 users
    this.serverService.GetAlltasks().subscribe((res)=>{
            
            let s = res.json();
            this.ss = s;
            console.log(s);
            for (let i of s){
              // let sj = i['associatedprs'];
              // let prs = '';
              // for(let ij of sj)
              // {
                
              //   prs = prs + ij['prname'] + ' (' + ij['prstatus'] + ')' + '\n';
              // }
            
            this.tasks.push({
              taskName: i['taskname'],
              taskStaff:i['description'],
              taskSite:i['project'],
              taskStartTime:i['duedate'],
              actiontaken: i['taskownmer'],
              progress:i['progress'],
              taskid:i['_id']
             })
            }
            
           
    const users: UserData[] = [];
     let j:number = 0;
    for (let i of this.tasks) { 
     
      
      users.push(createNewUser(j,
      this.tasks[j].taskName,
      this.tasks[j].taskSite,
      this.tasks[j].taskStaff,
      this.tasks[j].taskStartTime,
      this.tasks[j].actiontaken,
      this.tasks[j].progress
      )); 
     j++;}
     
     // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        },
        (error)=>{console.log(error)});
    
    
  }
LoadTask(row)
{

  this.serverService.GetTaskByID(this.tasks[row['id']]['taskid']).subscribe((res)=>{
    let  myupdates = res.json();
    let updatesarray1 = myupdates['updates'];
    for(let ii of updatesarray1){
      alert(ii['value']);
      this.updatesarray.push({update:ii['value'],date:ii['dateofupdate'],updater:ii['updater']})
    }
    this.isClicked = true;
  })
}
check(row){
  this.rows.push(row['taskid']);
  for(var i=0;i<this.rows.length;i++){
  }
  
}
  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     
  }
    
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
 
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
OnAddTask(){
    console.log('asd');
    this.serverService.AddTask().subscribe();
}
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.dataSource.paginator = this.paginator;

  }
  eventClicked(){
new Angular2Csv(this.recordTemplate, 'My Report',{headers: ['Date','Employee Name','Site Name','Task Category','Task Name','Consumed Time','Charging Time','Action Taken','Approved By','Start Time','Acknowledge Time','Site Entered Time','Closing Time']});
  }
  
}

/** Builds and returns a new User. */
function createNewUser(
  id: number,
  siteName: string,
  taskname: string,
  employee: string,
  startTime:string,
  action:string,
  myprogress:string
  ): UserData {
  
  return {
    id: id.toString(),
    name: taskname,
    progress: siteName,
    color: startTime,
    test: employee,
    date:action,
    myprogress:myprogress
   

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
  test: string;
  date:string,
  myprogress:string
  
}

interface task{
    taskName: string,
    taskStaff: string,
    taskSite:string,
    taskStartTime: string,
    actiontaken:string,
    progress:string,
    taskid:string
    
}

interface recordTemp{
  taskDate: String,
  empName: String,
  siteName: String,
  taskcat: String,
  taskName: String,
  consumedTime:String,
  chargingHours:String,
  actionTaken: String,
  approvedBy: String,
  startTime:String,
  ackTime:String,
  enteredtime:String,
  closingTime:String,

 
}
interface updates{
  update:string,
  date:string,
  updater:string
}