import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { User } from "../../entity/user";

export class CreateUser implements Seeder {
  async run(factory: Factory, connection: Connection) {
    const user = await factory(User)().createMany(10);

    const result = await connection.getRepository(User).save(user);
  }
}
