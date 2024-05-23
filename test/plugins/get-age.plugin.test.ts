import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {


  test("getAge() should return the age of the person", () => {

    const birthdate = '1998-01-17';
    const age = getAge(birthdate);

    expect(age).toBe(26);
    expect(typeof age).toBe('number');
  })


  test("getAge should return current age", () => {

    const birthdate = '1998-01-17';
    const age = getAge(birthdate);

    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  })

  // espias - SpyOn
  // al realizar pruebas aca vemos que el getAge tiene dependencias como por ejemplo el Date y el metodo en aprticular getFullYear
  test("getAge should return 0 years", () => {
    // al .spyOn le decimos que espie el Date y el metodo getFullYear
    // con el mockReturnValue le decimos que devuelva el 1995, un valor por defecto
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    // siquisieramos setear el getFullYear con un mockReturnValue de 1995 a modo global debo sacarlo fuera de todos las test

    const birthdate = '1995-01-17';
    const age = getAge(birthdate);

    expect(age).toBe(0);

    // hacemos une xpect de que el spy halla sido llamado, es este caso que la funcion getFullYear ha sido llamada dentro del codigo
    expect(spy).toHaveBeenCalled();

    // aca le podemos escribir si fue llamado con el objeto {a:0} el getFullYear pero sabemos que lo llamamos sin argumentos.
    // expect(spy).toHaveBeenCalled({ a: 1 });
  })


})