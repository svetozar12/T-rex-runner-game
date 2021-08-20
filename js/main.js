let score = 0;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;
let jumped = false;
let moreG = false;
let gameStarted = false;

const update = () => {
  requestAnimationFrame(update);
  if (gameStarted) {
    score += 0.05;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "10px sans-serif";
    scoreText.draw();
    character.draw();
    character.update();
    handleObstacles();
    collisionDetection();
  } else {
    return;
  }
};
update();

input();
console.log(list[2]);
if (list[list.length - 1].x <= 0) {
  setTimeout(() => {
    list.pop(new Obstacles());
    alert("GOOD JOB YOU WIN!!!");
  }, 1000);
}
