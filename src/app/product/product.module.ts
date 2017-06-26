import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';
import { MdInputModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdInputModule
  ],
  exports: [ProductComponent],
  declarations: [ProductListComponent, NewProductComponent, ProductComponent]
})
export class ProductModule { }
