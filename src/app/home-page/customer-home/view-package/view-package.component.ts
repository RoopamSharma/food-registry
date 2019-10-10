import { Component, OnInit } from '@angular/core';
import { PackageMgmtService } from 'src/app/shared/package-mgmt.service';
@Component({
selector: 'app-view-package',
templateUrl: './view-package.component.html',
styleUrls: ['./view-package.component.css']
})
export class ViewPackageComponent implements OnInit {
packages : any [] = []
constructor(private packageService : PackageMgmtService) { }

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