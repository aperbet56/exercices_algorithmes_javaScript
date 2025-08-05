// Exercice 16 : Classer / Trier les nombres par ordre décroissant (L'ordre décroissant est une disposition de nombres allant du plus grand au plus petit.)

const numbers = [4, 24, 52, 10, 36, 69, 43];

numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers); // [ 69, 52, 43, 36, 24, 10, 4 ]
