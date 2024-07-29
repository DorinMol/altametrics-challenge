### Altametrics challenge

Monorepo which includes the following projects:

- web application (react + vite)
- be application ( nestJS)
- shared packages (db - prisma)

#### How to run the project

1. Clone the repository
2. Run `pnpm install` in the root directory
3. Create a local database using docker ( `docker run --name altametrics -e POSTGRES_USER=altametrics -e POSTGRES_PASSWORD=altametrics -p 5432:5432 -v altametrics:/var/lib/postgresql/data -d postgres` )
4. Inside each of the packages, `rename .env.example to .env`
5. `pnpm -F @altametrics/db run seed` ( to seed the db )
6. `pnpm be-app:dev` ( to run the be application )
7. `pnpm web-app:dev` ( to run the web application )
8. On login page use the following credentials:
   - username: `altametrics@altametrics.com`
   - password: `altametrics`
