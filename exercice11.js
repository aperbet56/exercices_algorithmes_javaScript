// Exercice 11 : Write a function to get the intersection of two arrays

const getIntersection = (array1, array2) => {
  return array1.filter((item) => array2.includes(item));
};

console.log(getIntersection([1, 2, 3, 7], [4, 5, 1, 6, 3, 7])); // [1, 3, 7]
console.log(getIntersection([24, 69, 34], [69, 45, 1, 34])); // [69, 34]
