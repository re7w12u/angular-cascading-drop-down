import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderService } from './order.service'
import { ContractorService } from './contractor.service'
import { SalesmanService } from './salesman.service';
import { CompanyService } from './company.service';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component'
import { ROUTES } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ OrderService, ContractorService, SalesmanService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
