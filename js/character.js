class Character {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
  draw() {
    context.fillStyle = "red";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(10, temp, 50, 90);
  }
}

const character = new Character();
console.log("loaded character.js");
