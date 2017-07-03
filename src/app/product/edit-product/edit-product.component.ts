import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogModule, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
