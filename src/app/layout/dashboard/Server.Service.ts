import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class ServerService{
public test:any = undefined;
public interurl = 'https://tasktracker.solutions/';

//public interurl = 'http://212.118.13.26/';
constructor(private http:Http){}
readTasks(): Observable<any>{
   return this.http.get('http://212.118.13.26/api/v1/task/');
}
readEmployee(){
    return this.http.get('http://212.118.13.26/api/v1/emp');
}


getAllDelayedTasks(){
	return this.http.get(this.interurl + 'apitask/v1/devision/getalldelayed')

}


UpdateDueDate(taskid:string,newduedate:string,justification:string){
	return this.http.put(this.interurl + 'apitask/v1/devision/updateduedatehis',{
		"taskid":taskid,
		"newdate":	newduedate,
		"justification":justification

	})
}


UpdateOwner(taskid:string,newonwer:string){
	return this.http.put(this.interurl+'apitask/v1/devision/updateowner',{
		"taskid":taskid,
		"newowner":newonwer
	})
}

teststring(sanad:JSON){
	
	this.test = sanad;
	
}
getteststring(){
	return this.test;
}
GetTaskNumByType(div:string,div1:string){
	return this.http.get(this.interurl+ 'apitask/v1/devision/getnumfortype/' + div+'/'+div1);
}
GetTaskNumByDiv(div:string){
	return this.http.get(this.interurl+'apitask/v1/devision/gettasknum/' + div);
}

GetTaskDelayByDiv(div:string){
	return this.http.get(this.interurl+'apitask/v1/devision/getdelayed/' + div);
}
GetTaskRecordByDiv(div:string){
	return this.http.get(this.interurl+'apitask/v1/devision/getrecordbydiv/' + div);
}

readTaskApproval(){
    return this.http.get('https://212.118.13.26/api/v1/taskapproval');
}
AddTask(){
    return this.http.post('https://212.118.13.26/api/v1/emp/add',{
	"empname":"Ahmad Marahfeh",
	"empusername":"a.marahfeh@umniah.com",
	"emppassword":"umniah@123",
	"empregtoken":"1",
	"emplat":"",
	"emplong":""
})
}
CloseTask(taskid:string,closingstatus:string,closer:string){
return this.http.put(this.interurl+'apitask/v1/devision/closetask',{
		"taskid":taskid,
	"closestatus":closingstatus,
	"closer":closer
})
}
UpdateDescription(taskid:string,description:string){
	return this.http.put(this.interurl+'apitask/v1/devision/updatedescription',{
		"taskid":taskid,
		"description":description
});
}


getSiteList(){
	return this.http.get('https://212.118.13.26/api/v1/sites');
}


getTaskList(){
	return this.http.get('https://212.118.13.26/api/v1/taskname');
}


NewTask(sitename:string,taskname:string,taskcat:string,assinedto:string){
	return this.http.post('https://212.118.13.26/api/v1/task/add',{
		"sitename":sitename,
		"taskname":taskname,
		"taskcat":taskcat,
		"taskassignedto":assinedto
	})	
}



UpdateTask(id:string,action:string,username:string){
	
	return this.http.put('https://212.118.13.26/api/v1/taskapproval/updateaction',{
		"id": id,
		"description":action,
		"username": username
	})
}


GetRecord(){
	return this.http.get('https://212.118.13.26/api/v1/record');
}


authenticateEmployee(username:string,password:string){
	return this.http.post('https://212.118.13.26/api/v1/emp/authemp/'+username,{
		"password": password
	})
}


AddnewTask(taskname:string,taskcat:string){
	return this.http.post('https://212.118.13.26/api/v1/taskname/add',{"taskname":taskname,"taskcat":taskcat});
}


AddnewAction(actionname:string,trans:string){
	return this.http.post('https://212.118.13.26/api/v1/actionname/add',{"actionname":actionname,"trans":trans});
}



AddTemplate(templatename:string,data:string[],type:string[],request:string[]){
	return this.http.post('https://212.118.13.26/api/v1/template/add',{
		"name":templatename,
		"fielddata":data,
		"fieldtype":type,
		"fieldrequest":request
});
}


GetTemplateRecord(){
	return this.http.get('https://212.118.13.26/api/v1/templaterecord');
}


GetTemplateOne(id:string){
	return this.http.post('http://212.118.13.26/api/v1/templaterecord/find',{"id":id});

}
DeleteTask(id:string){
	return this.http.get('http://212.118.13.26/api/v1/task/delete/'+id);

}
GetAlltasks(){
	return this.http.get(this.interurl+'apitask/v1/devision/');
}
GetAlltasksRecord(){
	return this.http.get(this.interurl+'apitask/v1/devisionrecord/');
}
GetAlltasks1(name:string){
	return this.http.put(this.interurl+'apitask/v1/devision/findempdiv/',{
	"name":name
})
}
GetAlltasksPending(name:string){
	return this.http.get(this.interurl+'apitask/v1/pending/returndiv/'+name);
}
GetAlltasks2(name:string){
	return this.http.put(this.interurl+'apitask/v1/devision/findtaskbydiv/',{
		"name":name
})
}
AddDivision(name:string){
	return this.http.post(this.interurl+'apitask/v1/ownerdivision/adddiv',{"name":name});

}

getEmps(){
	return this.http.get(this.interurl+'apitask/v1/owner/');
}
getDivs(){
	return this.http.get(this.interurl+'apitask/v1/ownerdivision');
}


getAuth(username: string,password: string){
	return this.http.post(this.interurl+'apitask/v1/owner/auth',{
		"username":username,
		"password":password
	})
}


getempdata(username:string){
	return this.http.put(this.interurl+'apitask/v1/owner/empdata',{"username":username});

}
updatedivisionEmp(divisionname: string, employeename: string){
	return this.http.put(this.interurl+'apitask/v1/ownerdivision/updateemp',{
		"name":divisionname,
		"empname":employeename

	})
}
AddOwner(name:string, username:string,password:string,email:string,auth:string){
	return this.http.post(this.interurl+'apitask/v1/owner/add',{
		"name":name,
	"username":username,
	"password":password,
	"email":email,
	"auth": auth

	});
}

GetTaskByID(id:string){
	return this.http.get(this.interurl+'apitask/v1/devision/find/'+id);
}
GetPendingByID(id:string){
	return this.http.get(this.interurl+'apitask/v1/pending/find/'+id);
}
GetTaskRecordByID(id:string){
	return this.http.get(this.interurl+'apitask/v1/devisionrecord/find/'+id);
}
AddTaskTracker(taskname:string,description:string,taskowner:string,tasktype:string,project:string,duedate:string,entityarray:any){
	return this.http.post(this.interurl+'apitask/v1/devision/add',{
		"taskname":taskname,
		"description":description,
		"taskownmer":taskowner,
		"tasktype":tasktype,
		"project": project,
		"duedate":duedate,
		"entities":entityarray,


	})

}
UpdatePendingTask(taskid:string, pendingid:string, feedback:string,pendingtaskid:string){
return this.http.put(this.interurl+'apitask/v1/devision/findpending',{
	"taskid":taskid,
	"pendingid":pendingid,
	"pendingtaskid":pendingtaskid,
	"feedback":feedback});

}
UpdatePedning(taskid:string,pendingon:string,subtask:string){
	return this.http.post(this.interurl+'apitask/v1/devision/updatepending',{
		"taskid":taskid,
		"pendingon":pendingon,
		"taskdelegate":subtask,
		"taskdescription":subtask,
		"feedback":""
	})
}
AddPending(taskid:string,pendingon:string,taskdescription:string,feedback:string){
	return this.http.post(this.interurl+'apitask/v1/pending/addpending',{
		"taskid":taskid,
		"pendingon": pendingon,
		"taskdescription":taskdescription,
		"feedback":""
	})

}
UpdateTaskTracker(taskid:string,progress:string,duedate:string,relatedpr:string,relatedpo:string,update:string,updater:string,entityupdate:any,prstatus:string,ponumber:string,postatus:string,actualbudget:string,budgetreserved:string,budgetline:string,dateofupdate:string,flag:string){
	return this.http.put(this.interurl+'apitask/v1/devision/updatetask',{
			"taskid":taskid,
	"progress":progress,
	"duedate":duedate,
	"prnumber":relatedpr,
	"prstatus":prstatus,
	"ponumber":ponumber,
	"postatus":postatus,
	"relatedpo":relatedpo,
	"name":updater,
	"budgetline":budgetline,
	"budgetreserved":budgetreserved,
	"actualbudget":actualbudget,
	"update":entityupdate,
"dateofupdate":dateofupdate,
	"flag":flag
	});
}
AddEntity(taskid:string, entityname:string, updater:string){
return this.http.put(this.interurl+'apitask/v1/devision/addentity',{
	"taskid":taskid,
	"entityname":entityname,
	"entityupdate":'',
	"updater": updater 
})
}
UpdateTaskHistory(taskid:string,entityhistory:any){
	return this.http.put(this.interurl+'apitask/v1/devision/updatehistory',{
			"id":taskid,
		"history":entityhistory

	});
}
}
