import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
selector: 'app-admin-home',
templateUrl: './admin-home.component.html',

})
export class AdminHomeComponent implements OnInit {
username;
constructor(private loginService: LoginService) { }

ngOnInit() {
    this.username = this.loginService.getUser();
}

}