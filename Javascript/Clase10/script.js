const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

function createListElement() {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";

  function tachar() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", tachar);
}

function addTarea() {
  if (input.value.length > 0) {
    createListElement();
  }
}

enterButton.addEventListener("click", addTarea);
