import { define } from "typeorm-seeding";
import * as faker from "faker";
import { Post } from "../../entity/post";

define(Post, () => {
  const title = faker.lorem.sentence();
  const content = faker.lorem.sentences();

  const post = new Post();

  post.title = title;
  post.text = content;

  return post;
});
