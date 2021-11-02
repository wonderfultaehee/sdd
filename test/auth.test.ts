import { UserService } from "./../src/app/service/user.service";
import { AuthController } from "./../src/app/controller/auth.controller";
import { User } from "../src/app/entity/user";
import * as faker from "faker";

jest.mock("./../src/app/service/user.service");

beforeEach(() => {});

describe("create user ", () => {
  it("return user ", async () => {
    const createUserReturnValue = {
      exUser: "1213",
      newUser: undefined,
    };
    let userService: UserService = {
      createUser: jest.fn().mockResolvedValueOnce(createUserReturnValue),
    } as any;

    let authController = new AuthController(userService);

    const request = {
      body: {
        email: "test",
        password: "test",
      },
    };
    const response = {};
    const next = {};
    const result = authController.signup(
      request as any,
      response as any,
      next as any
    );

    expect(result).resolves.toThrowError();
  });
});
