(() => {
    unfade(BODY, "flex", 20)
    let taskManager = function addManager() {
        if (localStorage.getItem("localTaskManager")) {

            let localTaskManagerStr = localStorage.getItem("localTaskManager");
            let localTaskManager = JSON.parse(localTaskManagerStr);

            return new TaskListManager(localTaskManager.tasksToDo, localTaskManager.counter)
        }

        return new TaskListManager();
    }();

    let isShowingForm = false;

    ADD_BUTTON.addEventListener('click', onclick)
    SUBMIT.addEventListener('click', addNewTask)

    function showTasks() {
        const source = document.getElementById("taskTemplate").innerHTML;
        const template = Handlebars.compile(source);
        const html = template(taskManager);

        let container = getById('main')
        container.innerHTML = html;

    };

    function addFuncToDeleteBtn() {
        let arrFromDeleteButtons = Array.from(document.getElementsByName("deleteButton"))

        arrFromDeleteButtons.forEach(el => el.addEventListener("click", function (ev) {
            ev.stopPropagation();

            taskManager.removeTask(Number(el.id));
            showTasks();
            addFuncToDeleteBtn();
            toggleClasses();
            setTasks();
        }))
    }

    function setTasks(obj) {
        const localTaskManager = JSON.stringify(taskManager)
        localStorage.setItem('localTaskManager', localTaskManager)
    }

    function changeClassName(index) {
        let currentTaskToChange = taskManager.tasksToDo.findIndex(el => el["id"] === parseInt(index))
        taskManager.tasksToDo[currentTaskToChange].classType = "taskToDo doneTask"
    }

    function toggleClasses() {
        let arrOfListEl = Array.from(document.getElementsByClassName("taskToDo"))
        arrOfListEl.forEach(el => el.addEventListener("click", function (ev) {

            el.classList.toggle("doneTask");

            taskIndex = ev.target.id;

            changeClassName(taskIndex);
            setTasks();
        }))
    }

    showTasks();
    addFuncToDeleteBtn();
    toggleClasses();


    function onclick(event) {
        if (!isShowingForm) {
            ADD_BUTTON.innerHTML = 'Close Form <i class="fas fa-minus"></i>'
            unfade(FORM_BOX);
            isShowingForm = true
        } else {
            ADD_BUTTON.innerHTML = 'Add New <i class="fas fa-plus">'
            fade(FORM_BOX)

            document.getElementById("input").placeholder = "Type Here"
            isShowingForm = false;
        };

    }

    function addNewTask(event) {
        event.preventDefault();
        const input = getById("input").value
        let isValid = false;

        if (input.trim().length > 3) {
            isValid = true;
            document.getElementById("input").placeholder = "Type Here"

        } else {
            document.getElementById("form").reset();

            document.getElementById("input").placeholder = "Invalid Input"
        }

        if (isValid) {
            let title = getById("input").value;
            let id = taskManager.counter;

            let currentTask = new Task(title, id);

            ++taskManager.counter;

            FORM.reset();

            taskManager.addTask(currentTask)

            showTasks();

            addFuncToDeleteBtn();


            toggleClasses();

            setTasks()
        }
    }

}
)();