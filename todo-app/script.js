const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addToDo);

let isEditClicked = false;
let currentEditItem = null;

function addToDo() {

  const text = input.value.trim();

  if (text === "") return alert("Please write something");

  if (isEditClicked && currentEditItem) {
    currentEditItem.innerText = text;
    isEditClicked = false;
    currentEditItem = null;
    addBtn.innerText = "Add";
    input.value = "";
    return;
  }

  // Duplicate check
  const allTodos = document.querySelectorAll("#todo-list li span");
  for (let todo of allTodos) {
    if (todo.innerText.toLowerCase() === text.toLowerCase()) {
      alert("Todo already exists!");
      return;
    }
  }

  const li = document.createElement("li");
  const span = document.createElement("span");

  span.innerText = text;

  const btnBox = document.createElement("div");
  btnBox.classList.add("buttons");

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "Delete";

  btnBox.appendChild(editBtn);
  btnBox.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnBox);

  list.appendChild(li);

  input.value = "";

  editBtn.addEventListener("click", () => editTodo(span));
  deleteBtn.addEventListener("click", () => li.remove());
}

function editTodo(spanElement) {
  isEditClicked = true;
  currentEditItem = spanElement;
  addBtn.innerText = "Edit It";
  input.value = spanElement.innerText;
}