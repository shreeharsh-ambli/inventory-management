import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'low-stock',
  templateUrl: './low-stock.component.html',
  styleUrls: ['./low-stock.component.css']
})
export class LowStockComponent implements OnInit {
  title = "Low Stock";

  constructor() { }

  ngOnInit() {
  }

}
