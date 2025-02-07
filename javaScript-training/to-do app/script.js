
// Add Task
function addTask() {
    let taskInput = document.getElementById("taskInput"); //get input text
    let taskText = taskInput.value.trim();                //trim extra spaces
    if (!taskText) return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //get all tasks from localstorage and convert it into array
    tasks.push(taskText);                                        //push task into tasks array
    localStorage.setItem("tasks", JSON.stringify(tasks));        //convert tasks array into string and push into localstorage
    
    taskInput.value = "";
    displayTasks();                                              //display tasks
}

// Display Task
function displayTasks() {
    let taskList = document.querySelector("#taskList");          //get tag by id
    taskList.innerHTML = "";                                     
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //get all tasks from localstorage and convert it into array

    tasks.forEach((task, index) => {                             //forEach loop to iterate tasks array
        let li = document.createElement("li");                   //create a li tag
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">X</button>`;//push task into li tag
        taskList.appendChild(li);                                 //append li tag into tasklist
    });
}

// Delete Task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; //get all tasks from localstorage and convert it into array
    tasks.splice(index, 1);                                      //delete task by index
    localStorage.setItem("tasks", JSON.stringify(tasks));        //store tasks in localstorage again
    displayTasks();                                              // display tasks
}
