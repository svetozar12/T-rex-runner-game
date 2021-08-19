class Character {
  constructor() {
    this.x = 200;
    this.y = 629;
    this.width = 70;
    this.height = 120;
    this.dy = 0;
    this.weight = 1;
    this.jumpTimer = 0;
    this.grounded = false;
  }
  draw() {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    if (jumped) this.grounded = false;
    else this.grounded = true;
    // console.log(this.grounded + " gro");
    // checking for bottom wall collision and preventing in
    if (this.y > canvas.height - this.height) {
      this.y = canvas.height - this.height;
      this.dy = 0;
    } else {
      this.dy += this.weight;
      this.y += this.dy;
    }
    // checking for top wall collision and preventing in
    if (this.y < -120 + this.height) {
      this.y = -120 + this.height;
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
const character = new Character();
console.log("loaded character.js");
