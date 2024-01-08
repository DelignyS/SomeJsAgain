const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

const entrepreneursNames = entrepreneurs.map(entrepreneur => {  // Ici on peut utiliser la variable entrepreneurs car elle est déclarée en dehors de la fonction
  return { firstName: entrepreneur.first, lastName: entrepreneur.last, year: entrepreneur.year }; // On retourne un objet avec les propriétés firstName, lastName et year
});

const currentYear = new Date().getFullYear();

entrepreneursNames.forEach(entrepreneur => {
  const age = currentYear - entrepreneur.year;
  delete entrepreneur.year;
  entrepreneur.age = age;
});
const entrepreneursNamesOnly = entrepreneursNames.map(entrepreneur => { // Ici on peut utiliser la variable entrepreneursNames car elle est déclarée en dehors de la fonction
  return { firstName: entrepreneur.firstName, lastName: entrepreneur.lastName };
});

console.log(entrepreneursNamesOnly);

console.log(entrepreneursNames);

const entrepreneursBornIn70s = entrepreneursNames.filter(entrepreneur => {
  return entrepreneur.age >= 41 && entrepreneur.age <= 51;
});

console.log(entrepreneursBornIn70s);