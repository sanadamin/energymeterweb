import { ServerService } from './../../dashboard/Server.Service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    isAdmin = false;
    updatetasks = 0;
delayedtasks = 0; 
   currenttasks = 0;
    pendingtasks =0;
    myres = [];
    employeename = '';
    temo = [];
    
constructor(private serverService:ServerService) {
    console.log(localStorage.getItem('level') );
   if(localStorage.getItem('level') === 'Admin'){
       this.isAdmin = true;
   }

this.serverService.getAllDelayedTasks().subscribe((res)=>{
            let newres = res.json();
            this.delayedtasks = newres.length;


    });
this.serverService.getempdata(localStorage.getItem('userName')).subscribe((res)=>{
            
          let newres = res.json();
          this.employeename = newres['name'];  
          this.serverService.GetAlltasks1(this.employeename).subscribe((res)=>{
          let myres22 = res.json();
          let myind = 0;
          for(let j of myres22){
             this.serverService.GetAlltasksPending(j['name']).subscribe((res)=>{
      let myres1 = res.json();
      console.log(myres1)
         this.temo = [];
      for (let s of myres1){
		if(s['status'] == 'Open'){
            this.temo.push(s['_id']);
}
this.pendingtasks = this.temo.length;
      
}
      
     
             });
             
          }


           
          });
          });
this.serverService.GetAlltasks().subscribe((res)=>{
            
            let s = res.json();
            let length = [];        
    for (let i of s){
	    length.push(i['taskname']);
}
		this.currenttasks = length.length;
});
this.serverService.getempdata(localStorage.getItem('userName')).subscribe((res)=>{
          
          let newres = res.json();
          let employeename = newres['name'];  
          this.serverService.GetAlltasks1(employeename).subscribe((res)=>{
          let myres22 = res.json();
          let myind = 0;
          for(let j of myres22){
             this.serverService.GetAlltasks2(j['name']).subscribe((res)=>{
      let myres1 = res.json();
      
      for (let s of myres1){
        this.myres.push({id:s['_id'],taskname:s['taskname'],description:s['description'],progress:s['progress'],taskid:s['_id']});
        myind++;
        
      }
      this.updatetasks = this.myres.length;
    })
          }
        });
      
        });
}
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
