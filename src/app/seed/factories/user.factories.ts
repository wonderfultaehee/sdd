import { define } from "typeorm-seeding";
import * as faker from "faker";
import { User } from "../../entity/user";

let count = 0;
define(User, () => {
  const email = faker.internet.email();
  const nickname = faker.internet.userName();

  const user = new User();
  user.email = email;
  user.password = nickname;
  console.log(count++);
  return user;
});
