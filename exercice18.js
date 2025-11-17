// Créer une condition qui permet de vérifier si la personne a + de 18 ans et mesure + de 160cm ,dans ce cas : Afficher dans la console : "Je peux rentrer dans le manège". Sinon, afficher dans la console : "Je n'ai pas le droit de rentrer dans le manège".

// Déclarations des variables age et height
let age;
let height;

const compareAgeAndHeight = (age, height) => {
  if (age >= 18 && height >= 150) {
    console.log("Je peux rentrer dans le manège");
  } else {
    console.log("Je n'ai pas le droit de rentrer dans le manège");
  }
};

console.log(compareAgeAndHeight(16, 150)); // Je n'ai pas le droit de rentrer dans le manège
console.log(compareAgeAndHeight(18, 148)); // Je n'ai pas le droit de rentrer dans le manège
console.log(compareAgeAndHeight(24, 169)); // Je peux rentrer dans le manège
