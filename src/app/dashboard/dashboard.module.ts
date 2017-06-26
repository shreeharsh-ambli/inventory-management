import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdGridListModule } from '@angular/material';
import { MdGridTile } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';

import { LowStockComponent } from './low-stock/low-stock.component';
import { StockLevelReportComponent } from './stock-level-report/stock-level-report.component';
import { TransactComponent } from './transact/transact.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    MdInputModule,
    MdSelectModule
  ],
  exports: [DashboardComponent],
  declarations: [LowStockComponent, StockLevelReportComponent, TransactComponent, DashboardComponent]
})
export class DashboardModule { }
