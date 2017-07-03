import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";

import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title = "Product list";

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  edit(data) {
    this.dialog.open(EditProductComponent, {
      width: '400px',
      data: {product: "product name", threshold: 1234}
    });
  }
}
