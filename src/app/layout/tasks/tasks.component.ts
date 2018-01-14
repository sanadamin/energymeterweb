import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Angular2Csv} from 'angular2-csv/Angular2-csv'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss',
  './tasks.component.css'],
  animations: [routerTransition()]
})
export class TasksComponent implements OnInit,AfterViewInit {
  

 displayedColumns = ['id', 'name', 'progress', 'color','test'];
 dataSource: MatTableDataSource<UserData>;
 tasks: task[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serverService:ServerService) {
    // Create 100 users
    this.serverService.readTasks().subscribe((res)=>{
          
            let s = res.json();
            s
            console.log(s);
            for (let i of s){
         
            this.tasks.push({
              taskName: i['taskname'],
              taskStaff:i['taskassignedto'],
              taskSite:i['sitename'],
              taskStartTime:i['taskstarttime']})
            }
           
    const users: UserData[] = [];
     let j:number = 0;
    for (let i of this.tasks) { 
     
      
      users.push(createNewUser(j,
      this.tasks[j].taskName,
      this.tasks[j].taskSite,
      this.tasks[j].taskStaff,
      this.tasks[j].taskStartTime)); 
     j++;}
     console.log("123123");
     
     // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;

        },
        (error)=>{console.log(error)});
    
    
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
    this.dataSource.sort = this.sort;
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

  }
  
}

/** Builds and returns a new User. */
function createNewUser(id: number,siteName: string,taskname: string,employee: string,startTime:string): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
      
  return {
    id: id.toString(),
    name: taskname,
    progress: siteName,
    color: startTime,
    test: employee
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
}

interface task{
    taskName: string,
    taskStaff: string,
    taskSite:string,
    taskStartTime: string
}
