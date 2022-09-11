const palindromes = function(str) {
  const regex = /[!,.\s]+/gi;
  const testStr = str.replace(regex, '').toLowerCase()
  for (let i = 0; i < testStr.length; i++) {
    if (testStr[i] != testStr[(testStr.length - 1) - i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
