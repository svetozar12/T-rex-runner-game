const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;
// let temp = 629;
let jumped = false;

const update = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  character.draw();
  character.update();
  requestAnimationFrame(update);
};
update();

input();

// const func = (sec) => {
//   const reqId = requestAnimationFrame(func);
//   let timeInSeconds = Math.floor(sec / 1000);
//   console.log(timeInSeconds);
//   if (jumped) cancelAnimationFrame(reqId);
// };
