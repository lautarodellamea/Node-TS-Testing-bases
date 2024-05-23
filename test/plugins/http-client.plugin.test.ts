import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {

  // no debemos probar axios, debemos probar nuestras funciones y metodos

  test("httpClientPlugin.get() shuld return a string ", async () => {

    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      // ponemos asi porque pueede ser que cambie la respuesta
      "completed": expect.any(Boolean)
    })
  })

  test("httpClientPlugin should have POST, PUT and DELETE methods", async () => {


    // aca nos aseguramos de que tengamos todos estos metodos
    expect(typeof httpClientPlugin.get).toBe('function');
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');

  })


})