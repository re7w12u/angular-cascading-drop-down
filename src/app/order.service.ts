import { Injectable } from '@angular/core';
import { Order } from './models/order';
import { Company } from './models/company';
import { Contrator, Salesman } from './models/person';
import { CompanyService } from './company.service';
import { ContractorService } from './contractor.service';
import { SalesmanService } from './salesman.service';


@Injectable()
export class OrderService {

  constructor(private contractorService:ContractorService,
              private salesmanService:SalesmanService,
              private companyService:CompanyService,) { }

  get(){
    const companies = this.companyService.get();
    const contractors = this.contractorService.get();
    const salesmans = this.salesmanService.get();

    let orders:Array<Order> = [];

    for(let i = 1; i < 4; i++){
       orders.push({
            Id:i,
            Numero: i,
            CompanyId:i,
            Company:null,
            ContratorId:i,
            Contrator:null,
            SalesmanId:i,
            Salesman:null
          });

    }

    return orders;

  }

}
