import { Company} from './company';

export class Person{
    Id:number;
    Name:string;
    FirstName:string;
    CompanyId:number;
    Company:Company;
}

export class Salesman extends Person{}

export class Contrator extends Person{}