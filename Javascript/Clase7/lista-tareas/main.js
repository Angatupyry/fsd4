// const listaTareasUl = document.getElementById("lista-tareas");

// const botonAgregar = document.getElementById("agregar");

// const descripcionInput = document.getElementById("tarea");

// const prioridadCombox = document.getElementById("prioridad");

// const crearTarea = () => {
//   const tareaNueva = document.createElement("li");

//   tareaNueva.textContent = descripcionInput.value;

//   tareaNueva.classList.add(prioridadCombox.value);

//   console.log(prioridadCombox);

//   listaTareasUl.appendChild(tareaNueva);
// };

// botonAgregar.addEventListener("click", crearTarea);

const description = document.getElementById("tarea");
const priority = document.getElementById("prioridad");
const taskList = document.getElementById("lista-tareas");
deleteButton = (taskId) => {
  console.log(`ID de deleteButton ${taskId}`);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = ":x:";
  deleteButton.onclick = deleteTask(taskId);
  //deleteButton.addEventListener("click");
  return deleteButton;
};

createTask = () => {
  let newTask = document.createElement("li");
  newTask.textContent = description.value;
  console.log(
    newTask.setAttribute("id", taskList.querySelectorAll("li").length + 1)
  );
  newTask.classList.add(priority.value);
  console.log(priority.options);
  // console.log(
  //   newTask.classList.add(priority.options[priority.selectedIndex].value)
  // );
  console.log(newTask.id);
  newTask.appendChild(deleteButton(newTask.id));
  return newTask;
};

deleteTask = (taskId) => {
  console.log(`ID de deleteTask ${taskId}`);
  let taskToDelete = document.getElementById(taskId);
  console.log(taskToDelete);
  taskToDelete.remove();
};

addTask = () => {
  taskList.appendChild(createTask());
};

const addButton = document.getElementById("agregar");
const borrar = document.getElementById("borrar");
addButton.addEventListener("click", addTask);
//borrar.addEventListener("click", deleteTask);
