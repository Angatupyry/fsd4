function miFuncion(a, b) {
  return a + b;
}

// Anónima
const miSegundaFuncion = function (a, b) {
  return a + b;
};

console.log(miSegundaFuncion(3, 2));

function saludar(nombre) {
  const saludo = `Hola, ${nombre}`;
  return saludo;
}

console.log(saludar("César"));

console.log("César");
console.log("Federico");
console.log("Gastón");

const estudiantes = ["César", "Federico", "Gastón"];

for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]);
}

const precioFinal = function (precio) {
  let iva = 100;
  let gastoDespacho = 200;
  const precioFinal = precio - iva - gastoDespacho;

  return precioFinal;
};

console.log(precioFinal(5));
// i = 3

while (true) {
  console.log("hola");
}