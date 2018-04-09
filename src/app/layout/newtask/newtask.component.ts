import { Router } from '@angular/router';
import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {NgSelectModule} from '@ng-select/ng-select'

@Component({
  selector: 'app-newtask',
  
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
   animations: [routerTransition()]
    


})
export class NewtaskComponent implements OnInit {
  cities = [];
  selectedCityId: any;
  tasks = [];
  selectedtasksId: any;
  taskcat = [];
  selectedTaskCat: any;
  taskcat1 = [];
  taskcat11 = [];
  selectedTaskCat1: any;
  taskName : string ;
  taskCat:string;
  siteName: string;
  assignedTo:string;
  siteList: string[] =[];
  empList: string[] = [];
  isLoading = true;
  constructor(private serverService:ServerService,private router:Router) {
    this.serverService.getSiteList().subscribe((res)=>{
      let sitesJson = res.json();
      let o = 0;
      for (let site of sitesJson){
        this.siteList.push(site['sitename']);
        this.cities.push({id: o, name: site['sitename']});
        o++;
      }
      this.isLoading = false;
      this.cities = [...this.cities];
      
    });
  this.serverService.readEmployee().subscribe((res)=>{
    let employeeJosn = res.json();
    let o1 = 0;
    for(let emps of employeeJosn){
    this.empList.push(emps['empname']);
    this.taskcat.push({id: o1, name: emps['empname']})
  }
  this.taskcat = [...this.taskcat];
})
this.serverService.getTaskList().subscribe((res)=>{
  let taskJson = res.json();
  let o2 = 0;

    for(let tasks of taskJson){
  this.tasks.push({id: o2, name: tasks['taskname']});
  this.taskcat1.push({id: o2, name: tasks['taskcat']});



 
  
}

this.tasks = [...this.tasks];
this.taskcat1 = [...this.taskcat1];
});

   }
public changeListener(files: FileList){
  console.log(files);
  if(files && files.length > 0) {
     let file : File = files.item(0); 
       console.log(file.name);
       console.log(file.size);
       console.log(file.type);
       let reader: FileReader = new FileReader();
       reader.readAsText(file);
       reader.onload = (e) => {
          let csv: string = reader.result;
          let allTextLines = csv.split(/\r?\n|\r/);
          for (let io=0;io<allTextLines.length-1;io++)
          {
            console.log(allTextLines[io].split(',')[0]+allTextLines[io].split(',')[1]+allTextLines[io].split(',')[2]+allTextLines[io].split(',')[3]);
            this.serverService.NewTask(allTextLines[io].split(',')[0],allTextLines[io].split(',')[1],allTextLines[io].split(',')[2],allTextLines[io].split(',')[3]).subscribe(()=>{
              alert("Task " + allTextLines[io].split(',')[1] + 'has been assinged');
            },error=>{
    alert(error);
  })
          }
       }
    }
}
  ngOnInit() {
  }

  
randomize(){
  if((this.siteName != null) && (this.taskName != null) && (this.taskCat != null) && (this.assignedTo != null)){
    console.log(this.siteName);
  this.serverService.NewTask(this.siteName,this.taskName,this.taskCat,this.assignedTo).subscribe(()=>{
    this.router.navigate(['/dashboard'],(err)=>{
      alert("error,please check the values");
    });
  });}else{
    alert("Please Fill All Fields");
  }

}
}
