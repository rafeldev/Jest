const animals = [
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🐻',
  '🐼',
  '🐨',
  '🐯',
  '🦁',
  '🐮',
  '🐷',
];

const randomAnimals = () => {
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return animal;
};

const reverseString2 = (str) => {
  return new Promise((resolve, rejects) => {
    if (!str) {
      rejects(Error('error'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

module.exports = randomAnimals;
