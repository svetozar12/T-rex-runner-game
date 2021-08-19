let list = [];

class Obstacles {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.obstacleSpeed = 4;
    this.randomX = Math.random() * (1600 - 1300) + 1300;
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.randomX, this.y, this.w, this.h);
  }
  update() {
    this.randomX -= this.obstacleSpeed;
    this.y += 10;

    if (this.y > canvas.height - this.h) {
      // checking for bottom wall collision and preventing in
      this.y = canvas.height - this.h;
    }
  }
}
const obstacle = new Obstacles(1229, 600, 70, 30, "green");
for (let i = 0; i < 100; i++) {
  list.push(new Obstacles(obstacle.randomX, 600, 70, 30, "green"));
}
