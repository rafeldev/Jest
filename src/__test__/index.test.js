//prueba AnimalsRandom
const randomAnimals = require('../index');

describe('Probar funcionalidades de randomAnimals', () => {
  test('probar la funcionalidad', () => {
    expect(typeof randomAnimals()).toBe('string');
  });

  test('comprobar que no existe un animal', () => {
    expect(randomAnimals()).not.toMatch(/🦉/);
  });
});
