// index.test.js
const holaMundo = require('./index.');

test('debería retornar "Hola, mundo!"', () => {
    expect(holaMundo()).toBe("Hola, mundo!");
});
