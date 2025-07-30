// Exercice 8 : Trouver le plus grand et le plus petit nombre dans un tableau

const maxAndMinValues = (array) => {
  const max = Math.max(...array);
  const min = Math.min(...array);
  return [max, min];
};

console.log(maxAndMinValues([15, 7, 20, 3, 45])); // [45, 3]
console.log(maxAndMinValues([69, 50, 3, 100, -1, 52, 76, 512])); // [512, -1]
