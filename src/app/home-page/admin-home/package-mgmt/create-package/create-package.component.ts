import { Component, OnInit } from '@angular/core';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  status:number;
  constructor(private packagemgmtservice:PackageMgmtService) { }

  ngOnInit() {
  }
  func(){
    console.log('gone out of focus');
  }
  func1(){
    console.log('in focus');
  }
  addPackage(ngf:NgForm){
    this.packagemgmtservice.addPackageToDB(ngf.value);
    this.status = 1;
    console.log('data added');
  }
}
