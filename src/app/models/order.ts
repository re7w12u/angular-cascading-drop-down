import { Company } from './company';
import { Contrator, Salesman } from './person';


export class Order{
    Id:number;
    Numero:number;
    CompanyId:number;
    Company:Company;
    ContratorId:number;
    Contrator:Contrator;
    SalesmanId:number;
    Salesman:Salesman;
}