import { Component, OnInit } from '@angular/core';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';
import { FoodCarePackage } from '../../admin-home/package-mgmt/package';
@Component({
selector: 'app-subscribe',
templateUrl: './subscribe.component.html',
styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
packages: any[];

constructor(private packageService : PackageMgmtService) {

}
selectedPackages: any[]=[]
selectedIDs: any[]=[]
action(f){
for(var key in f.value)
{
if(f.value[key]===true)
{
if(this.selectedIDs.indexOf(key) == -1){
this.selectedIDs.push(key)
}
}
}
this.selectedIDs.forEach((val)=>{
this.packageService.loadPackage(val).subscribe((item:FoodCarePackage)=>{
item['stock'] -= 1
this.packageService.updatePackage(item,val).subscribe(()=>{
this.packageService.loadPackageData().subscribe((val)=>{
this.packages = val;
});
});

    });
  });

  this.packageService.subscribePackage(this.selectedIDs)
}

ngOnInit() {
this.packageService.loadPackageData().subscribe((val)=>{
this.packages = val;
});
}

}