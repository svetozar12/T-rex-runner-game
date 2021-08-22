const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 1280;
canvas.height = 720;
// global variables
let score = 0;
let jumped = false;
let moreG = false;
let gameStarted = false;
let gameSpeed = 10;

const BG = document.getElementById("BG");

const background = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function handleBackground() {
  if (background.x1 <= -background.width + gameSpeed)
    background.x1 = background.width;
  else background.x1 -= gameSpeed;

  if (background.x2 <= -background.width + gameSpeed)
    background.x2 = background.width;
  else background.x2 -= gameSpeed;
  context.drawImage(
    BG,
    background.x1,
    background.y,
    background.width,
    background.height,
  );

  context.drawImage(
    BG,
    background.x2,
    background.y,
    background.width,
    background.height,
  );
}

// function that loops infinitely
const update = () => {
  requestAnimationFrame(update);
  if (gameStarted) {
    // score counting
    // score += 0.04;
    score += 0.06;
    // cleaner rectangle
    context.clearRect(0, 0, canvas.width, canvas.height);
    handleBackground();
    // score drawing
    context.fillStyle = "black";
    context.font = "40px sans-serif";
    context.textAlign = "center";
    context.fillText(Math.floor(score), 1220, 80);
    // character class
    character.draw();
    character.update();
    character.running();
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
// wining condition
if (list[list.length - 1].x <= 0) {
  setTimeout(() => {
    list.pop(new Obstacles());
    alert("GOOD JOB YOU WIN!!!");
  }, 1000);
}
