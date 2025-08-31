import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private AppUrl: string;
  private APIUrl: string;

  constructor(private http: HttpClient) {
    this.AppUrl = environment.apiUrl;
    this.APIUrl = 'api/product';
  }

  getProduct(): Observable<Product[]> {
    const token = localStorage.getItem('myToken');
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Product[]>(
      `${this.AppUrl}${this.APIUrl}/getProducts`,
      { headers: header }
    );
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.AppUrl}${this.APIUrl}/register`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.AppUrl}${this.APIUrl}/deleteProduct/${id}`);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.AppUrl}${this.APIUrl}/updateProduct/${product.id}`, product);
  }
}
