import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class ServerService{
constructor(private http:Http){}
readTasks(): Observable<any>{
   return this.http.get('http://212.118.13.26/api/v1/task/');
}
readEmployee(){
    return this.http.get('http://212.118.13.26/api/v1/emp');
}
readTaskApproval(){
    return this.http.get('http://212.118.13.26/api/v1/taskapproval');
}
AddTask(){
    return this.http.post('http://212.118.13.26/api/v1/emp/add',{
	"empname":"Ahmad Marahfeh",
	"empusername":"a.marahfeh@umniah.com",
	"emppassword":"umniah@123",
	"empregtoken":"1",
	"emplat":"",
	"emplong":""
})
}
getSiteList(){
	return this.http.get('http://212.118.13.26/api/v1/sites');
}
NewTask(sitename:string,taskname:string,taskcat:string,assinedto:string){
	return this.http.post('http://212.118.13.26/api/v1/task/add',{
		"sitename":sitename,
		"taskname":taskname,
		"taskcat":taskcat,
		"taskassignedto":assinedto
	})	
}
UpdateTask(id:string,action:string,username:string){
	username = 'tests.amin@umniah.com'
	return this.http.put('http://212.118.13.26/api/v1/taskapproval/updateaction',{
		"id": id,
		"description":action,
		"username": username
	})
}
GetRecord(){
	return this.http.get('http://212.118.13.26/api/v1/record');
}
}
