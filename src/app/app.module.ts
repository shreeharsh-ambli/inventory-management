import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdDialogContainer, MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductModule } from './product/product.module';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [MdDialogContainer, ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdDialogModule,
    DashboardModule,
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
