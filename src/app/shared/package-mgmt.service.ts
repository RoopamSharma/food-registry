import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodCarePackage } from '../home-page/admin-home/package-mgmt/package';
import { map } from 'rxjs/operators';
import { SessionStorageService } from 'angular-web-storage';
@Injectable({
  providedIn: 'root'
})
export class PackageMgmtService {
  
  constructor (private http:HttpClient,private session:SessionStorageService) {}
  addPackageToDB (fcpackage:FoodCarePackage) {
    //console.log("Recipe added to the database!");
      this.http.post('https://roopam-tcs.firebaseio.com/fcpackage.json', fcpackage).subscribe(mydata=>{
        console.log("Added data");
      });
    }
    
  updatePackage(fcpackage:any,id){
    console.log(fcpackage)
    return this.http.put('https://roopam-tcs.firebaseio.com/fcpackage/'+id+".json", fcpackage);
    };
  

  loadPackageData(){
    return this.http.get(
      'https://roopam-tcs.firebaseio.com/fcpackage.json'
    )
    .pipe(
      map(responseData => {
        const postsArray: any[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }
  deletePackage(id){
    console.log("id in delete is: "+id);
    this.http.delete('https://roopam-tcs.firebaseio.com/fcpackage/'+id+".json").subscribe(mydata=>{
      console.log("Deleted data");
    });
  }

  loadSubscriberData(){
    return this.http.get(
    'https://roopam-tcs.firebaseio.com/UserSubscriptions/'+this.session.get("user")+".json"
    )
    .pipe(
    map(responseData => {
    const postsArray: any[] = [];
    for (const key in responseData) {
    if (responseData.hasOwnProperty(key)) {
    postsArray.push({ ...responseData[key], id: key });
    }
    }
    return postsArray;
    })
    );
    }
    loadPackage(id){
    return this.http.get(
    'https://roopam-tcs.firebaseio.com/fcpackage/'+id+".json"
    )
    .pipe(
    map(responseData => {
    return responseData;
    })
    );
    }
    
    subscribePackage(getList : any[]){
    
    this.http.patch('https://roopam-tcs.firebaseio.com/UserSubscriptions/'+this.session.get("user")+".json",{packageList: getList }).subscribe(mydata=>{
    console.log("Added data");
    });
    }
    
}





