// index.test.js
const holaMundo = require('./Index');

test('debería retornar "Hola, mundo!"', () => {
    expect(holaMundo()).toBe("Hola, mundo!");
});
