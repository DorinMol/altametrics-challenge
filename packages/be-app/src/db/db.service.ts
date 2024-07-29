import { PrismaClient } from '@altametrics/db';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class DbService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
