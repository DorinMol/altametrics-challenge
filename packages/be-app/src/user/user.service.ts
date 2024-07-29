import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
  constructor(private readonly dbService: DbService) {}

  async findByEmail(email: string) {
    return this.dbService.user.findUnique({ where: { email } });
  }
}
