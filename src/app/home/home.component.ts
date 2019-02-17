import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private productsService:ProductsService) { }
  IsAuth:boolean;
  NotIsAuth:boolean;
  companies:any[];
  ngOnInit() {
    this.productsService.getCompanies().subscribe(res=>{
      this.companies=res['data'];
      console.log(this.companies);
    });
    if(localStorage.getItem("user")!=null){
      this.IsAuth=true;
      this.NotIsAuth=false;
    }
    else{
      this.IsAuth=false;
      this.NotIsAuth=true;
    }
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/home']);
    this.IsAuth=false;
      this.NotIsAuth=true;
  }

}
