import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule }from '@angular/fire/database';
import {AngularFireAuthModule  }from '@angular/fire/auth';
import {AngularFireAuth  }from '@angular/fire/auth';

import { environment } from 'src/environments/environment';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoriesService } from './services/categories.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { EditComponent } from './admin/admin-products/edit/edit.component';
import { ShopComponent } from './shop/shop.component';
import { ModelComponent } from './model/model.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminProductsComponent,
    LoginComponent,

    ProductFormComponent,
    EditComponent,
    ShopComponent,
    ModelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule
    ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
