import { getUserById } from '../../src/js-foundation/03-callbacks';


describe('js-foundation/03-callbacks.ts', () => {


  // cuando le pasamos el parametro "done" al callback que le mandamos al test, le decimos a jest que no termine la prueba hasta que yo llame el done(), esto para el caso de que lo que estamos testeo sea asyncrono o tarde en terminar.
  test("getUserById should return an error if the user doesn't exist", (done) => {
    const id = 10;

    const user = getUserById(id, (err, user) => {

      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBe(undefined);

      done()


    });

  })

  test("getUserById should return the user if the user exists", (done) => {

    const id = 1;

    const user = getUserById(id, (err, user) => {

      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: 'John Doe' });
      done()
    })

  })

})