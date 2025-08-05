// Exercice 15 : Classer / Trier les nombres par ordre croissant (L'ordre croissant est une disposition de nombres allant du plus petit au plus grand)

const numbers = [4, 24, 52, 10, 36, 69, 43];

numbers.sort((a, b) => {
  return a - b;
});

console.log(numbers); // [ 4, 10, 24, 36, 43, 52, 69 ]
