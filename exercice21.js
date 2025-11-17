//  Exercice 21 : Avec le moins de lignes de code possible, proposez un algorithme qui, pour un nombre donné, affiche la table de multiplication liée. Par exemple : si je demande 1, je veux voir : 1x1 = 1 1x2 = 2 etc Et ce jusqu'à 12

let n = 1;

const multiplicationTable = (n) => {
  for (let i = 1; i <= 12; i++) {
    // La boucle parcourt les valeurs de 1 à 12.
    console.log(`${n} x ${i} = ${n * i}`); // Affiche chaque multiplication dans le format demandé.
  }
};

console.log(multiplicationTable(5)); // Affiche la table de 5
console.log(multiplicationTable(7)); // Affiche la table de 7
