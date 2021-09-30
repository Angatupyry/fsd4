const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function createListElement() {
  const li = document.createElement("li");
  li.textContent = input.value;
  //li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function tachar() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", tachar);

  const dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addTarea() {
  if (input.value.length > 0) {
    createListElement();
  }
}

enterButton.addEventListener("click", addTarea);
