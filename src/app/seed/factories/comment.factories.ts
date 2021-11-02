import { define } from "typeorm-seeding";
import * as faker from "faker";
import { Comment } from "../../entity/comment.entity";

let count = 0;
define(CommentEntity, () => {
  const comment = new CommentEntity();

  comment.postId = "6180faf8bd9be3af5ff765ce";

  comment.depth = 1;

  comment.parentId = "61813c4cc43dd6c9e23e78b1";

  comment.userId = "61813be7c73177c963c9da5f";

  comment.text = faker.lorem.sentence();

  console.log(count++);
  if (count > 1000000) console.log("백만 넘음");

  return comment;
});
