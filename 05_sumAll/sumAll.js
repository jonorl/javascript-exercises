const sumAll = function(int1, int2) {
    if(int1 < 0 | int2 < 0 | Number.isInteger(int1) == false | Number.isInteger(int2) == false){
        return "ERROR"
    }
    else if(int2 > int1){
        let arr = []
        for (i = (int2 - 1); i !== int1; i--){
            arr.push(i);
        }
        let sum = 0;
        for (j = 0; j < arr.length; j++){
            sum += arr[j];
        }
        return int1 + sum + int2;
    }
    else if(int2 < int1){
        let arr = []
        for (i = (int1 - 1); i !== int2; i--){
            arr.push(i);
        }
        let sum = 0;
        for (j = 0; j < arr.length; j++){
            sum += arr[j];
        }
        return int1 + sum + int2;   
    }

};

// Do not edit below this line
module.exports = sumAll;
