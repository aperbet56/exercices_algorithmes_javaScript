// EXERCICE 4 : Compter les occurrences d'un caractère dans une chaîne

const characterOccurences = (str, char) => {
  return str.split(char).length - 1;
};

console.log(characterOccurences("football", "o")); // 2
console.log(characterOccurences("ananas", "a")); // 3
console.log(characterOccurences(" trottinettes", "t")); // 5

// La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif ; où le motif est fourni comme premier paramètre dans l'appel de la méthode.
