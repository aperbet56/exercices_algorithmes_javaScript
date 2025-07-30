//Exercice 12 : Remove all the falsy values from an array (false, 0, NaN, "", null, udefined)

const removeFalsyValues = (array) => {
  return array.filter(Boolean);
};

console.log(removeFalsyValues([0, 1, false, 2, "", undefined, 3, NaN])); // [1, 2,3]
