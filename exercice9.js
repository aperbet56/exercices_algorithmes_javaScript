// Exercice 9 : Ecrire une fonction qui compte le nombre d'occurence de chaque élément d'un tableau

const countOccurences = (array) => {
  // Création de l'objet counts
  const counts = {};

  array.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });
  return counts;
};

console.log(
  countOccurences([
    "apple",
    "banana",
    "apple",
    "ananas",
    "banana",
    "orange",
    "grape",
  ])
); // {"apple": 2, "banana": 2, "ananas": 1, "orange": 1, "grape": 1}

console.log(
  countOccurences([
    "Lyon",
    "Paris",
    "Marseille",
    "Lyon",
    "Nice",
    "Lyon",
    "Lens",
  ])
); // {"Lyon": 3, "Paris": 1, "Marseille": 1, "Nice": 1, "Lens": 1}
