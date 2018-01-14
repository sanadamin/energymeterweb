import { ServerService } from './../layout/dashboard/Server.Service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    userName:string = '';
    password:string = '';
    constructor(public router: Router,private serverService:ServerService) {}

    ngOnInit() {}

    onLoggedin() {
        if((this.userName != '')&&(this.password != '')){
            this.serverService.authenticateEmployee(this.userName,this.password).subscribe((res)=>{
            console.log(res);
            console.log(res['_body']);
            if(res['_body']==='pass'){
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('userName',this.userName);
                this.router.navigate(['/dashboard']);
            }else{
                alert("Please Check Username and Password");
            }
            },(err)=>{
                alert(err);
            })
        }else{
            alert('please fill all fields');
        }
            // console.log(res['body']);
        
        // localStorage.setItem('isLoggedin', 'true');
        // this.router.navigate(['/dashboard']);
    }
}
