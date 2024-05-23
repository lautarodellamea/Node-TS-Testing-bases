import { buildMakePerson } from '../../src/js-foundation/05-factory';


describe("js-foundation/05-factory.ts", () => {

  // Como solo estamos testeando que la factory function devuelva una funcion, no me interesa probar estas 2 fucniones
  const getUUID = () => {
    return '123';
  }
  const getAge = () => {
    return 10;
  }


  test("buildMakePerson should return a function", () => {


    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe('function');
    // expect(makePerson).toBeInstanceOf(Function);

  })


  test("makePerson should return a person", () => {


    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: 'John', birthdate: '1985-10-21' });

    // console.log(johnDoe)

    expect(johnDoe).toEqual({ id: '123', name: 'John', birthdate: '1985-10-21', age: 10 });

  })

})