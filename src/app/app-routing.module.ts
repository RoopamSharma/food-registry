import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePackageComponent } from './home-page/admin-home/package-mgmt/create-package/create-package.component';
import { UpdatePackageComponent } from './home-page/admin-home/package-mgmt/update-package/update-package.component';
import { UpdateHouseAdminComponent } from './home-page/admin-home/update-house-admin/update-house-admin.component';
import { ApprovePickupComponent } from './home-page/admin-home/approve-pickup/approve-pickup.component';
import { SubscribeComponent } from './home-page/customer-home/subscribe/subscribe.component';
import { UpdateHouseCustomerComponent } from './home-page/customer-home/update-house-customer/update-house-customer.component';
import { ViewPackageComponent } from './home-page/customer-home/view-package/view-package.component';
import { PackageListComponent } from './home-page/admin-home/package-mgmt/package-list.component';
import { AdminHomeComponent } from './home-page/admin-home/admin-home.component';

const routes: Routes = [
// from admin home files
{path:'app-admin-home',component:AdminHomeComponent},
{path: 'create-package', component: CreatePackageComponent},
{path: 'update-package', component: UpdatePackageComponent},
{path: 'update-house-admin', component: UpdateHouseAdminComponent },
{path: 'approve-pickup', component: ApprovePickupComponent},
{path: 'view-package-admin', component: PackageListComponent},

// from login and register
{path: 'subscribe', component: SubscribeComponent} ,
{path:'update-house-customer', component: UpdateHouseCustomerComponent},
{path:'view-package-customer', component: ViewPackageComponent},

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }