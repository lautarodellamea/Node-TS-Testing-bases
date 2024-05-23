import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks.ts", () => {

  test("getUserById should return an error if the user doesn't exist", () => {

    const id = 10;

    const user = getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBe(undefined);
    });

  })

  test("getUserById should return the user if the user exists", () => {
    const id = 1;

    const user = getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: 'John Doe' });
    });
  })
})