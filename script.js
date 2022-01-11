//************************TODO LIST***************************/

let todoInput = document.querySelector('.todoInput')
let addBtn =  document.querySelector('.addBtn')
let outPut = document.querySelector('.outPut')

let todoNum = 1;

//click addBtn
addBtn.addEventListener('click', function(){
    //Display the outPut Div
    outPut.style.display = "block";

    //FOR THE TODO LIST ITEMS = Create a new Div called todoList
    let todoList = document.createElement('div');

    //add class to the todoList
    todoList.classList.add('todo-list')

    //create a span element
    let number = document.createElement('span')

    //FOR NUMBER = add a class to the span
    number.classList.add('number')

    //Append the span element to the todoList
    todoList.appendChild(number)

    //UPDATE: Increment Todo item Number
    number.textContent = todoNum++;
    
    //FOR TODO  = create a new Paragraph
    let todo = document.createElement('p');

    //add class to the todo paragraph
    todo.classList.add('todo');

    //set the content to the todoInput value
    todo.innerText = todoInput.value;

    //append the todo pragraph to the todoList
    todoList.appendChild(todo)

    //Empty the todoInput field
    todoInput.value = " ";

    //EVENT: Click on the Todo Paragraph to cross it with line through
    todo.addEventListener('click', function(){
        todo.style.textDecoration = "line-through";
        todo.style.backgroundColor = "lightgreen"
    })

    todo.addEventListener('dblclick', function(){
        outPut.removeChild(todoList)
    })

    //FOR DELETE Button = create a new span call it DeleteBtn
    let deleteBtn = document.createElement('span');

    //add class DeleteBtn to the span
    deleteBtn.classList.add('deleteBtn');

    //add Text to the DeleteBtn
    deleteBtn.textContent = "X"

    //EVENT: Click on X to delete the todoList
    deleteBtn.addEventListener('click', function(){
        outPut.removeChild(todoList)
    })

    //append the deleteBtn span to the todoList
    todoList.appendChild(deleteBtn)

    //Append the todoList to the outPut
    outPut.appendChild(todoList);



    //BELOW - NOT WORKING?????

    //HOW TO REMOVE the "outPut div" if there is nothing inside it.
    let closeOutPut = document.querySelectorAll('deleteBtn');
    // for(let i = 0; i < closeOutPut.length; i++){
    //     closeOutPut[i].addEventListener('click', () => {
    //         closeOutPut[i].parentElement.style.opacity = 0;
    //     })
    // }

    console.log(closeOutPut)
    

    //HOW TO UPDATE the NUMBER according to the number of items on the list
    //How to add TITLE ATTRIBUTE to the Todo paragraph ??
    //How to make enter Key on the keyboard behave like the addBtn
})























