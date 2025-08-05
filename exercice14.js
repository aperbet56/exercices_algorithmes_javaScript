// Exercice 14 : Classer / Trier les éléments d'un tableau par ordre alphabétique

const orderedArray = () => {
  const array = [
    "Espagne",
    "Portugal",
    "Algérie",
    "Italie",
    "France",
    "Allemagne",
    "Danemark",
  ];
  array.sort((a, b) => {
    // a est inférieur à b
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;

      //a est supérieur à b
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;

      // a égal à b
    } else {
      return 0;
    }
  });
  return array;
};

console.log(orderedArray()); // [ "Algérie", "Allemagne", "Danemark", "Espagne", "France", "Italie", "Portugal" ]
