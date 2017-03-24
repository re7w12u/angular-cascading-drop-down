import { Injectable } from '@angular/core';
import { Contrator } from './models/person';

@Injectable()
export class ContractorService {

  constructor() { }

  get(): Array<Contrator>{
      return [ 
        {Id:1, Name:"Bismuth", FirstName:"Paul", CompanyId:1, Company:null},
        {Id:3, Name:"Bismuth", FirstName:"Paul", CompanyId:3, Company:null},
        {Id:2, Name:"Obama", FirstName:"Barack", CompanyId:2, Company:null},
        {Id:4, Name:"Simond", FirstName:"Pierre", CompanyId:1, Company:null},
        {Id:5, Name:"Demaison", FirstName:"Alain", CompanyId:3, Company:null},
        {Id:6, Name:"Terray", FirstName:"Lionel", CompanyId:2, Company:null},
      ];
    }

}
