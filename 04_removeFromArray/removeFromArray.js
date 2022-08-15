const removeFromArray = function(arr, toRemove) {
    const args = Array.prototype.slice.call(arguments);
    const arrRemoveItems = args.slice(1);
    
    let filteredArr = [...arr];
    for (let i = 0; i < arrRemoveItems.length; i++) {
      
      filteredArr = filteredArr.filter(item => item !== arrRemoveItems[i]);
    }  
    return filteredArr;
  };

// Do not edit below this line
module.exports = removeFromArray;
