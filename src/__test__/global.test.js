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

//Probar una promesa
const reverseString2 = (str) => {
  return new Promise((resolve, rejects) => {
    if (!str) {
      rejects(Error('error'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('Pronar una promesa', () => {
  return reverseString2('Hola').then((string) => {
    expect(string).toBe('aloH');
  });
});

//Probar una Async Await
test('Probar async await', async () => {
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH');
});

// //Probar algo antes y despues de nuestras pruebas
// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));
