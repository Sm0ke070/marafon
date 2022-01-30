const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    }
}

function addTask(task, status) {
    list[task] = status
}

function deleteTask(task) {
    delete list[task];
}


function showList() {
    console.log("Todo:");
    for (key in list) { };
    if (list[key] = "To Do") {
        console.log(`"${key}"`)
    }
    console.log("In Progress:");
    for (progressKey in list) { };
    if (list[progressKey] = "In Progress") {
        console.log(`"${progressKey}"`)
    }
}



changeStatus("write a post", "Done")
addTask('have a walk')
deleteTask('have a walk')
showList()