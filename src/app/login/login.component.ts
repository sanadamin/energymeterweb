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
            this.serverService.getAuth(this.userName,this.password).subscribe((res)=>{
            console.log(res);
            console.log(res['_body']);
            let newres = res.json();
           
            
            console.log(newres['auth']);
            if(newres['auth']==='Approved'){
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('userName',this.userName);localStorage.setItem('level',newres['level']);
                this.router.navigate(['/owner']);
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
