import { Component, OnInit } from '@angular/core';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-package-list',
templateUrl: './package-list.component.html',
styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
items:any[];
selectedItem;
constructor(private packagemgmtservice:PackageMgmtService,private router:Router) { }

ngOnInit() {
    this.packagemgmtservice.loadPackageData().subscribe((val)=>{
        this.items = val;
    });
    console.log(this.items);
}
loadData(item){
    this.selectedItem = item;
    this.router.navigate(['update-package',this.selectedItem])
}
}