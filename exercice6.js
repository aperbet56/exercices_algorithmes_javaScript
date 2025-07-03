// EXERCICE 6 : Trouver le premier caractère non répété

const firstUniqueCharacter = (str) => {
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
