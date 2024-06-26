const inputColor = document.querySelector("#color");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const clearBtn = document.querySelector("#clear");
const thickness = document.querySelector("#thickness");
const myCanvas = document.querySelector("#myCanvas");

const ctx = myCanvas.getContext("2d");
let isDrawing = false;

myCanvas.width = window.innerWidth * 0.8;
myCanvas.height = window.innerHeight * 0.92;

myCanvas.addEventListener("mousedown", start);
myCanvas.addEventListener("mousemove", draw);
myCanvas.addEventListener("mouseup", end);

function thicknessUp(a) {
  if (+thickness.textContent < 50) {
    thickness.textContent = +thickness.textContent + 5;
  }
}

function thicknessDown(a) {
  if (+thickness.textContent > 5) {
    thickness.textContent = +thickness.textContent - 5;
  }
}

function start(eve) {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineTo(eve.offsetX, eve.offsetY);
  eve.preventDefault();
}

function end(eve) {
  if (isDrawing) {
    ctx.stroke();
    ctx.closePath();
    isDrawing = false;
  }
  eve.preventDefault();
}

function draw(eve) {
  const color = inputColor.value;
  const t = +thickness.textContent;
  if (isDrawing) {
    ctx.lineTo(eve.offsetX, eve.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = t;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
  eve.preventDefault();
}

function clear() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

clearBtn.addEventListener("click", clear);
plus.addEventListener("click", thicknessUp);
minus.addEventListener("click", thicknessDown);
