class Character {
  constructor(x, y, w, h, color) {
    this.x = x; //200
    this.y = y; //629
    this.w = w; //70
    this.h = h; //120
    this.color = color; //red
    this.dy = 0;
    this.weight = 1;
    this.jumpTimer = 0;
    this.grounded = false;
  }
  draw() {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.w, this.h);
  }
  update() {
    if (jumped) this.grounded = false;
    else this.grounded = true;
    // checking for bottom wall collision and preventing in
    if (this.y > canvas.height - this.h) {
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
      console.log(this.jumpTimer);
    } else {
      this.grounded = true;
      console.log(this.jumpTimer);
    }
  }
}
const character = new Character(200, 629, 70, 120, "red");
console.log("loaded character.js");
