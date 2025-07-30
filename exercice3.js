// EXERCICE 3 : Supprimer les doublons dans un tableau

const removeDuplicates = (array) => {
  return [...new Set(array)];
};

console.log(removeDuplicates([25, 5, 0, 42, 6, 25, 87, 42, 1])); // [ 25, 5, 0, 42, 6, 87, 1 ]
console.log(
  removeDuplicates([
    "banane",
    "pomme",
    "fraise",
    "kiwi",
    "pomme",
    "banane",
    "fraise",
    "kiwi",
  ])
); // [ "banane", "pomme", "fraise", "kiwi" ]

/* Solution 2

const removeDuplicates = (array) => {
  return array.filter((item, i) => array.indexOf(item) === i);
};
*/
