import { Component, OnInit, Input } from '@angular/core';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';
import { NgForm } from '@angular/forms';
import { FoodCarePackage } from '../package';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit {
  status:number;
  fcpackage: FoodCarePackage;
  constructor(private packagemgmtservice:PackageMgmtService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.fcpackage = new FoodCarePackage(this.route.snapshot.paramMap.get('ptype'),this.route.snapshot.paramMap.get('pname'),this.route.snapshot.paramMap.get('desc'),this.route.snapshot.paramMap.get('stock'));
    this.fcpackage["id"] = this.route.snapshot.paramMap.get("id");
  }
  func(){
    console.log('gone out of focus');
  }
  func1(){
    console.log('in focus');
  }
  updatePackage(ngf:NgForm,id){
    this.packagemgmtservice.updatePackage(ngf.value,encodeURIComponent(id)).subscribe();
    this.status = 1;
    console.log('data updated');
  }
  deletePackage(id){
    console.log("the id passed is: ",id);
    this.packagemgmtservice.deletePackage(id);
    console.log("data deleted");
  }
}
