const palindromes = function (string) {
    const originalString = string.toLowerCase()
                                 .split("")
                                 .filter(val => val != "." && val != "!" && val != "," && val != " ")
    const reversed =  originalString.slice()
                                    .reverse();
    return reversed.join("") === originalString.join("");
    // return "reverse: " + reversed.join("") + " original: " + originalString.join("");
};

// Do not edit below this line
module.exports = palindromes;
