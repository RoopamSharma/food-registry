import { Component, OnInit } from '@angular/core';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';
import { FoodCarePackage } from '../../admin-home/package-mgmt/package';
import { Router } from '@angular/router';
@Component({
selector: 'app-view-package',
templateUrl: './view-package.component.html',
styleUrls: ['./view-package.component.css']
})
export class ViewPackageComponent implements OnInit {
packages : any [] = []
constructor(private packageService : PackageMgmtService,private router:Router) { }

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
this.packageService.loadPackage(val).subscribe((item:any)=>{
item['stock'] += 1
this.packageService.updatePackage(item,val).subscribe(()=>{

        this.selectedIDs = this.selectedIDs.filter(a=>a!=item["id"]);         
    });

  });
});

this.packageService.subscribePackage(this.selectedIDs)
this.router.navigate(['app-view-package']);
}
ngOnInit() {
this.packageService.loadSubscriberData().subscribe(item => {
this.packageService.loadPackageData().subscribe(value => {
console.log(value)
console.log(item[0])
value.forEach(element=>{
for(var i in item[0]){
if(item[0][i]==element.id){
this.packages.push(element);
}
}
})
})
})

}
}