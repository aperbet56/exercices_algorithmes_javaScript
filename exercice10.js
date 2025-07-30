// Exercice 10 : Ecrire une focntion qui va permettre d'unir deux tableaux ensemble

const union = (array1, array2) => {
  return [...new Set([...array1, ...array2])];
};

console.log(union([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(union([12, 24, 32], [48, 56, 69])); // [12, 24, 32, 48, 56, 69]
