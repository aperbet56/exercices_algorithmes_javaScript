// Exercice 22 : Créer une fonction qui prend en argument une chaîne de caractères (LONGUE). Cette fonction doit afficher les 15 premiers caractères puis '...' Par exemple : Je passe la chaîne : 'Lorem quisque class vestibulum' La fonction doit afficher 'Lorem quisque c...'

let string;

const cutString = (string) => {
  // Condition if qui Vérifie si la chaîne est plus longue que 15 caractères.
  if (string.length > 15) {
    return string.slice(0, 15) + "...";
    //Coupe la chaîne du caractère 0 au caractère 14 (15 caractères au total).
    // Ajoute les trois points de suspension à la fin.
  }
  return string;
};

console.log(cutString("Lorem quisque class vestibulum")); // Lorem quisque c...
console.log(cutString("Je vais au concert ce soir et je rentrerai tard")); // Je vais au conc...
