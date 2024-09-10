const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {

  let arr = []
  arr = array

  let summed = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue},0
  )
  return summed;
};

const multiply = function(array) {
  let arr = []
  arr = array

  let multiplied = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue},1
  )
  return multiplied;
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(num) {
	if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return (num * factorial(num - 1));
  }
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
