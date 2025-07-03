// EXERCICE 6 : Trouver le premier caractère non répété

const firstUniqueCharacter = (str) => {
  // boucle for of qui va parcourir le tableau
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  // return null;
};

console.log(firstUniqueCharacter("cachotterie")); // a
console.log(firstUniqueCharacter("meilleur")); // m
console.log(firstUniqueCharacter("abattre")); // b

// La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.

// La méthode lastIndexOf() renvoie l'indice, dans la chaîne courante, de la dernière occurence de la valeur donnée en argument. Si cette sous-chaîne n'est pas trouvée, la méthode renvoie -1. La recherche s'effectue de la fin vers le début de la chaîne, à partir de indiceDébut.
