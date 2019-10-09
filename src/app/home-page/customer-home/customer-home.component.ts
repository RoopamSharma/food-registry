import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';

@Component({
selector: 'app-customer-home',
templateUrl: './customer-home.component.html',
//styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
username;
constructor(private loginService:LoginService) { 
    
}

ngOnInit() {
    this.username = this.loginService.getUser();
}

}