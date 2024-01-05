const form = document.querySelector(".toDoList");
const toDo = document.querySelector(".toDo");
const actualList = document.querySelector(".actualList");



//Add To-Dos in LocalStorage
document.addEventListener("DOMContentLoaded", function(e){
    //Check if list exists in storage, if not, create the list.
    if(!doesToDosExist){
        console.log("Existing To-Do List Not found, Creating to do list");
        localStorage.setItem("toDos", JSON.stringify([]));
    } else {
        //if list does exist, add the current list items in localStorage
        console.log("existing To-Do List Found");
        const storedArray = localStorage.getItem("toDos")
        const parsedArray = JSON.parse(storedArray);
        for(let i of parsedArray){
            addTodo(i);
        }
    }
    
})



//Add to the to-do List, and add to localStorage
form.addEventListener("submit", function(e){
    e.preventDefault();

    //add to to-do list
    addTodo(toDo.value);

    //add to localStorage
    const existingToDos = JSON.parse(localStorage.getItem("toDos"));
    existingToDos.push(toDo.value);
    localStorage.setItem("toDos", JSON.stringify(existingToDos));


    //reset input to empty
    toDo.value = "";
})

//remove from to-do list, and remove from localStorage
actualList.addEventListener("click", function(e){
    //remove from list
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }

    //grab removed item
    let str = e.target.parentElement.innerText;
    newStr = str.replace("Done!","").trim();

    //remove from LocalStorage
    let existingToDos = JSON.parse(localStorage.getItem("toDos"));
    existingToDos = existingToDos.filter(existingToDos => existingToDos !== newStr);
    localStorage.setItem("toDos", JSON.stringify(existingToDos));
})




//function to add new To-Dos
function addTodo(text){
    const newtoDo = document.createElement("li");
    const newButton = document.createElement("button");
    newtoDo.innerText = text;
    newButton.innerText = "Done!";
    newtoDo.appendChild(newButton);
    actualList.appendChild(newtoDo);
}

//function to check if a to-do list exists in localStorage
function doesToDosExist(){
    const existingToDos = localStorage.getItem("toDos");
    return existingToDos !== null;
}

