import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Post } from "../../entity/post";

export class CreateBoard implements Seeder {
  async run(factory: Factory, connection: Connection) {
    const board = await factory(Post)().createMany(100);
    await connection.getRepository(Post).save(board);
  }
}
