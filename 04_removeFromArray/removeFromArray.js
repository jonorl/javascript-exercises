const removeFromArray = function(array, ...removedValues) {
    array = array.filter(element => !removedValues.includes(element));
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
