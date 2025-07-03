// EXERCICE 1 : Trouver la factorielle d'un nombre
// Le factorielle d'un nombre naturel est multiplié par "nombre moins un" , ensuite par "nombre moins deux" , et ainsi de suite jusqu'à 1.
//Exemple : La factorielle de 5 est égale à 5×4×3×2×1, soit 120.

const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};

console.log(factorial(5)); // 120
console.log(factorial(8)); // 40 320
console.log(factorial(52)); // 8.065817517094388e+67
