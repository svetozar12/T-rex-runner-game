const cactus = document.getElementById("cactus");

let list = [];
let consoleLog = [];
class Obstacles {
  constructor(x) {
    this.x = x + Math.random() * -1000;
    this.y = 630;
    this.originalWidth = 490;
    this.originalHeight = 570;
    this.w = this.originalWidth / 8;
    this.h = this.originalHeight / 8;
    this.color = "green";
    this.obstacleSpeed = 4;
    this.score = 0;
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.drawImage(
      cactus,
      0,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x - 25,
      this.y - 20,
      this.w * 2,
      this.h * 1.7,
    );
  }
  update() {
    this.x -= this.obstacleSpeed;
    this.y += 10;
    // checking for bottom wall collision and preventing in
    if (this.y > canvas.height - this.h) {
      this.y = canvas.height - this.h;
    }
  }
}

const initObstacle = () => {
  let k;

  for (k = 1800; k <= 40500; k += 500) {
    list.push(new Obstacles(k));
  }
};
initObstacle();
const handleObstacles = () => {
  for (let i = 0; i < list.length; i++) {
    list[i].draw();
    list[i].update();
    // console.log(list[i].x);
    if (list[i].x === 0) {
      console.log("pass");
    }
  }
};

const collisionDetection = () => {
  for (let i = 0; i < list.length; i++) {
    if (
      character.x < list[i].x + list[i].w &&
      character.x + character.w > list[i].x &&
      character.y < list[i].y + list[i].h &&
      character.y + character.h > list[i].y
    ) {
      alert(`Your score is ${Math.floor(score)}`);
      score = 0;
      window.location.href = window.location.href;
      return;
    }
  }
};
