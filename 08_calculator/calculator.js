const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);	
};

const multiply = function(arr) {
  return arr.reduce((prev, curr) => prev * curr, 1);
};

const power = function(base, exp) {
  return base ** exp;	
};

const factorial = function(num) {
  if (num === 0) return 1;

  let counter = 1;
  for (let i = 1; i <= num; i++) counter *= i;
  return counter;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
