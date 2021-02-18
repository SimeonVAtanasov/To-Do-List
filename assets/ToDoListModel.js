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
            this.tasksToDo = this.tasksToDo.filter(el => el.id !== id)

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