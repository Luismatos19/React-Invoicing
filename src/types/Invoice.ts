import { Company } from "./Company";
import { Costumer } from "./Costumer";
import { InvoiceIten } from "./InvoiceIten";

export interface Invoice {
  id: number;
  tax: number;
  invoice_number: number;
  logo: string;
  customer_info: Costumer;
  company_info: Company;
  items: InvoiceIten[];
}
