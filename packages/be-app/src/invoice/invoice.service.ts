import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class InvoiceService {
  constructor(private readonly dbService: DbService) {}
  async findAll() {
    return this.dbService.invoice.findMany();
  }

  async findOne(id: string) {
    return this.dbService.invoice.findUnique({
      where: { id },
    });
  }

  async aggregateInvoiceTotal() {
    const allInvoices = await this.findAll();

    const total = allInvoices.reduce((acc, invoice) => {
      return acc + invoice.amount;
    }, 0);

    return { total };
  }
}
