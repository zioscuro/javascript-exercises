const ftoc = function(temp) {
  const celsiusTemp = ((temp -32) * 5) / 9;
  const roundCelsiusTemp = Math.round(celsiusTemp * 10) / 10;
  return roundCelsiusTemp;
};

const ctof = function(temp) {
  //[°F] = [°C] × 9⁄5 + 32
  const fahrenheitTemp = ((temp * 9) / 5) + 32;
  const roundFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return roundFahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
