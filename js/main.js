const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;
let temp = 500;
let jumped = false;

const update = async () => {
  await character.draw();
  requestAnimationFrame(update);
};

update();

window.addEventListener("keydown", (e) => {
  if (jumped) return;
  else if (e.code === "Space") {
    temp -= 60;
    jumped = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (!jumped) return;
  if (e.code === "Space") {
    temp += 60;
    jumped = false;
  }
});
console.log("loaded main.js");
