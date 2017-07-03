import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';
import { MdInputModule, MdDialogModule } from '@angular/material';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdDialogModule
  ],
  entryComponents: [EditProductComponent, ],
  exports: [ProductComponent],
  declarations: [ProductListComponent, NewProductComponent, ProductComponent, EditProductComponent]
})
export class ProductModule { }
