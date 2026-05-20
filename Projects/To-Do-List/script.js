function addNewTask() {
  const taskToAdd = document.getElementById("newTask").value.trim();

  if (taskToAdd === "") {
    alert("Please Enter A Task");
    return;
  }

  createTask(taskToAdd, false);

  saveToLocalStorage(taskToAdd);

  document.getElementById("newTask").value = "";
}

function createTask(taskText, completed) {
  const LI = document.createElement("li");

  LI.classList.add("my-3");

  const DIV = document.createElement("div");

  DIV.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "flex-warp",
    "gap-3",
  );

  const SPAN1 = document.createElement("span");

  SPAN1.innerText = taskText;

  SPAN1.classList.add("fs-5");

  if (completed) {
    SPAN1.classList.add("text-decoration-line-through", "text-secondary");
  }

  const buttonDiv = document.createElement("div");

  buttonDiv.classList.add("d-flex", "gap-2");

  const doneBtn = document.createElement("button");
  doneBtn.classList.add(
    "btn",
    "btn-success",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    "gap-2",
  );

  if (completed) {
    doneBtn.innerHTML = `
    <i class="bi bi-arrow-counterclockwise"></i>
    Undo
    `;
  } else {
    doneBtn.innerHTML = `
    <i class="bi bi-check-circle"></i>
    Done
    `;
  }

  doneBtn.onclick = () => {
    SPAN1.classList.toggle("text-decoration-line-through");
    SPAN1.classList.toggle("text-secondary");

    if (doneBtn.innerText.includes("Done")) {
      doneBtn.innerHTML = `
    <i class="bi bi-arrow-counterclockwise"></i>
    Undo
    `;
    } else {
      doneBtn.innerHTML = `
    <i class="bi bi-check-circle"></i>
    Done
    `;
    }

    updateLocalStorage();
  };

  const Button = document.createElement("button");

  Button.classList.add(
    "btn",
    "btn-danger",
    "d-flex",
    "gap-2",
    "align-items-center",
    "justify-content-center",
  );

  Button.onclick = () => {
    LI.remove();
    removeTaskFromLocalStorage(taskText);
  };

  const I = document.createElement("i");

  I.classList.add("bi", "bi-trash");

  const SPAN2 = document.createElement("span");

  SPAN2.innerHTML = "Delete";

  Button.appendChild(I);
  Button.appendChild(SPAN2);

  buttonDiv.appendChild(doneBtn);
  buttonDiv.appendChild(Button);

  DIV.appendChild(SPAN1);
  DIV.appendChild(buttonDiv);

  LI.appendChild(DIV);

  document.getElementById("taskDiv").classList.remove("d-none");
  document.getElementById("taskList").appendChild(LI);
}

function saveToLocalStorage(taskToAdd) {
  const taskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  taskArray.push({
    text: taskToAdd,
    completed: false,
  });

  localStorage.setItem("toDoTask", JSON.stringify(taskArray));
}

function getTaskFromLocalStorage() {
  const taskArray = JSON.parse(localStorage.getItem("toDoTask")) || [];

  taskArray.forEach((element) => {
    createTask(element.text, element.completed);
  });

  localStorage.setItem("toDoTask", JSON.stringify(taskArray));
}

function removeTaskFromLocalStorage(taskItem) {
  const TaskArray = JSON.parse(localStorage.getItem("toDoTask"));

  const newTaskArray = TaskArray.filter((item) =>
    item.text !== taskItem
  );

  localStorage.setItem("toDoTask", JSON.stringify(newTaskArray));

  if (document.getElementById("taskList").children.length === 0) {
    document.getElementById("taskDiv").classList.add("d-none");
  }
}

function updateLocalStorage() {
  const updatedTasks = [];
  const allTasks = document.querySelectorAll("#taskList li");

  allTasks.forEach((task) => {
    updatedTasks.push({
      text: task.querySelector("span").innerText,
      completed: task
        .querySelector("span")
        .classList.contains("text-decoration-line-through"),
    });
  });

  localStorage.setItem("toDoTask", JSON.stringify(updatedTasks));
}

getTaskFromLocalStorage();

document.getElementById("newTask").addEventListener("keydown" , function(event) {
  if(event.key === "Enter"){
    addNewTask();
  }
})
