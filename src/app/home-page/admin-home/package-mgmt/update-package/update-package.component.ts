import { Component, OnInit, Input } from '@angular/core';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';
import { NgForm } from '@angular/forms';
import { FoodCarePackage } from '../package';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit {
  status:number;
  @Input()
  fcpackage: FoodCarePackage;
  constructor(private packagemgmtservice:PackageMgmtService) { }

  ngOnInit() {
  }
  func(){
    console.log('gone out of focus');
  }
  func1(){
    console.log('in focus');
  }
  updatePackage(ngf:NgForm,id){
    this.packagemgmtservice.updatePackage(ngf.value,encodeURIComponent(id));
    this.status = 1;
    console.log('data updated');
  }
}
