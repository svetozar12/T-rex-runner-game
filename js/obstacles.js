let list = [];
let consoleLog = [];
class Obstacles {
  constructor(x) {
    this.x = x + Math.random() * -1000;
    this.y = 629;
    this.w = 30;
    this.h = 30;
    this.color = "green";
    this.obstacleSpeed = 4;
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
  checkDistance() {}
}

const initObstacle = () => {
  for (let i = 1800; i <= 40000; i += 500) {
    list.push(new Obstacles(i));
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
      alert("Game over !!!");
      location.reload();
      return;
    }
  }
};
