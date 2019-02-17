import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categories:any[];
  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getCategories().subscribe(res=>{
      this.categories=res['data'];
      console.log(this.categories);
    });
    
  }
  
  
}
