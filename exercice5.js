// EXERCICE 5 : Vérifier si deux chaînes de caractères sont des anagrammes
// L'anagramme est un mot ou une expression que l'on obtient en changeant l'ordre des lettres d'un autre terme.
// Exemples : niche/chien, récit/écrit, engrais/graines

const isAnagram = (a, b) => {
  return a.split("").sort().join("") === b.split("").sort().join("");
};

console.log(isAnagram("niche", "chien")); // true
console.log(isAnagram("récit", "écrit")); // true
console.log(isAnagram("engrais", "graines")); // true

// La méthode split() divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif ; où le motif est fourni comme premier paramètre dans l'appel de la méthode.

// La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.

// La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
