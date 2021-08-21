let score = 0;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;
// global variables

let jumped = false;
let moreG = false;
let gameStarted = false;

// function that loops infinitely
const update = () => {
  requestAnimationFrame(update);
  if (gameStarted) {
    // score text
    context.fillStyle = "black";
    context.font = "30px sans-serif";
    context.fillText(1, 10, 50);
    // cleaner rectangle
    context.clearRect(0, 0, canvas.width, canvas.height);
    // score drawing
    context.fillStyle = "red";
    context.font = "30px sans-serif";
    context.textAlign = "center";
    context.fillText(Math.floor(score), 1220, 80);
    // character class
    character.draw();
    character.update();
    handleObstacles();
    collisionDetection();
  } else {
    // menu class
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
