import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-company-categories',
  templateUrl: './company-categories.component.html',
  styleUrls: ['./company-categories.component.css']
})
export class CompanyCategoriesComponent implements OnInit {

  company: any[];
  companyCategories:any[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getSpecificCategories(id).subscribe(company => {
      this.company=company['data'];
      this.companyCategories=company['data']['category'];
      console.log(this.company);
      }
    );
  }

}
