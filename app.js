const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

const addTodo = (event) => {
    event.preventDefault();

    //create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //complete checkbox
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = "<i class='fas fa-check'> </i>";
    todoDiv.appendChild(completeButton);

    //trash checkbox
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = "<i class='fas fa-trash'> </i>";
    todoDiv.appendChild(trashButton);

    //appent todo list
    todoList.appendChild(todoDiv);

    //clear todo input
    todoInput.value = "";
};

const deleteCheck = (event) => {
    const item = event.target;

    //delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }

    //complete todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
};

const filterTodo = (e) => {
    const todos = todoList.childNodes;

    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
};

//add event  listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);
