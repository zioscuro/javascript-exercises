const getTheTitles = function (library) {
  const titles = [];
  library.map((book) => {
    titles.push(book.title);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
