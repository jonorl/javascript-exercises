const fibonacci = function(num) {
    if (num >= 0 && Number.isInteger(Number(num))){
        let counter = []
        for (let i = 0; i < (num + 1); i++){
            if (counter.length === 0 || counter.length === 1){
                counter.push(i);
                }
            else{
                counter.push((counter[counter.length-1] + (counter[counter.length-2])));
            }
    
        }  
    return counter[num]
    }
    else {
        return "OOPS"
    }
}
// Do not edit below this line
module.exports = fibonacci;
