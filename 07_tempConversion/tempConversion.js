const convertToCelsius = function(f) {
  c = (f-32) * (5/9);
  if(c % 1 != 0){
    return parseFloat(c.toFixed(1));
    }
  else return c;
};

const convertToFahrenheit = function(c) {
  f = c * (9/5) + 32;
  if(f % 1 != 0){
    return parseFloat(f.toFixed(1));
    }
  else return f;
  }

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
