const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;
let jumped = false;
let moreG = false;
const update = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  character.draw();
  character.update();
  handleObstacles();
  collisionDetection();

  requestAnimationFrame(update);
};
update();

input();
