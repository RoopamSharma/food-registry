import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
status = this.loginservice.getStatus();

validateUser(credentials:NgForm)
{
console.log(credentials.value)
this.status = this.loginservice.verifyUser(credentials.value)
}
constructor(public router: Router,private loginservice: LoginService) { }

ngOnInit() {
}
register(){
    this.status = 0;
}
}