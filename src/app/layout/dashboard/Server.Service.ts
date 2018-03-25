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
getTaskList(){
	return this.http.get('http://212.118.13.26/api/v1/taskname');
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
	
	return this.http.put('http://212.118.13.26/api/v1/taskapproval/updateaction',{
		"id": id,
		"description":action,
		"username": username
	})
}
GetRecord(){
	return this.http.get('http://212.118.13.26/api/v1/record');
}
authenticateEmployee(username:string,password:string){
	return this.http.post('http://212.118.13.26/api/v1/emp/authemp/'+username,{
		"password": password
	})
}
AddnewTask(taskname:string,taskcat:string){
	return this.http.post('http://212.118.13.26/api/v1/taskname/add',{"taskname":taskname,"taskcat":taskcat});
}
AddnewAction(actionname:string,trans:string){
	return this.http.post('http://212.118.13.26/api/v1/actionname/add',{"actionname":actionname,"trans":trans});
}
AddTemplate(templatename:string,data:string[],type:string[],request:string[]){
	return this.http.post('http://212.118.13.26/api/v1/template/add',{
		"name":templatename,
		"fielddata":data,
		"fieldtype":type,
		"fieldrequest":request
});
}
GetTemplateRecord(){
	return this.http.get('http://212.118.13.26/api/v1/templaterecord');
}
GetTemplateOne(id:string){
	return this.http.post('http://212.118.13.26/api/v1/templaterecord/find',{"id":id});

}
DeleteTask(id:string){
	return this.http.get('http://212.118.13.26/api/v1/task/delete/'+id);

}
GetAlltasks(){
	return this.http.get('http://127.0.0.1:3005/api/v1/devision/');
}
AddDivision(name:string){
	return this.http.post('http://127.0.0.1:3005/api/v1/ownerdivision/adddiv',{"name":name});

}

getEmps(){
	return this.http.get('http://127.0.0.1:3005/api/v1/owner/');
}
getDivs(){
	return this.http.get('http://127.0.0.1:3005/api/v1/ownerdivision');
}
getAuth(username: string,password: string){
	return this.http.post('http://127.0.0.1:3005/api/v1/owner/auth',{
		"username":username,
		"password":password
	})
}
getempdata(username:string){
	return this.http.put('http://127.0.0.1:3005/api/v1/owner/empdata',{"username":username});

}
updatedivisionEmp(divisionname: string, employeename: string){
	return this.http.put('http://127.0.0.1:3005/api/v1/ownerdivision/updateemp',{
		"name":divisionname,
		"empname":employeename

	})
}
AddOwner(name:string, username:string,password:string,email:string,auth:string){
	return this.http.post('http://127.0.0.1:3005/api/v1/owner/add',{
		"name":name,
	"username":username,
	"password":password,
	"email":email,
	"auth": auth

	});
}
GetTaskByID(id:string){
	return this.http.get('http://127.0.0.1:3005/api/v1/devision/find/'+id);
}
AddTaskTracker(taskname:string,description:string,taskowner:string,tasktype:string,project:string,duedate:string,entityarray:any){
	return this.http.post('http://127.0.0.1:3005/api/v1/devision/add',{
		"taskname":taskname,
		"description":description,
		"taskownmer":taskowner,
		"tasktype":tasktype,
		"project": project,
		"duedate":duedate,
		"entities":entityarray
		
	})

}
UpdateTaskTracker(taskid:string,progress:string,duedate:string,relatedpr:string,relatedpo:string,update:string,updater:string,entityupdate:any){
	return this.http.put('http://127.0.0.1:3005/api/v1/devision/updatetask',{
			"taskid":taskid,
	"progress":progress,
	"duedate":duedate,
	"relatedpr":relatedpr,
	"relatedpo":relatedpo,
	"name":updater,
	"update":entityupdate

	});
}
UpdateTaskHistory(taskid:string,entityhistory:any){
	return this.http.put('http://127.0.0.1:3005/api/v1/devision/updatehistory',{
			"id":taskid,
		"history":entityhistory

	});
}
}
