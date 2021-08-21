const input = () => {
  window.onkeydown = (e) => {
    if (e.code === "Space") {
      jumped = true;
    }

    if (e.code === "ArrowDown" || e.code === "KeyS") {
      moreG = true;
    }

    if (e.code === "Enter") {
      gameStarted = !gameStarted;
      character.frameX = 0;
    }
  };

  window.onkeyup = (e) => {
    if (e.code === "Space") {
      jumped = false;
    }
    if (e.code === "ArrowDown" || e.code === "KeyS") {
      moreG = false;
    }
  };
};
