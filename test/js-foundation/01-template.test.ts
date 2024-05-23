import { emailTemplate } from '../../src/js-foundation/01-template';


describe("js-foundation/01-template.ts", () => {
  test('emailTemplate should contain a greeting', () => {

    // el expect es como decir espero que...
    expect(emailTemplate).toContain('Hi, ');

  })


  test('emailTemplate should contain {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toContain('{{name}}');
    expect(emailTemplate).toContain('{{orderId}}');

    // esta es otra forma valida
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  })
})



