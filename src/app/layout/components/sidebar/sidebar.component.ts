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
constructor(private serverService:ServerService) {
    console.log(localStorage.getItem('level') );
   if(localStorage.getItem('level') === 'Admin'){
       this.isAdmin = true;
   }
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
