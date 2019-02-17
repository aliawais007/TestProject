import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  getCategories(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/api/category");
  }
  getSpecificCategories(companyId:number): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/api/company/"+companyId);
  }
  getSpecificProducts(categoryId:number): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/api/category/"+categoryId);
  }
  getCompanies(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/api/company");
  }

}
