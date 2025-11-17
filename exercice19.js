// Créer une fonction qui prend en paramètre un prix HT unitaire d’un produit et son nombre de produit. On veut connaitre le total TTC.

let prixHTUnitaire;
let quantite;

const calcTotalTTC = (prixHTUnitaire, quantite) => {
  const tauxTVA = 0.2; // Taux de TVA à 20%
  // Calcul du total HT
  const totalHT = prixHTUnitaire * quantite; //pour obtenir le totalHT, j'ai le prixHT unitaire multiplié par la quantité ce qui donne le résultat
  // Calcul du total TTC
  const totalTTC = totalHT * (1 + tauxTVA);
  //(1 + tauxTVA) :
  // Cela signifie ajouter 1 au taux de TVA pour obtenir un facteur multiplicatif.
  // Si la TVA est de 20 % (0.20), on calcule : 1+ 0.20 = 1.20

  // Calcul de la TVA
  const montantTVA = totalHT * tauxTVA;
  return totalTTC.toFixed(2); // Retourne le total TTC arrondi à 2 décimales
};

console.log(calcTotalTTC(50, 3)); // Le total TTC est de : 180€
console.log(calcTotalTTC(15, 1)); // Le total TTC est de : 18€
console.log(calcTotalTTC(39.99, 5)); // Le total TTC est de : 239.94€
