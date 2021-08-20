let list = [];
let consoleLog = [];
class Obstacles {
  constructor(x) {
    this.x = x + Math.random() * -1000;
    this.y = 629;
    this.w = 30;
    this.h = 50;
    this.color = "green";
    this.obstacleSpeed = 4;
    this.score = 0;
    // this.randomX = Math.random() * (1600 - 1300) + 1300;
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
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
