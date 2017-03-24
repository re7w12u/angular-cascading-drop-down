import { Injectable } from '@angular/core';
import { Salesman } from './models/person';

@Injectable()
export class SalesmanService {

  constructor() { }

  get(): Array<Salesman>{
    return [
      {Id:1, Name:"Legrand", FirstName:"Jennifer", CompanyId:1, Company:null},
      {Id:4, Name:"Hannie", FirstName:"Christine", CompanyId:1, Company:null},
      {Id:2, Name:"Blanc", FirstName:"Cecilia", CompanyId:2, Company:null},
      {Id:5, Name:"Martel", FirstName:"Pierre", CompanyId:2, Company:null},
      {Id:3, Name:"Bossard", FirstName:"Marius", CompanyId:3, Company:null},
      {Id:6, Name:"Machard", FirstName:"Sophie", CompanyId:3, Company:null},
    ] ;
  }

}
