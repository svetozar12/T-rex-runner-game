class Character {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.dy = 0;
    this.weight = 1;
    this.jumpTimer = 0;
    this.grounded = false;
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
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
}
const character = new Character(200, 629, 70, 120, "red");
