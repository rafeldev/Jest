//Probando un string
const text = 'Hola mundo';

test('Debe contener un texto', () => {
  expect(text).toMatch(/mundo/);
});

//Probando un array
const fruits = ['manzana', 'melon', 'banana'];

test('tenemos una banana', () => {
  expect(fruits).toContain('banana');
});

//Probando Números
test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

//Probando un Booleano
test('verdadero', () => {
  expect(true).toBeTruthy();
});

//Probar un Callback
const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('Probar un callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});
