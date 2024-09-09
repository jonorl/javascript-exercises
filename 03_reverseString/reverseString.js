const reverseString = function(str) {
    let len = str.length;
    let reversedText = ""
    for (i = len; i !== 0; i--){
        let reversedChar = str.at(i - len - 1);
        reversedText += reversedChar;
        }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
