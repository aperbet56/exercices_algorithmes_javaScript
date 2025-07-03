// EXERCICE 2 : Trouver le plus grand nombre dans un tableau

const findLastgestNumber = (array) => {
  return Math.max(...array);
};

console.log(findLastgestNumber([25, 48, 5, 19, 3, 46, 69, 24, 1])); // 69
console.log(findLastgestNumber([69, 3, 2, 18, 250, 48, 7, 125, 254])); // 254
console.log(findLastgestNumber([-5, -3, -1])); // -1

// La méthode Math.max() renvoie le plus grand nombre parmi ceux passés en paramètres, ou -Infinity si aucun paramètre n'est fourni.
