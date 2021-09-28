const listaDeTareasUl = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("tarea");
const selectorPrioridad = document.getElementById("prioridad");
const botonAgregar = document.getElementById("agregar");
const tareasConPrioridadBaja =
  document.getElementsByClassName("prioridad-baja");
const todosLosLi = document.getElementsByTagName("li");

/* Creamos un elemento y lo colocamos en pantalla */
function crearNuevaTarea(nombre, prioridad) {
  // Creamos un nuevo elemento li y lo guardamos en una variable
  const nuevaTarea = document.createElement("li");

  // Cambiamos el texto interno del li
  nuevaTarea.textContent = nombre;

  // Agregamos una clase CSS al li
  nuevaTarea.classList.add(prioridad);

  // Agregamos el li a la lista de tareas (ul)
  listaDeTareasUl.appendChild(nuevaTarea);
}

// Agregamos un evento al boton "agregar" para que cuando se presione
botonAgregar.addEventListener("click", function () {
  crearNuevaTarea(inputTarea.value, selectorPrioridad.value);
});

listaDeTareasUl.addEventListener("click", function (evento) {
  evento.target.remove();
});

function obtenerTareas() {
  fetch("http://localhost:4000/tareas", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((respuesta) => {
      console.log(respuesta);
      respuesta.map((item) => crearNuevaTarea(item.titulo, item.prioridad));
    });
}
obtenerTareas();

//function para traerme las tareas
