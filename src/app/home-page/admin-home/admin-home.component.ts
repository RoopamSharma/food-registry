import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Component({
selector: 'app-admin-home',
templateUrl: './admin-home.component.html',

})
export class AdminHomeComponent implements OnInit {
username;
loginStatus;
constructor(private loginService: LoginService,private router:Router,private session:SessionStorageService) { }

ngOnInit() {
    this.username = this.loginService.getUser();
    if(this.session.get("status")>1)
        this.loginStatus = true;
}
logout(){
    console.log('logged out');
    this.session.set("status",1);
    this.loginStatus=false;
    this.router.navigate(['app-login']);
}

}