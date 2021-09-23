let buttonElement =  document.getElementById("enter");
let userInputElement = document.getElementById("userInput")
let listaElement = document.getElementById("lista")

function agregarTarea(){
    let textoTarea = userInputElement.value;
    let nuevaTarea = document.createElement("li")
    nuevaTarea.innerText = textoTarea;
    listaElement.appendChild(nuevaTarea)
    userInputElement.value="";
}