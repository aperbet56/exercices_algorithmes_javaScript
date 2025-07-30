// Exercice 13 : Write a function to flatten a nested array

const flattenArray = (array) => {
  return array.flat(Infinity);
};

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]

// La méthode flat() permet de créer un nouveau tableau contenant les éléments des sous-tableaux du tableau passé en argument, qui sont concaténés récursivement pour atteindre une profondeur donnée.
