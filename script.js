const inputColor = document.querySelector("#color");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const clearBtn = document.querySelector("#clear");
const thickness = document.querySelector("#thickness");
const myCanvas = document.querySelector("#myCanvas");
const ctx = myCanvas.getContext("2d");
let rAF;
myCanvas.width = window.innerWidth * 0.8;
myCanvas.height = window.innerHeight * 0.92;

console.log(
  clearBtn,
  plus,
  minus,
  inputColor.value,
  +thickness.textContent,
  ctx
);

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

function draw(eve, thickness, color) {
  ctx.beginPath();
  ctx.arc(eve.offsetX, eve.offsetY, thickness, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

window.addEventListener("mousedown", (e) => {
  console.log(e.x, e.y);
  const color = inputColor.value;
  const t = +thickness.textContent;
  draw(e, t, color);
});

clearBtn.addEventListener("click", clear);
plus.addEventListener("click", thicknessUp);
minus.addEventListener("click", thicknessDown);
