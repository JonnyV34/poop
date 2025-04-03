// ⏰ Update Clock
function updateClock() {
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// 🎨 Toggle Dark Mode
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// 📜 Fetch Random Quote
async function getQuote() {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    document.getElementById("quote").textContent = data.content;
}

// 🎨 Drawing Canvas
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 200;
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;
    ctx.fillStyle = "black";
    ctx.fillRect(e.offsetX, e.offsetY, 3, 3);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 📝 To-Do List
function addTask() {
    const input = document.getElementById("todoInput");
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;
    li.addEventListener("click", () => li.classList.toggle("completed"));

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}

// 🎮 Play Sound
function playSound() {
    document.getElementById("soundEffect").play();
}
