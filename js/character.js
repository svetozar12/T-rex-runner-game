class Character {
  constructor() {
    this.x = 200;
    this.y = 629;
    this.width = 70;
    this.height = 120;
    this.vy = 0;
    this.weight = 1;
  }
  draw() {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    // checking for bottom wall collision and preventing in
    if (this.y > canvas.height - this.height) {
      this.y = canvas.height - this.height;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.y += this.vy;
    }
    // checking for top wall collision and preventing in
    if (this.y < -120 + this.height) {
      this.y = -120 + this.height;
      this.vy = 0;
    }
  }
}

const character = new Character();

const jump = () => {
  character.y = 300;
};
