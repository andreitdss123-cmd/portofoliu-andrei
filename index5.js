const formEl = document.querySelector(".todo-form");
const inputEl = document.getElementById("task-input");
const dateStart = document.getElementById("start-date");
const dateStop = document.getElementById("stop-date");
const ulEl = document.getElementById("task-nou");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask();
});

function addTask() {
    const newTask = inputEl.value.trim();
    if (!newTask) return;
    
    if (dateStart.value && dateStop.value && dateStop.value < dateStart.value) return;

    const liEl = document.createElement("li");

    const textEl = document.createElement("span");
    textEl.textContent = newTask;
    liEl.append(textEl);

    if (dateStart.value && dateStop.value) {
        const datesEl = document.createElement("small");
        datesEl.textContent = `${dateStart.value} → ${dateStop.value}`;
        textEl.append(datesEl);
    }

    const actionsEl = document.createElement("div");
    actionsEl.className = "actions";

    const checkBtnEl = document.createElement("button");
    checkBtnEl.type = "button";
    checkBtnEl.setAttribute("aria-label", "Bifează");
    checkBtnEl.innerHTML = '<i class="fa-solid fa-check"></i>';

    const trashBtnEl = document.createElement("button");
    trashBtnEl.type = "button";
    trashBtnEl.setAttribute("aria-label", "Șterge");
    trashBtnEl.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    actionsEl.append(checkBtnEl, trashBtnEl);
    liEl.append(actionsEl);
    ulEl.appendChild(liEl);

    checkBtnEl.addEventListener("click", () => liEl.classList.toggle("checked"));
    trashBtnEl.addEventListener("click", () => liEl.remove());

    inputEl.value = "";
    dateStart.value = "";
    dateStop.value = "";
}