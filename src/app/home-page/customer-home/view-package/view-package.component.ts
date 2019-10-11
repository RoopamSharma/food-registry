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
unsubscribed=false;
constructor(private packageService : PackageMgmtService,private router:Router) { }
newList=[]
unsubscribedPackages: any[]=[]
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
this.packageService.loadPackage(val).subscribe((item)=>{
item['stock'] += 1
this.packageService.updatePackage(item,val).subscribe(()=>{
        console.log(val)               
    });
  });
})
this.unsubscribed = true;  
console.log(this.selectedIDs)
for(var k in this.packages){
  console.log(this.packages[k].id)
  console.log(this.selectedIDs.indexOf(this.packages[k].id))

  if(this.selectedIDs.indexOf(this.packages[k].id)==-1 && k!="id"){
    console.log(this.packages[k].id)
    this.newList.push(this.packages[k].id)
  }
}



this.packageService.subscribePackage(this.newList);
//this.router.navigate(['view-package-customer']);
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