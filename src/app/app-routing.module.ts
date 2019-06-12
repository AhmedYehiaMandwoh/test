import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { EditComponent } from './admin/admin-products/edit/edit.component';
import { ShopComponent } from './shop/shop.component';
import { ModelComponent } from './model/model.component';
const routes: Routes = [
    {path: '', component: ShopComponent},
    {path: 'model/:id', component: ModelComponent},
    {path: 'login', component: LoginComponent,},
    {path: 'admin/products/edit/:id', component: EditComponent, canActivate: [AuthGuardService]},
    {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService]},
    {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService]},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}