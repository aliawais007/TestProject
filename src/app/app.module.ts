import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyCategoriesComponent } from './company-categories/company-categories.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CompanyComponent } from './company/company.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    MainComponent,
    CompanyCategoriesComponent,
    CategoryProductsComponent,
    DashboardComponent,
    DashboardHomeComponent,
    CompanyComponent,
    CategoryComponent,
    ProductsComponent,
    OrdersComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
