
let task = []

function addTask(taskName){
    task.push(taskName)
}

function removeTask(name){
    task = task.filter(
        t => t !== name)
}
function showTask(){
    console.log(task)
}

addTask("javascript programming");
addTask("Govida Govida Goovinda")
addTask("Govida")
addTask("Govida Govida")

showTask()
removeTask("Govida")

showTask()
