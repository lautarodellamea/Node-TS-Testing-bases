import { getUUID } from '../../src/plugins/get-id.plugin';
// en este caso no vamos a probar que el paquete uuid me devuelva muchos id diferentes, eso ya lo debe probar el que creo el paquete
// nosotros comprobaremos que mi adaptador genere lo que tenga que generar
// vamos a probar como esa libreria quiero o deba trabajar en mi aplicacion, la libreria en si es externa y la debe testear el creador
describe('plugins/get-id.plugin.ts', () => {

  test('getId should return a string', () => {

    const id = getUUID();

    expect(typeof id).toBe('string');
    expect(id.length).toBe(36);
  })
})

