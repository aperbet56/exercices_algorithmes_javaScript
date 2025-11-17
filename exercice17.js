// À partir de deux variables (int) qui peuvent changer n'importe quand, créer une condition qui permet d'afficher dans la console le plus petit des deux nombres. Si les nombres sont identique, afficher : "C'est les mêmes !!"

let number1;
let number2;

const compareNumbers = (number1, number2) => {
  if (number1 < number2) {
    console.log(number1);
  } else if (number1 > number2) {
    console.log(number2);
  } else {
    console.log("C'est les mêmes !!");
  }
};

console.log(compareNumbers(69, 120)); // 69
console.log(compareNumbers(69, 69)); // C'est les mêmes !!
console.log(compareNumbers(69, 24)); // 24
