let todoList = []
  const todoListElm = document.getElementById("todoList");
  const inputTodoElm = document.getElementById("inputtodo");
  const addBtn = document.getElementById("add-btn");
  const allBtn = document.getElementById("all")
  const completedBtn = document.getElementById("completed")
  const uncompletedBtn = document.getElementById("uncompleted")

 const handleDeleteTodo = (deleteId) => {
    const deleteIndex = todoList.findIndex((todo) => todo.id === deleteId);
todoList.splice(deleteIndex,1);
renderTodolist()
saveLocalStorage();
 }

 const handleChangeStatus = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id);
  todoList[index].completed = !todoList[index].completed;
  saveLocalStorage();
 }
  
const renderTodolist = () => {
    todoListElm.innerHTML ="";
    todoList.forEach((todo) =>{
        const todoElm = document.createElement("div");
        todoElm.classList.add("todo");
        const inputElm = document.createElement("input");
        inputElm.setAttribute("type","checkbox");
        inputElm.checked = todo.completed;
        inputElm.addEventListener('change',() => handleChangeStatus(todo.id))
        const spanElm = document.createElement("span");
        spanElm.textContent = todo.title
        const iconElm = document.createElement("i");
        iconElm.classList.add("bi", "bi-trash3-fill");
        iconElm.addEventListener('click', () => handleDeleteTodo(todo.id));
        todoElm.appendChild(inputElm);
        todoElm.appendChild(spanElm);
        todoElm.appendChild(iconElm);
        todoListElm.appendChild(todoElm);
    });
}

const handleAddTodo = () => {
  if(inputTodoElm.value === ''){
    alert('Bạn cần phải nhập cái gì đó');
  } else{
    todoList.push({
      id: Math.floor(Math.random() *10),
      title: inputTodoElm.value,
      completed: false,
    })
    renderTodolist();
    inputTodoElm.value ="";
    saveLocalStorage();
  }
}

const handleAllTodo = () => {
  
}

//const saveLocalStorage = () => {
//  localStorage.setItem('todos',JSON.stringify(todoList));
//}

//const getLocalStorage = () => {
 // const todoListLocal = JSON.parse(localStorage.getItem('todos'));
  //if(todoListLocal) {
  //  todoList = todoListLocal;
  //}
 // renderTodolist();
//}

addBtn.addEventListener('click',handleAddTodo);

//getLocalStorage();

const getTodoList = () => {
   todoList = fetch("https://jsonplaceholder.typicode.com/todos?userId=1").then((response) =>{
            return response.json();
   }).then((data) => {
    todoList = data;
    renderTodolist();
   });
}
getTodoList();