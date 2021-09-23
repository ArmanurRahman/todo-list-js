const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

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

//add event  listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
