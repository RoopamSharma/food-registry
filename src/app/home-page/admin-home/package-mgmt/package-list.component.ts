import { Component, OnInit } from '@angular/core';
import { FoodCarePackage } from './package';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';

@Component({
selector: 'app-package-list',
templateUrl: './package-list.component.html',

})
export class PackageListComponent implements OnInit {
items:any[];
constructor(private packagemgmtservice:PackageMgmtService) { }

ngOnInit() {
    this.packagemgmtservice.loadPackageData().subscribe((val)=>{
        this.items = val;
    });
    console.log(this.items);
}
}