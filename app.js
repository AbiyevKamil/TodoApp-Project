// Declare Variables

// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// // Adding Event Listeners

// document.addEventListener("DOMContentLoaded", getTodos);
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteTodo);
// filterOption.addEventListener("click", filterTodo);

// Tracking window width for input text length

$(window).resize(
  setInterval(function () {
    if (window.screen.width > 1300) {
      size = 70;
    } else if (window.screen.width > 980) {
      size = 50;
    } else if (window.screen.width > 500) {
      size = 30;
    } else if (window.screen.width > 300) {
      size = 20;
    }
  }, 1000)
);

// Function for adding todo items

// function addTodo(e) {
//   e.preventDefault();
//   if (todoInput.value !== "" && todoInput.value.length <= size) {
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todoInput.value;
//     saveLocalTodos(todoInput.value);
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);
//     todoInput.value = "";
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);
//     todoList.appendChild(todoDiv);
//   }
// }

// // Function for deleting todo items

// function deleteTodo(e) {
//   const item = e.target;

//   if (item.classList[0] === "trash-btn") {
//     const todo = item.parentElement;
//     todo.classList.add("fall");
//     removeLocalTodos(todo);
//     todo.addEventListener("transitionend", (e) => {
//       todo.remove();
//     });
//   }
//   if (item.classList[0] === "complete-btn") {
//     const todo = item.parentElement;
//     todo.classList.toggle("completed");
//   }
// }

// // Filtering todo items

// function filterTodo(e) {
//   const todos = todoList.childNodes;
//   todos.forEach(function (todo) {
//     switch (e.target.value) {
//       case "all":
//         todo.style.display = "flex";
//         break;
//       case "completed":
//         if (todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//         break;
//       case "uncompleted":
//         if (!todo.classList.contains("completed")) {
//           todo.style.display = "flex";
//         } else {
//           todo.style.display = "none";
//         }
//     }
//   });
// }

// // Creating local storage and saving items

// function saveLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
// function removeLocalTodos(todo) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   const todoIndex = todo.children[0].innerText;
//   todos.splice(todos.indexOf(todoIndex), 1);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Getting todo items from local storage and generating them to the page

// function getTodos() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.forEach(function (todo) {
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);
//     todoInput.value = "";
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = `<i class="fas fa-check"></i>`;
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);
//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);
//     todoList.appendChild(todoDiv);
//   });
// }
