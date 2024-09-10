const findTheOldest = function(people) {
    let newObject = {};
    let maxYear = 0
    let oldestPerson = ""
    const currentYear = (new Date()).getFullYear();
    for (person of people){
        person.yearsLived = (person.yearOfDeath != undefined ? person.yearOfDeath : currentYear) - person.yearOfBirth;
        if (person.yearsLived > maxYear){
            maxYear = person.yearsLived
            oldestPerson = person
        };
    }
    people.push(newObject);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
