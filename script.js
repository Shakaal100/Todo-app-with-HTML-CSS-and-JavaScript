const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");
allTodos = []; 

todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    addTodos();
})

function addTodos(){
    const todoText = todoInput.value.trim();
    if (todoText.length > 0){
        allTodos.push(todoText);
        updateTodoList();
        todoInput.value = "";  
    }
}
function updateTodoList(){
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })
}
 function createTodoItem(todo, todoIndex){
    const todoId = "todo-"+ todoIndex;
    const todoLi = document.createElement("li");
    todoLi.className = "todo";

    todoLi.innerHTML = `
     <input type="checkbox" id="${todoId}">
        <label for="${todoId}" class="custom-checkbox">
            <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#1f1f1f"><path d="M9.55,18l-5.7-5.7l1.43-1.42l4.28,4.28l9.18-9.18L20.15,7.4L9.55,18Z"/></svg>
        </label>

        <label for="${todoId}" class="todo-text">${todo}</label>

        <button class="delete-button">
        <svg fill = "white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#1f1f1f"><path d="M7,21q-0.82,0-1.41-0.59T5,19V6H4V4H9V3h6V4h5V6H19V19q0,0.82-0.59,1.41T17,21H7ZM17,6H7V19H17V6ZM9,17h2V8H9v9Zm4,0h2V8H13v9ZM7,6V19V6Z"/></svg>
        </button>
    `
    return todoLi;

}

