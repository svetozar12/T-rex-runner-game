class Menu {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
  }
  draw() {
    context.font = "30px sans-serif";
    context.fillText(this.text, this.x, this.y);
  }
}

const scoreText = new Menu(1, 10, 50);
