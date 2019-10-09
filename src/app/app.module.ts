import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UpdateHouseAdminComponent } from './home-page/admin-home/update-house-admin/update-house-admin.component';
import { ApprovePickupComponent } from './home-page/admin-home/approve-pickup/approve-pickup.component';
import { CreatePackageComponent } from './home-page/admin-home/package-mgmt/create-package/create-package.component';
import { UpdatePackageComponent } from './home-page/admin-home/package-mgmt/update-package/update-package.component';
import { UpdateHouseCustomerComponent } from './home-page/customer-home/update-house-customer/update-house-customer.component';
import { SubscribeComponent } from './home-page/customer-home/subscribe/subscribe.component';
import { ViewPackageComponent } from './home-page/customer-home/view-package/view-package.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {AdminHomeComponent} from './home-page/admin-home/admin-home.component';
import {CustomerHomeComponent} from './home-page/customer-home/customer-home.component';
import { PackageListComponent } from './home-page/admin-home/package-mgmt/package-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateHouseAdminComponent,
    ApprovePickupComponent,
    CreatePackageComponent,
    UpdatePackageComponent,
    UpdateHouseCustomerComponent,
    SubscribeComponent,
    ViewPackageComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    CustomerHomeComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
