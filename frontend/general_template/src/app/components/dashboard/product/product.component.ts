import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dashboard-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  listProduct: Product[] = [];
  name: string = '';
  description: string = '';
  editingProduct: Product | null = null;

  constructor(
    private _productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._productService.getProduct().subscribe((data) => {
      console.log(data);
      this.listProduct = data;
    });
  }

  addProduct() {
    if (this.name == '' || this.description == '') {
      this.toastr.error('Por favor, complete todos los campos', 'Error');
      return;
    }

    if (this.editingProduct) {
      // Actualizar producto existente
      const updatedProduct: Product = {
        ...this.editingProduct,
        name: this.name,
        description: this.description,
      };

      this._productService.updateProduct(updatedProduct).subscribe({
        next: (data) => {
          // Actualizar la lista completa después de la actualización
          this.getProduct();
          this.toastr.success('Producto actualizado', 'Éxito');
          this.clearForm();
        },
        error: (error) => {
          this.toastr.error('Error al actualizar el producto', 'Error');
        },
      });
    } else {
      // Crear nuevo producto
      const product: Product = {
        id: 0, // El backend asignará el ID
        name: this.name,
        description: this.description,
      };

      this._productService.addProduct(product).subscribe({
        next: (data) => {
          // Actualizar la lista completa después de agregar
          this.getProduct();
          this.toastr.success('Producto agregado', 'Éxito');
          this.clearForm();
        },
        error: (error) => {
          this.toastr.error('Error al agregar el producto', 'Error');
        },
      });
    }
    this.getProduct();
  }

  deleteProduct(id: number) {
    this._productService.deleteProduct(id).subscribe({
      next: (data) => {
        // Actualizar la lista completa después de eliminar
        this.getProduct();
        this.toastr.success('Producto eliminado', 'Éxito');
      },
      error: (error) => {
        this.toastr.error('Error al eliminar el producto', 'Error');
      },
    });
    this.getProduct();
  }

  loadProductToEdit(product: Product) {
    this.editingProduct = product;
    this.name = product.name;
    this.description = product.description;
  }

  clearForm() {
    this.name = '';
    this.description = '';
    this.editingProduct = null;
  }
}
