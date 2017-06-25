import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProductComponent],
  declarations: [ProductListComponent, NewProductComponent, ProductComponent]
})
export class ProductModule { }
