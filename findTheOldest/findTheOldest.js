let findTheOldest = function(people) {
    people.map(person => {
        if (!person.yearOfDeath) { 
          return person.yearOfDeath = new Date().getFullYear();
        }
    });
    
    let sortedPeople = people.sort((a, b) => {

    let personA = a.yearOfDeath - a.yearOfBirth;
    let personB = b.yearOfDeath - b.yearOfBirth;

    return personA < personB ? 1 : -1;
    });

    return sortedPeople[0];
}

module.exports = findTheOldest
