import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodCarePackage } from '../home-page/admin-home/package-mgmt/package';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PackageMgmtService {
  
  constructor (private http:HttpClient) {}
  addPackageToDB (fcpackage:FoodCarePackage) {
    //console.log("Recipe added to the database!");
      this.http.post('https://roopam-tcs.firebaseio.com/fcpackage.json', fcpackage).subscribe(mydata=>{
        console.log("Added data");
      });
    }
    
  updatePackage(fcpackage:FoodCarePackage,id){
    console.log(id);
    this.http.put('https://roopam-tcs.firebaseio.com/fcpackage/'+id, fcpackage).subscribe(mydata=>{
      console.log("Updated data");
    });
  }

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

}





