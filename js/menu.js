class Menu {
  constructor(text, x, y, color) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = 0;
  }
  draw() {
    context.fillStyle = this.color;
    context.font = "30px sans-serif";
    context.textAlign = "center";
    context.fillText(this.text, this.x, this.y);
  }
}

const scoreText = new Menu(1, 10, 50, "black");
const resumeText = new Menu(
  "Press enter to resume",
  canvas.width * 2.1,
  canvas.height * 1.9,
  "black",
);

const controlsText = new Menu(
  "CONTROLS: Space for jump || ArrowDown, S for faster falling",
  canvas.width * 2.1,
  canvas.height * 2.3,
  "black",
);

const goalText = new Menu(
  "GOAL: Jump over the obstacles.",
  canvas.width * 2.1,
  canvas.height * 2.7,
  "black",
);
