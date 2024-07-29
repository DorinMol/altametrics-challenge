import { faker } from '@faker-js/faker';
import { Invoice, PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient()

const userId = 'clz486io7000108l3dwkg1g67'

async function createUser(): Promise<Omit<User, 'createdAt' | 'updatedAt'>> {
  const hashedPassword = await bcrypt.hash('altametrics', 10);
  return {
    id: userId,
    email: 'altametrics@altametrics.com',
    password: hashedPassword,
    name: 'Altametrics',
  }
}

function createRandomInvoice(): Omit<
  Invoice,
  'id' | 'createdAt' | 'updatedAt'
> {
  return {
    userId,
    vendorName: faker.company.name(),
    dueDate: faker.date.future(),
    description: faker.lorem.sentence(),
    amount: Number(faker.finance.amount()),
    paid: faker.datatype.boolean(),
  }
}

async function main() {
  const user = await createUser()
  const invoices = faker.helpers.multiple(createRandomInvoice, {
    count: 5,
  })

  await prisma.user.create({
    data: user,
  })

  await prisma.invoice.createMany({
    data: invoices,
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
