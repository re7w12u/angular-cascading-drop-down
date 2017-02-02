import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Order } from '../models/order';
import { Company } from '../models/company';
import { Contrator, Salesman } from '../models/person';
import { CompanyService } from '../company.service';
import { ContractorService } from '../contractor.service';
import { SalesmanService } from '../salesman.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  companies:Array<Company> =[];
  contractors:Array<Contrator> =[];
  salesmans:Array<Salesman> =[];
  orders:Array<Order> =[];
  order:Order;

  filteredContractors:Array<Contrator> =[];
  filteredSalesmans:Array<Salesman> =[];

   constructor(private contractorService:ContractorService,
              private salesmanService:SalesmanService,
              private companyService:CompanyService,
              private orderService:OrderService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.companies = this.companyService.get();
    this.contractors = this.contractorService.get();
    this.salesmans = this.salesmanService.get();
    this.orders = this.orderService.get();

    const id = this.route.snapshot.params['id'];    
    this.order = this.orders.find(x => x.Id == id);
    this.filter(this.order.Id);

    this.order.Company = this.companies.find(x => x.Id == this.order.CompanyId);
    this.order.Contrator = this.contractors.find(x => x.Id == this.order.ContratorId);
    this.order.Salesman = this.salesmans.find(x => x.Id == this.order.SalesmanId);
  }

  filter(id:number){
    this.filteredContractors = this.contractors.filter(x => x.CompanyId === id);
    this.order.Contrator = this.filteredContractors[0];
    this.order.ContratorId = this.filteredContractors[0].Id;

    this.filteredSalesmans = this.salesmans.filter(x => x.CompanyId === id);
    this.order.Salesman = this.filteredSalesmans[0];
    this.order.SalesmanId = this.filteredSalesmans[0].Id;
  }

  companyChanged($event){  
    this.filter($event);
  }

}
