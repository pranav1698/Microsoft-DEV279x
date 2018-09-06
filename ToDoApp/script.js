var taskInput = document.getElementById("task");

var addButton = document.getElementById("add");

var taskList = document.getElementById("taskList");

var clearButton = document.getElementById("clear");

addButton.addEventListener("click", function(){
    var task = taskInput.value;

    if(task.trim()){
        var newItem = document.createElement("LI");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);

        var removeButton = document.createElement("button");
        removeButton.textContent = "Done";
        removeButton.className = "remove";
        taskInput.value = "";
       
        newItem.appendChild(taskText);
        newItem.appendChild(removeButton);
        taskList.appendChild(newItem);

        removeButton.addEventListener("click", removeTask);
        
    } else {
        alert("The task cannot be empty");
    }
    
});


clearButton.addEventListener("click", function(){
    taskList.innerHTML = " ";
})

function removeTask(e){
    console.log(e);
    taskList.removeChild(e.target.parentElement);
}