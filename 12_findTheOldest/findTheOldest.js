const findTheOldest = function (arr) {
  const ages = arr.map((person) => {
    if (!person.yearOfDeath) {
      const now = new Date().getFullYear();
      return now - person.yearOfBirth;
    } else {
      return person.yearOfDeath - person.yearOfBirth;
    }
  });
  const indexMax = ages.indexOf(Math.max(...ages));
  return arr[indexMax];
};

// Do not edit below this line
module.exports = findTheOldest;
