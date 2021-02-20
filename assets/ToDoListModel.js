class TaskListManager {
    constructor(tasksToDo, counter) {
        if (tasksToDo) {
            this.tasksToDo = tasksToDo;
            this.counter = counter;
        } else {
            this.tasksToDo = [];
            this.counter = 0;
        }

    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasksToDo.push(task);
        }
    }

    removeTask(id) {
        if (this.tasksToDo.some(el => el.id === id)) {
            this.tasksToDo = this.tasksToDo.filter(el => el.id !== id)

        }
    }
}

class Task {
    constructor(title, id) {
        this.title = title;
        this.id = id
        this.classType = "taskToDo"
    }
}