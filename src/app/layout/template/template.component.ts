import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { routerTransition } from '../../router.animations';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ServerService } from './../dashboard/Server.Service';
import { Router } from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
    animations: [routerTransition()]

})
export class TemplateComponent implements OnInit {
 recordTemplate: recordTemp[] = [];
  displayedColumns = ['id','name', 'date', 'employee'];
dataSource: MatTableDataSource<Element>;
@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
     this.dataSource.paginator = this.paginator;
  }
 isAvailable=false;
 cities = [];
 myindex = 0;
 templatename = "";
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
  fieldlist: fieldlist[] = [];
  fieldedit: string= "";
  fieldedittype: string= "";
  sendfielddata: string[]=[];
  sendfieldtype: string[]=[];
  sendfieldrequest: string[] = [];
  isLoading = true;
  test1 = "";
  
  constructor(private serverService:ServerService,private router:Router) {
    const ELEMENT_DATA: Element[] = [];
    this.serverService.GetTemplateRecord().subscribe((res)=>{
      let templaterecord = res.json();
      let o = 0;
      for(let template of templaterecord){
       
        ELEMENT_DATA.push({id:template['_id'],name: template['name'], date: template['date'],employee:template['survyor']});
       
      }
    });
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
      
     
  

     
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
  let isChecked = false
    for(let tasks1 of this.taskcat11){
      if(tasks['taskname'] === tasks1){
        isChecked = true;
        
      }  
      if(isChecked == false && tasks['taskname']){
        
         this.taskcat1.push({id: o2, name: tasks['taskcat']});

      }
  }
 
  
}

this.tasks = [...this.tasks];
this.taskcat1 = [...this.taskcat1];
});

   }
selectedRow(row){
  this.serverService.GetTemplateOne(row['id']).subscribe((res)=>{
    let template = res.json();
    console.log(template['fields']['fielddata'].length);
    for(var i =0;i<template['fields']['fielddata'].length;i++){
// alert(template['fields']['fielddata'][i]+template['fields']['fieldtype'][i]+template['fields']['fieldrequest'][i])
this.recordTemplate.push({templatename: template['name'],
  date: template['date'],
  survyor: template['survyor'],
  sitename: template['sitename'],
  fieldsdata: template['fields']['fielddata'][i],
  fieldstype:template['fields']['fieldtype'][i],
  fieldsrequest:template['fields']['fieldrequest'][i]})
    }
 
    new Angular2Csv(this.recordTemplate, row['name'],{headers: ['Template Name','Date','Employee','Site Name','Data','Data Type','Field Response']}),(err)=>{
      alert(err);
    }
  });
  this.recordTemplate = [];
}
  ngOnInit() {
  }

  AddField(){
    this.fieldlist.push({
      fielddata:this.fieldedit,fieldtype:this.fieldedittype});
  this.isAvailable = true;
    this.sendfielddata[this.myindex] = this.fieldedit;
    this.sendfieldtype[this.myindex] = this.fieldedittype;
    this.sendfieldrequest[this.myindex] = " ";
    
    this.myindex ++;
    this.fieldedit = "";
    this.fieldedittype="";
    
    
  }
  Test(){
    alert(this.myindex);
  }
randomize(){
 this.serverService.AddTemplate(this.templatename,this.sendfielddata,this.sendfieldtype,this.sendfieldrequest).subscribe(()=>{
      this.router.navigate(['/dashboard'],(err)=>{
        alert(err);
      });
    })

}

}
interface fieldlist{
    fielddata: string,
    fieldtype: string
}
export interface Element {
  id:string;
  name: string;
  date: string;
  employee: string;
}
interface recordTemp{
  templatename: String,
  date: String,
  survyor: String,
  sitename: String,
  fieldsdata: String,
  fieldstype:String,
  fieldsrequest:String,
  
 
}

