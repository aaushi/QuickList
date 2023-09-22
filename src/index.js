let input = document.getElementById("todo-input");

let list = document.getElementById("todo-list");

let add = document.getElementById("add-button");

input.addEventListener("input", () => handleInput());

add.addEventListener("click", () => addTodo());

function handleInput() {
  add.disabled = input.value.length === 0;
}

function addTodo() {
  let ulList = document.getElementById("todo-list");
  let listNode = createListItem(input.value);
  ulList.appendChild(listNode);
  input.value = "";
  add.disabled = true;
}
function createListItem(itemHeading) {
  let listNode = document.createElement("li");
  let heading = document.createElement("h2");
  let deleteButton = document.createElement("button");

  heading.textContent = itemHeading;
  listNode.appendChild(heading);

  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  listNode.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => removeTodo(listNode));
  return listNode;
}

function removeTodo(listNode) {
  let ulList = document.getElementById("todo-list");

  ulList.removeChild(listNode);
}
