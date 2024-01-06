todoList = [];   //array of objects(item, dueDate)
displayItems();

function addToDo(){
    let inputElement = document.querySelector('#input-text');
    let dateElement = document.querySelector('#todo-date');
    let newObj = { item: inputElement.value, 
                   dueDate: dateElement.value 
                 }
    todoList.push(newObj);
    localStorage.setItem(`TodoItems`,JSON.stringify(todoList));
    inputElement.value = "";
    dateElement.value = "";
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector(".todo-container");
    let newHtml = '';

    todoListStr = localStorage.getItem('TodoItems');
    todoList = todoListStr ? JSON.parse(todoListStr) : []

    for(let i=0; i<todoList.length; i++){
        //p and div are block elements so they print next element on next line. 
        //span is used so that button appear on same line.
        newHtml += `
            <span>${todoList[i].item}</span>   
            <span>${todoList[i].dueDate}</span>
            <button class="del-button" onclick = "todoList.splice(${i},1); localStorage.setItem('TodoItems',JSON.stringify(todoList));
            displayItems();
            ">Delete</button> 
        `;
    }
    containerElement.innerHTML = newHtml;
}
    