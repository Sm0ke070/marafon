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
    for (let toDoKey in list) {
        if (list[toDoKey] == "To Do") {
            console.log(`"${toDoKey}"`)
        }
    }
    console.log("In Progress:");
    for (let progressKey in list) {
        if (list[progressKey] == "In Progress") {
            console.log(`"${progressKey}"`)
        }
    }
    console.log("done:");
    for (let doneKey in list) {
        if (list[doneKey] == "Done") {
            console.log(`"${doneKey}`)
        }
    }

}
changeStatus("write a post", "Done")
addTask('have a walk')
deleteTask('have a walk')
showList()