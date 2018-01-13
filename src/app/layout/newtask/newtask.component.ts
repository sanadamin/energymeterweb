import { Router } from '@angular/router';
import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.scss'],
  animations: [routerTransition()]

})
export class NewtaskComponent implements OnInit {
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
      for (let site of sitesJson){
        this.siteList.push(site['sitename']);
      }
      this.isLoading = false;
      
    });
  this.serverService.readEmployee().subscribe((res)=>{
    let employeeJosn = res.json();
    for(let emps of employeeJosn){
    this.empList.push(emps['empname']);
    }
  })
   }

  ngOnInit() {
  }
randomize(){
  if((this.siteName != null) && (this.taskName != null) && (this.taskCat != null) && (this.assignedTo != null)){
  this.serverService.NewTask(this.siteName,this.taskName,this.taskCat,this.assignedTo).subscribe(()=>{
    this.router.navigate(['/dashboard'],(err)=>{
      alert("error,please check the values");
    });
  });}else{
    alert("Please Fill All Fields");
  }

}
}
