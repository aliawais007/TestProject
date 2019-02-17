import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { CompanyCategoriesComponent } from './company-categories/company-categories.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CompanyComponent } from './company/company.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: "", redirectTo:"/home", pathMatch: "full"},
  { path: "home", component: HomeComponent, children:[
    { path: "", component: MainComponent}
  ]},
  { path: "cart", component: HomeComponent, children:[
    { path: "", component: CartComponent}
  ]},
  { path: "companyCategory/:id", component: HomeComponent, children:[
    { path: "", component: CompanyCategoriesComponent}
  ]},
  { path: "CategoryProducts/:id", component: HomeComponent, children:[
    { path: "", component: CategoryProductsComponent}
  ]},
  
  { path: "login", component: HomeComponent, children:[
    { path: "", component: UserComponent, children:[
      { path: "", component: LoginComponent}
    ]}
  ]},
  { path: "signup", component: HomeComponent, children:[
    { path: "", component: UserComponent, children:[
      { path: "", component: SignupComponent}
    ]}
  ]},
  { path: "dashboard", component: DashboardComponent, children:[
    { path: "", redirectTo: "dashboardHome", pathMatch:"full"},
    { path: "dashboardHome", component: DashboardHomeComponent},
    { path: "company", component: CompanyComponent},
    { path: "category", component: CategoryComponent},
    { path: "product", component: ProductsComponent},
    { path: "orders", component: OrdersComponent},
    { path: "settings", component: SettingsComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
