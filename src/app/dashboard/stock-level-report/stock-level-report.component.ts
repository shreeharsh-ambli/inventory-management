import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock-level-report',
  templateUrl: './stock-level-report.component.html',
  styleUrls: ['./stock-level-report.component.css']
})
export class StockLevelReportComponent implements OnInit {
  title = "Stock level report";

  constructor() { }

  ngOnInit() {
  }

}
