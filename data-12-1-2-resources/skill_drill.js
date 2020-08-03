cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);
VM913:28 (3) ["San Antonio ", "Phoenix ", "Dallas"]
undefined
cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityNames = cities.map(function(iterable){
    return iterable.population;
});
console.log(cityNames);

var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
 

var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
undefined
slice1 =words.slice(0,3)
(3) ["seal", "dog", "scorpion"]
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
(2) ["orangutan", "salamander"]