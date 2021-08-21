const dragon = document.getElementById("dragon");
console.log(dragon);
class Character {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.originalWidth = 682;
    this.originalHeight = 474;
    this.w = this.originalWidth / 10;
    this.h = this.originalHeight / 10;
    this.color = color;
    this.dy = 0;
    this.weight = 1;
    this.jumpTimer = 0;
    this.grounded = false;
    this.frameX = 0;
  }
  draw() {
    context.fillStyle = this.color;
    // context.fillRect(this.x, this.y, this.w, this.h);
    context.drawImage(
      dragon,
      this.frameX * this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x - 5,
      this.y - 20,
      this.w * 1.7,
      this.h * 1.7,
    );
  }
  update() {
    if (jumped) this.grounded = false;
    else this.grounded = true;

    if (moreG) this.weight = 9;
    else {
      moreG = false;
      this.weight = 1;
    }
    if (this.y > canvas.height - this.h) {
      // checking for bottom wall collision and preventing in
      this.y = canvas.height - this.h;
      this.dy = 0;
    } else {
      this.dy += this.weight;
      this.y += this.dy;
    }
    // checking for top wall collision and preventing in
    if (this.y < -120 + this.h) {
      this.y = -120 + this.h;
      this.dy = 0;
    }
    if (jumped) this.jump();
    else this.jumpTimer = 0;
  }
  jump() {
    if (!this.grounded && this.jumpTimer === 0) {
      this.jumpTimer = 1;
      this.dy -= 10;
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15 && !this.grounded) {
      this.jumpTimer++;
      this.dy = -10;
    } else {
      this.grounded = true;
    }
  }
  running() {
    if (this.frameX > 3) {
      this.frameX = 0;
    } else this.frameX++;
  }
}
const character = new Character(200, 629, 70, 120, "red");
