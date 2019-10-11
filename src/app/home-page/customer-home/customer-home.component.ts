import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
selector: 'app-customer-home',
templateUrl: './customer-home.component.html',
//styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
username;
constructor(private loginService:LoginService,private session:SessionStorageService,private router:Router) { 
    
}
loginStatus;
ngOnInit() {
    this.username = this.loginService.getUser();
    this.loginStatus = true;
}
logout(){
    console.log('logged out');
    this.session.set("status",1);
    this.loginStatus=false;
    this.router.navigate(['/']);
}
}