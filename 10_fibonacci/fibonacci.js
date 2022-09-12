const fibonacci = function(num) {
  if (num < 0) return 'OOPS';

  let prev = 0;
  let current = 1;
  let counter = current + prev;
  
  for (let i = 1; i < num; i++) {
    prev = current;
    current = counter;
    counter = current + prev;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
