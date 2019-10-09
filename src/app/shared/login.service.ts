import { Injectable } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { getDefaultService } from 'selenium-webdriver/opera';

@Injectable({
providedIn: 'root'
})

export class LoginService {
admin : any[] = [{name:"Jeff", password:"theBest"}, {name:"Roopam" , password:"2ndBest"}]
customers : any[] = [{name:"Eric", password:"3rdBest"}, {name:"Harman", password:"4thBest"}]

verifyUser(value: any){
    if(value.rights == 'Admin'){
        this.admin.forEach((val)=>{
          console.log(val)
          if(val.name==value.uName && val.password==value.password){
            this.session.set("status",2);
            this.session.set("user",value.uName);
          }
        });
    }else{
      this.customers.forEach((val)=>{
        if(val.name==value.uName && val.password==value.password){
          this.session.set("status",3);
          this.session.set("user",value.uName);
        }
      });
    }
    console.log("The status is "+ this.getStatus());
    return this.getStatus();
}
constructor(public session: SessionStorageService) { }

getStatus(){
  if(this.session.get("status")){
    return this.session.get("status");
  }else{
    return 1;
  }
}
getUser(){
  console.log(this.session.get("user"));
  return this.session.get("user");
}
}