class TaskListManager {
    constructor() {
        this.tasksToDo = [];
        this.allTask = [];
        this.doneTasks = [];
    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasksToDo.push(task);
            this.allTask.push(task);
        }
    }

    removeTask(id) {
        if (this.tasksToDo.some(el => el.id === id)) {
            let index = this.tasksToDo.findIndex(el => el.id === id)
            let deletedTask = this.tasksToDo.splice(index,1);
            this.doneTasks.push(deletedTask[0])
        }
    }
}

class Task {
    constructor(title, id) {
        this.title = title;
        this.id = id
    }
}