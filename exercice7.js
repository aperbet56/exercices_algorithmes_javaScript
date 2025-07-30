// Exercice 7 : Fusionner deux tableaux en un seul

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const mergeArrays = () => {
  return array1.concat(array2);
};

console.log(mergeArrays(array1, array2)); // [ 1, 2, 3, 4, 5, 6, 7, 8]
