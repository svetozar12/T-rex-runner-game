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
    // score text
    context.fillStyle = "black";
    context.font = "30px sans-serif";
    context.fillText(1, 10, 50);
    // cleaner rectangle
    context.clearRect(0, 0, canvas.width, canvas.height);
    // menu class
    // scoreText.draw();
    // character class
    character.draw();
    character.update();
    handleObstacles();
    collisionDetection();
  } else {
    context.textAlign = "center";
    resumeText.draw();
    controlsText.draw();
    goalText.draw();
    return;
  }
};
update();

input();
if (list[list.length - 1].x <= 0) {
  setTimeout(() => {
    list.pop(new Obstacles());
    alert("GOOD JOB YOU WIN!!!");
  }, 1000);
}
