import { Router } from '@angular/router';
import { ServerService } from './../dashboard/Server.Service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-appconfig',
  templateUrl: './appconfig.component.html',
  styleUrls: ['./appconfig.component.scss'],
  animations: [routerTransition()],
})
export class AppconfigComponent implements OnInit {
  taskName : string ;
  taskCat:string;
  actionName:string;
  actionTranslation:string;
  constructor(private serverService: ServerService, private router:Router) { }

  ngOnInit() {
  }

TaskAdd(){
  if((this.taskName != null) && (this.taskCat != null)){
this.serverService.AddnewTask(this.taskName,this.taskCat).subscribe(()=>{
  this.router.navigate(['/dashboard'],(err)=>{
    alert(err);
  })
})
  }else{
    alert('Please Fill All Fields!')
  }
}
ActionAdd(){
  if((this.actionName != null) && (this.actionTranslation != null)){
this.serverService.AddnewAction(this.actionName,this.actionTranslation).subscribe(()=>{
  this.router.navigate(['/dashboard'],(err)=>{
    alert(err);
  })
})
  }else{
    alert('Please Fill All Fields!')
  }
}
}
