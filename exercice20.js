// Créer une fonction qui prend en paramètre une température d'un volume d'eau : on veut saovir dans quel état est l'eau (solide, liquide, gaz), (positif: liquide, négatif: solide au delà de 100°: gaz)

const waterCondition = (temperature) => {
  if (temperature < 0) {
    return "solid"; //Si la température est en dessous de 0°C : l'eau est solide
  } else if (temperature >= 0 && temperature <= 100) {
    return "liquid"; //Si température entre 0°C et 100°C inclus : l'eau est liquide
  } else {
    return "gas"; //Si température au-delà de 100°C : l'eau est sous la forme de vapeur
  }
};
//Affichera dans la console.log :
console.log(waterCondition(-15)); // solid;
console.log(waterCondition(50)); // liquid;
console.log(waterCondition(150)); // gas;
