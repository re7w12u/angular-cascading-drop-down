import { Injectable } from '@angular/core';
import { Company } from './models/company';


@Injectable()
export class CompanyService {

  constructor() { }

 get(): Array<Company>{
      return [ 
        {Id:1, Name:"SOGETI",},
        {Id:2, Name:"VIVERIS"},
        {Id:3, Name:"HARDIS"},
      ];
    }

}
