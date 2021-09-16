// Sort
// Filter
// Find
// Map
// Reverse

const edades = [10, 20, 18, 40];

const mayoresEdad = edades.filter((item) => item >= 18);

// 40 18 20
console.log(mayoresEdad.reverse());

//20 18 40
console.log(mayoresEdad);

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}

console.log(persons.map(getFullName));
