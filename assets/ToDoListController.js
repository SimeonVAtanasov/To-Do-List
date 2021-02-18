(() => {
    let taskManager = new TaskListManager()

    let taskCounter = 0;
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

    showTasks();


    function onclick(event) {
        if (!isShowingForm) {
            ADD_BUTTON.innerHTML = 'Close Form <i class="fas fa-minus"></i>'
            showElement(FORM_BOX);
            isShowingForm = true
        } else {
            ADD_BUTTON.innerHTML = 'Add New <i class="fas fa-plus">'
            hideElement(FORM_BOX)
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
            let id = taskCounter;

            let currentTask = new Task(title, id);


            ++taskCounter;

            FORM.reset();

            taskManager.addTask(currentTask)
            console.log(taskManager);

            showTasks();
        }
    }

    function removeTask(event) {
        let target = event.target.parentElement.parentElement;
        let list = document.querySelector("ul");
        list.removeChild(target);

        if (list.childElementCount === 0) {
            document.querySelector("main  h2").style.display = 'block';
            list.style.display = 'none'
        }
    }

}
)();