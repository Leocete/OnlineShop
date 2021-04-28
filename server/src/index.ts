import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';

import { schema } from './schema';
import { Users } from './entities/Users'

const main = async () => {
  await createConnection({
    type: 'postgres',
    port: 4000,
    database: 'online-shop',
    username: 'online-shop',
    password: 'online-shop',
    logging: true,
    synchronize: false,
    entities: [Users]
  });

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  })

}

main().catch((err) => {
  console.log(err);
})