const pintarCajitas = (cajitas) => {
  if (cajitas.length) {
    return [...cajitas].forEach(pintarCajitas);
  }
  cajitas.style.background = "red";
};

const agrandarCajita = (e) => {
  e.target.style.width = e.target.offsetWidth + 10 + "px";
  e.target.style.height = e.target.offsetHeight + 10 + "px";
};

// Ejercicio 1
const variable1 = document.getElementById("cajita-1");
// variable1.style.background = "yellow";
pintarCajitas(variable1);

// Ejercicio 2
const variable2 = document.getElementsByClassName("ej-2");
pintarCajitas(variable2[1]);

// Ejercicio 3
const variable3 = document.querySelector(".ej-3:nth-child(3)");
pintarCajitas(variable3);

// Ejercicio 4
const nuevoBoton = document.createElement("button");
nuevoBoton.textContent = "AGREGAR";
const contenedor = document.querySelector(".contenedor-cajitas");
contenedor.appendChild(nuevoBoton);

// Ejercicio 5
const cajitaACambiar = document.getElementById("ej-5");
cajitaACambiar.addEventListener("click", () => {
  if (cajitaACambiar.style.backgroundColor === "blue") {
    cajitaACambiar.style.backgroundColor = "rgb(102, 200, 4)";
  } else {
    cajitaACambiar.style.backgroundColor = "blue";
  }
});

// Ejercicio 6
// const cajaMala = document.querySelector(".bad-box");
// cajaMala1.remove();
// otra forma:
const cajaMala2 = document.querySelector("#contenedor-ej-6 > div:last-of-type");
cajaMala2.remove();

// Ejercicio 7
const cajaQueSeMueve = document.querySelector(".moving-box");
cajaQueSeMueve.addEventListener("click", () => {
  if (cajaQueSeMueve.classList.contains("calm-box")) {
    cajaQueSeMueve.classList.remove("calm-box");
  } else {
    cajaQueSeMueve.classList.add("calm-box");
  }
});

// Ejercicio 8
const cajaParaAgrandar = document.querySelector(".ej-8");
cajaParaAgrandar.addEventListener("click", agrandarCajita);

// Ejercicio 9
const cajaParaGirar = document.querySelector("#ej-9");
cajaParaGirar.addEventListener("click", (e) => {
  e.target.style.transform = "rotate(120deg)";
});

// Ejercicio 10
const cajaConTexto = document.querySelector("#ej-10");
const textoInput = document.querySelector(".text-input-box > input");
const botonAgregarTexto = document.querySelector("#escribir");

botonAgregarTexto.addEventListener("click", () => {
  cajaConTexto.textContent = textoInput.value;
  textoInput.value = "";
});

// Ejercicio 11
const cajaConNumero = document.querySelector("#ej-11");
const numeroInput1 = document.querySelector(".number-input-box > .primerValor");
const numeroInput2 = document.querySelector(
  ".number-input-box > #segundoValor"
);
const botonSumar = document.querySelector(".number-input-box > button");

botonSumar.addEventListener("click", () => {
  const numero1 = parseFloat(numeroInput1.value);
  const numero2 = parseFloat(numeroInput2.value);
  const resultado = numero1 + numero2;

  cajaConNumero.textContent = `${resultado}`;
});
