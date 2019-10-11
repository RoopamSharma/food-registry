import { Component, OnInit } from '@angular/core';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';
import { FoodCarePackage } from '../../admin-home/package-mgmt/package';
@Component({
selector: 'app-subscribe',
templateUrl: './subscribe.component.html',
styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
packages: any[]=[];
subscribed = false;
constructor(private packageService : PackageMgmtService) {}
selectedPackages: any[]=[]
selectedIDs: any[]=[]
defaultPackages:any[]=[];
action(f:any){
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
// this.packageService.loadPackageData().subscribe((val)=>{
// this.packages = val;
// });
});

    });
  });
  this.selectedIDs = this.selectedIDs.concat(this.defaultPackages);
  this.packageService.subscribePackage(this.selectedIDs)
this.subscribed=true;
}

ngOnInit() {
  this.packageService.loadPackageData().subscribe((value)=>{
    this.packageService.loadSubscriberData().subscribe(item => {
      console.log(value)
      console.log(item[0])
      value.forEach(element=>{
        for(var i in item[0]){
          if(item[0][i]==element.id){
            value = value.filter((el)=>el.id!=element.id);
            this.defaultPackages.push(element.id)
          }
        }
      })
      this.packages = value;
    })
  })
  }
}